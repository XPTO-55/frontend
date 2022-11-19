import React from 'react'
import PrismicDOM from 'prismic-dom'
import { CommentProps } from './types'
import * as S from './styles'

export default function Comment({ comment }: CommentProps) {
  return (
    <S.Container>
      <S.ContainerProfileImage>
        <img src={PrismicDOM.Link.url(comment.data.profileimageurl) || '/assets/img/user-avatar.png'} alt="" />
      </S.ContainerProfileImage>
      <S.ContainerInfo>
        <S.Username>{PrismicDOM.RichText.asText(comment.data.username)}</S.Username>
        <S.Comment>{comment.data.comment}</S.Comment>
      </S.ContainerInfo>
    </S.Container>
  )
}
