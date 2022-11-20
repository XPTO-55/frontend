import { api } from './api'
import { IForum, IForumMessages } from './types'

export const getForums = async (): Promise<IForum[]> => {
  try {
    const { data } = await api.get('/forums')
    return data as IForum[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw {
      code: error.code,
      message: error.response.data,
      responseStatus: error.response?.status
    }
  }
}

export const getForumMessages = async ({ queryKey }): Promise<IForumMessages> => {
  try {
    const [, id] = queryKey as [string, string]
    const { data } = await api.get(`/forums/${id}?_embed=messages`)
    return data as IForumMessages
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw {
      code: error.code,
      message: error.response.data,
      responseStatus: error.response?.status
    }
  }
}
