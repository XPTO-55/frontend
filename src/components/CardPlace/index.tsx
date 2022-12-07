import React from 'react'
import * as S from './styles'
import { CardPlaceProps } from './types'

export const CardPlace = ({ place, ...props }: CardPlaceProps) => {
  return (
    <S.CardContainer {...props}>
      <S.ContainerCardLeft>
        <img
          src={place.imageUrl}
          alt=""
        />
      </S.ContainerCardLeft>
      <S.ContainerCardRight>
        <p>{place?.nomeLugar}</p>

        <h2>
          {place?.address?.street}, {place?.address?.number}
        </h2>
        <h2>CEP: {place?.address?.zipcode}</h2>
        <h2>
          {place?.address?.city} - {place?.address?.uf}
        </h2>
      </S.ContainerCardRight>
    </S.CardContainer>
  )
}
