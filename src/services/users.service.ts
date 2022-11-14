import { api } from './api'

export interface IUser {
  id: string
  name: string
  imageUrl: string
}

export const getForums = async (): Promise<IUser[]> => {
  const { data } = await api('/users')
  return data as IUser[]
}
