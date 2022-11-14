import React from 'react'
import { IForum } from '../../../../services/forum.service'
import CardInfo from './CardInfo'
import * as S from './styles'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IForum
}

function Card ({ data, ...props }: CardProps) {
  return (
    <S.Container {...props}>
      <CardInfo data={data} />
      <S.Join> join &#8250; </S.Join>
    </S.Container>
  )
}

export default Card
