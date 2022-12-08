import { api } from './api'

export const getSearch = async (): Promise<string> => {
  const { data } = await api.get('/blog')
  return data as string
}

export const createSearch = async (search: string): Promise<string> => {
  const { data } = await api.post('blog', search)
  return data as string
}
