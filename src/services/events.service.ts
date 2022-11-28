import { api } from './api'
import { IEvent, IEventUsers } from './types'

export const getEvents = async (): Promise<IEvent[]> => {
  const { data } = await api.get('/events')
  return data as IEvent[]
}

export const getParticipantsEvents = async (): Promise<IEventUsers[]> => {
  const { data } = await api.get('/events?_embed=users')
  return data as IEventUsers[]
}
