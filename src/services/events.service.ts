import { api } from './api'
import { IEvent, IEventUsers } from './types'

export const getEvents = async (): Promise<IEvent[]> => {
  try {
    const { data } = await api.get('/events')
    return data as IEvent[]
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

export const getParticipantsEvents = async (): Promise<IEventUsers[]> => {
  try {
    const { data } = await api.get('/events?_embed=users')
    return data as IEventUsers[]
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
