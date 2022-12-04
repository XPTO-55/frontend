import { api } from './api'
import { ICommentsResponse, ICreateCommentRequest } from './types'

export const getComments = async (postId: string): Promise<ICommentsResponse[]> => {
  const { data } = await api.get(`/feed/${postId}/comments`)
  return data as ICommentsResponse[]
}

export const createComment = async (postId: string, commentData: ICreateCommentRequest): Promise<ICommentsResponse> => {
  const { data } = await api.post(`/feed/${postId}/comments`, commentData)
  return data as ICommentsResponse
}
