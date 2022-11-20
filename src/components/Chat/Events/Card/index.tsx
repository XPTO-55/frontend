import React from 'react'
import { IEventUsers } from '../../../../services/types'
import CardInfo from './CardInfo'
import * as S from './styles'

interface CardProps {
  data: IEventUsers
}

function Card ({ data }: CardProps) {
  return (
    <S.Container status={data.status}>
      <CardInfo data={data} />
    </S.Container>
  )
}

export default Card
