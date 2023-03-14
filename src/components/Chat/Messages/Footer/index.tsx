import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineSend } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'
import { useMutation } from 'react-query'
import { createMessage } from '../../../../services/messages.service'
import { FooterProps } from './types'
import { ICreateMessageRequest, IMessage } from '../../../../services/types'
import { useAuth } from '../../../../context/auth'
import { Toast } from '../../../../@shared/Toast'
// import { useChat } from '../../../../context/chat'

export function Footer({ forumId }: FooterProps) {
  const { user } = useAuth()
  const [message, setMessage] = useState<string>()
  const {
    mutate,
    isLoading,
    isError,
    error
  } = useMutation<IMessage, unknown, ICreateMessageRequest>(
    async (messageData) => await createMessage(forumId, messageData),
    {
      onSuccess: () => {
        setMessage('')
      }
    }
  )

  const handleSubmitMessage = () => {
    if (!message || !user) return
    const payloadMessage: ICreateMessageRequest = {
      message,
      senderName: user?.username,
      senderId: user?.id
    }
    mutate(payloadMessage)
  }

  return (
    <>
      <S.Footer>
        <S.ActionContainer>
          <S.ActionButton>
            <ImAttachment size={16} />
          </S.ActionButton>
        </S.ActionContainer>
        <S.MessageInput type="text" value={message} onChange={({ target: { value } }) => setMessage(value)} />
        {message
          ? <S.ActionContainer onClick={handleSubmitMessage}>
            <S.ActionButton disabled={isLoading}>
              <AiOutlineSend size={16} />
            </S.ActionButton>
          </S.ActionContainer>
          : null}
        { isError
        // @ts-expect-error
          ? <Toast type='error' title='Error' description={error?.message?.message ?? error?.message} />
          : null}
      </S.Footer>
    </>
  )
}
