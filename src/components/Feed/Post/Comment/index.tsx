import React from 'react'
import { CommentProps } from './types'
import * as S from './styles'
import { makeProfileImageurlS3 } from '../../../../util/make-image-url-s3'

export default function Comment({ comment }: CommentProps) {
  return (
    <S.Container>
      <S.ContainerProfileImage>
        <img src={makeProfileImageurlS3(comment?.patient?.profileUrl)} />
      </S.ContainerProfileImage>
      <S.ContainerInfo>
        <S.Username>{comment?.patient?.name}</S.Username>
        <S.Comment>{comment?.comment}</S.Comment>
      </S.ContainerInfo>
    </S.Container>
  )
}
