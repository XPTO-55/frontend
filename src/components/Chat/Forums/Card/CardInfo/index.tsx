import React from 'react'
import { IForum } from '../../../../../services/types'
import { makeForumImageurlS3 } from '../../../../../util/make-image-url-s3'
import * as S from './styles'

interface InfoProps {
  data: IForum
}

function Info ({ data }: InfoProps) {
  return (
    <S.Container>
      <S.ImageContainer >
        <S.ProfileImage src={makeForumImageurlS3(data.imageUrl)} alt="" />
      </S.ImageContainer>
      <S.TextContainer>
        <S.ForumName>{data.name}</S.ForumName>
        <S.LatestMessage>Latest message</S.LatestMessage>
      </S.TextContainer>
    </S.Container>
  )
}

export default Info
