import { api } from './api'

export interface IPlaces {
  idLugar: number
  nomeLugar: string
  address: {
    street: string
    number: string
    zipcode: string
    city: string
    uf: string
  }
}

export const getPlaces = async () => {
  const { data } = await api.get('/places')
  return data as IPlaces[]
}
