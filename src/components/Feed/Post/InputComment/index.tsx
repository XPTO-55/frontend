import React, { FormEvent, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
// import { useAuth } from '../../../../context/auth'
// import { ImAttachment } from 'react-icons/im'
import * as S from './styles'
import { InputCommentProps } from './types'

export function InputComment({ comments }: InputCommentProps) {
  const [message, setMessage] = useState<string>()
  // const { user } = useAuth()

  // const data = {
  //   username: user.username,
  //   comment: 'Passo bem mesmo',
  //   profileImageUrl: 'https://github.com/cristianoliveira15.png',
  //   post: '15156'
  // }

  function handleSendMessage(e: FormEvent) {
    e.preventDefault()
    comments.push()
  }

  return (
    <S.InputContainer>
      {/* <S.ActionContainer>
        <S.ActionButton>
          <ImAttachment size={16} />
        </S.ActionButton>
      </S.ActionContainer> */}
      <S.MessageInput
        type="text"
        value={message}
        placeholder="comment here..."
        onChange={({ target: { value } }) => setMessage(value)}
      />
      {message
        ? <S.ActionContainer onClick={handleSendMessage}>
          <S.ActionButton>
            <AiOutlineSend size={16} />
          </S.ActionButton>
        </S.ActionContainer>
        : null}
    </S.InputContainer>
  )
}
