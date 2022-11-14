import React from 'react'
import { IForum } from '../../../../services/forum.service'
import * as S from './styles'
import CardInfo from './CardInfo'

interface InfoProps {
  data: Omit<IForum, 'id'>
}

export function Header ({ data }: InfoProps) {
  return (
    <S.Header>
      {data ? <CardInfo data={data} /> : null}
    </S.Header>
  )
}
