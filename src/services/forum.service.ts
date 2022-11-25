import { api } from './api'
import { IForum, IForumMessages } from './types'

export const getForums = async (): Promise<IForum[]> => {
  const { data } = await api.get('/forums')
  return data as IForum[]
}

export const getForumMessages = async (id: string): Promise<IForumMessages> => {
  const { data } = await api.get(`/forums/${id}?_embed=messages`)
  return data as IForumMessages
}
