import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsArrowReturnRight } from 'react-icons/bs'
import { ButtonWithoutStyles } from '../../../../../../@shared/ButtonWithoutStyles'
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
          <S.SenderName>Nazaré Tedesco</S.SenderName>
          <S.MessageText>
            {data.text}
          </S.MessageText>belesma
        </S.MessageInfo>
      </S.MessageInfoContainer>

    </>
  )
}
