import React from 'react'
import * as S from './styles'
import { IMessageReplyProps } from './types'

export function MessageReply({ data }: IMessageReplyProps) {
  return (
    <>
      <S.MessageReplyContainer>
        <S.ContainerProfileImage>
          <img src={'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000'} alt="" />
        </S.ContainerProfileImage>
        <S.MessageReply>
          <S.SenderName>Nazaré Tedesco</S.SenderName>
          <S.MessageText>
            {data.text}
          </S.MessageText>belesma
        </S.MessageReply>
      </S.MessageReplyContainer>

    </>
  )
}
