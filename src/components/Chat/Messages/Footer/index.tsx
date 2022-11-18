import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineSend } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'

export function Footer() {
  const [message, setMessage] = useState<string>()
  return (
    <S.Footer>
      <S.ActionContainer>
        <S.ActionButton>
          <ImAttachment size={16} />
        </S.ActionButton>
      </S.ActionContainer>
      <S.MessageInput type="text" value={message} onChange={({ target: { value } }) => setMessage(value)} />
      {message
        ? <S.ActionContainer>
          <S.ActionButton>
            <AiOutlineSend size={16} />
          </S.ActionButton>
        </S.ActionContainer>
        : null}
    </S.Footer>
  )
}
