import React from 'react'
import { IPlaces } from './../../services/places.service'
export interface CardPlaceProps extends React.HTMLAttributes<HTMLDivElement> {
  place: IPlaces
  onClick?: () => void
}
