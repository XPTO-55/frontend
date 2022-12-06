import { api } from './api'
import { ICreateMessageRequest, IMessage } from './types'

export const getMessages = async (forumId: string): Promise<IMessage[]> => {
  const { data } = await api.get(`/forums/${forumId}/messages`)
  return data as IMessage[]
}

export const createMessage = async (forumId: string, messageData: ICreateMessageRequest): Promise<IMessage> => {
  const { data } = await api.post(`/forums/${forumId}/messages`, messageData)
  return data as IMessage
}
