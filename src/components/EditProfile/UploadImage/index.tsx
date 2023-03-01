import React, { MouseEvent, useState } from 'react'
import * as S from './styles'
import { TfiPencil } from 'react-icons/tfi'
import { IUploadImageProps } from './types'
import { makeProfileImageurlS3 } from '../../../util/make-image-url-s3'
import { useAuth } from '../../../context/auth'
import { useMutation } from 'react-query'
import { updatePatientProfileImage } from '../../../services/patient.service'
import { updateProfessionalProfileImage } from '../../../services/professional.service'
import { Toast } from '../../../@shared/Toast'
import { Button } from '../../Layout/Header/styles'

export const UploadImage = ({ profileUrl = '', ...props }: IUploadImageProps) => {
  const { user } = useAuth()
  const [file, setFile] = useState<File | null>(null)

  const updateProfileImageFunction =
    user?.userType === 'patients'
      ? updatePatientProfileImage
      : updateProfessionalProfileImage

  const { mutate, isError, error, isSuccess } = useMutation<unknown, unknown, FormData>(async (data) => {
    if (!user?.id) return
    await updateProfileImageFunction(user?.id, data)
  })

  const handleChange = (event: MouseEvent) => {
    event.preventDefault()
    if (!file) return
    const data = new FormData()
    data.append('file', file, file.name)
    mutate(data)
  }
  return (
    <>
      <S.Label htmlFor="arquivo">
        <img
          src={makeProfileImageurlS3(profileUrl)}
          alt="Profile image"
        />
        <TfiPencil size={36} />
      </S.Label>
      <S.Input
        type="file"
        onChange={(e) => {
          if (!e?.currentTarget?.files) return
          setFile(e?.currentTarget?.files[0])
        }}
        id="arquivo"
        disabled={props.edit}
      />
      {!props.edit
        ? (
          <Button onClick={handleChange}>Enviar</Button>
        )
        : null}
      {isSuccess
        ? <Toast type='success' title='Image profile updated' />
        : null}
      {isError
        ? <Toast
          type='error'
          title='Failed update image profile'
          // @ts-expect-error
          description={error?.message?.message || error?.message}
        />
        : null}
    </>
  )
}
