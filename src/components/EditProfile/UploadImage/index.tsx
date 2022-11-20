import React from 'react'
import * as S from './styles'
import { TfiPencil } from 'react-icons/tfi'

export const UploadImage = () => {
  return (
    <>
      <S.Label htmlFor="arquivo">
        <TfiPencil />
      </S.Label>
      <S.Input type="file" id="arquivo" />
    </>
  )
}
