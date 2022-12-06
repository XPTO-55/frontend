import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import * as S from './styles'
import { IMessageReplyProps } from './types'

export function MessageReply({ data }: IMessageReplyProps) {
  return (
    <>
      <S.MessageReplyContainer>
        <S.MessageInfo>
          <S.ContainerProfileImage>
            <img src={'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000'} alt="" />
          </S.ContainerProfileImage>
          <S.MessageReply>
            <S.SenderName>
              <h6>
                {data.senderName}
              </h6>
            </S.SenderName>
            <S.MessageText>
              <p>
                {data.message}
              </p>
            </S.MessageText>
          </S.MessageReply>

        </S.MessageInfo>
        <S.ButtonActionReplyes>
          <AiOutlineClockCircle />
          <p>
            {data.createdAt ? new Intl.DateTimeFormat('pt-BR').format(new Date(data.createdAt)) : null}
          </p>
        </S.ButtonActionReplyes>
      </S.MessageReplyContainer>

    </>
  )
}
