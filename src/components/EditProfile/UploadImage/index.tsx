import React from 'react'
import * as S from './styles'
import { TfiPencil } from 'react-icons/tfi'
import { IUploadImageProps } from './types'
import { makeProfileImageurlS3 } from '../../../util/profile-image-s3'

export const UploadImage = (props: IUploadImageProps) => {
  console.log('props.profileUrl', makeProfileImageurlS3(props.profileUrl))
  return (
    <>
      <S.Label htmlFor="arquivo">
        <img src={makeProfileImageurlS3(props.profileUrl)} />
        <TfiPencil size={36} />
      </S.Label>
      <S.Input type="file" id="arquivo" disabled={props.edit} />
    </>
  )
}
