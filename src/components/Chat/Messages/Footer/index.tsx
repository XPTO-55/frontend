import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineSend } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'
// import { useMutation } from 'react-query'
// import { createMessage } from '../../../../services/messages.service'
import { FooterProps } from './types'
import { ICreateMessageRequest } from '../../../../services/types'
import { useAuth } from '../../../../context/auth'
// import { Toast } from '../../../../@shared/Toast'
import { useChat } from '../../../../context/chat'

export function Footer({ forumId }: FooterProps) {
  const { user } = useAuth()
  const { sendMessage } = useChat()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string>()
  // const {
  //   mutate,
  //   isLoading,
  //   isError,
  //   error
  // } = useMutation<IMessage, unknown, ICreateMessageRequest>(
  //   async (messageData) => await createMessage(forumId, messageData),
  //   {
  //     onSuccess: () => {
  //       sendMessage(message)
  //       setMessage('')
  //     }
  //   }
  // )

  const handleSubmitMessage = () => {
    const payloadMessage: ICreateMessageRequest = {
      message,
      senderName: user?.username,
      userId: user?.id
    }
    setIsLoading(true)
    sendMessage(forumId, payloadMessage)
    // mutate(payloadMessage)
    setIsLoading(false)
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
      </S.Footer>
    </>
  )
}
