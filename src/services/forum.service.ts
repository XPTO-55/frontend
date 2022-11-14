import { api } from './api'

export interface IForum {
  id: string
  name: string
  imageUrl: string
  members: number
}

export const getForums = async (): Promise<IForum[]> => {
  const { data } = await api('/forums')
  return data as IForum[]
}
