import React from 'react'
import { IForum } from '../../../../../services/types'
import * as S from './styles'

interface InfoProps {
  data: Omit<IForum, 'id'>
}

function Info ({ data }: InfoProps) {
  return (
    <S.Container>
      <S.ImageContainer >
        <S.ProfileImage src={data.imageUrl} alt="" />
      </S.ImageContainer>
      <S.TextContainer>
        <S.ForumName>{data.name}</S.ForumName>
        <S.Members>{data.members} members</S.Members>
      </S.TextContainer>
    </S.Container>
  )
}

export default Info
