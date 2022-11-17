import { api } from './api'
import { IForum } from './types'

export const getForums = async (): Promise<IForum[]> => {
  const { data } = await api.get('/forums')
  return data as IForum[]
}
