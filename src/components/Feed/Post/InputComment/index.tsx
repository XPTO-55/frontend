import React, { FormEvent, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { Toast } from '../../../../@shared/Toast'
import { useAuth } from '../../../../context/auth'
import { createComment } from '../../../../services/comments.service'
import { createMessage } from '../../../../services/messages.service'
import { ICommentsResponse, ICreateCommentRequest, ICreateMessageRequest } from '../../../../services/types'
// import { useAuth } from '../../../../context/auth'
// import { ImAttachment } from 'react-icons/im'
import * as S from './styles'
import { InputCommentProps } from './types'

export function InputComment({ postId, setComments }: InputCommentProps) {
  const [comment, setComment] = useState<string>()
  const {
    mutate,
    isError,
    error
  } = useMutation<ICommentsResponse, unknown, ICreateCommentRequest>(
    async (commentData) => await createComment(postId, commentData),
    {
      onSuccess: (data) => {
        setComments(prev => [...prev, data])
        setComment('')
      }
    }
  )
  const { user } = useAuth()

  function handleSendMessage(e: FormEvent) {
    e.preventDefault()
    const payload = {
      comment,
      patientId: user?.id
    }
    mutate(payload)
  }

  return (
    <>
      <S.InputContainer>
        {/* <S.ActionContainer>
        <S.ActionButton>
          <ImAttachment size={16} />
        </S.ActionButton>
      </S.ActionContainer> */}
        <S.MessageInput
          type="text"
          value={comment}
          placeholder="comment here..."
          onChange={({ target: { value } }) => setComment(value)}
        />
        {comment
          ? <S.ActionContainer onClick={handleSendMessage}>
            <S.ActionButton>
              <AiOutlineSend size={16} />
            </S.ActionButton>
          </S.ActionContainer>
          : null}
      </S.InputContainer>
      {/* @ts-expect-error */}
      {isError ? <Toast type='error' title='Failed to send message' description={error?.message?.message || error?.message} /> : null}
    </>
  )
}
