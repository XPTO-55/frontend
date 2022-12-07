import { api } from './api'

export interface IPlaces {
  idLugar: number
  imageUrl: string
  nomeLugar: string
  address: {
    street: string
    number: string
    zipcode: string
    city: string
    uf: string
    latitude: number
    longitude: number
  }
}

export const getPlaces = async () => {
  const { data } = await api.get('/places')
  return data as IPlaces[]
}
