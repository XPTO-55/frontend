import React from 'react'
import * as S from './styles'
import { IMessageInfoProps } from './types'

export function MessageInfo({ data }: IMessageInfoProps) {
  return (
    <>
      <S.MessageInfoContainer>
        <S.ContainerProfileImage>
          <img src={'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000'} alt="" />
        </S.ContainerProfileImage>
        <S.MessageInfo>
          <S.SenderName>
            <h6>
              {data.senderName}
            </h6>
          </S.SenderName>
          <S.MessageText>
            {data.message}
          </S.MessageText>
        </S.MessageInfo>
      </S.MessageInfoContainer>

    </>
  )
}
