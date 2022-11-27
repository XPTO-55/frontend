import { api } from './api'
import { IForum, IMessage } from './types'

export const getForums = async (): Promise<IForum[]> => {
  const { data } = await api.get('/forums')
  return data as IForum[]
}

export const getForumMessages = async (id: string): Promise<IMessage[]> => {
  const { data } = await api.get(`/forums/${id}/messages`)
  return data as IMessage[]
}
