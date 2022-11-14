import { api } from './api'
import { IUser } from './users.service'

export enum IStatus {
  confirmed = '#80be80',
  pending = '#FF7900',
  canceled = '#C8372D',
}

export interface IEvent {
  id: string
  name: string
  startDate: string
  endDate: string
  status: 'confirmed' | 'pending' | 'canceled'
}

export interface IEventUsers {
  id: string
  name: string
  startDate: string
  endDate: string
  status: IStatus
  users: IUser[]
}

export const getEvents = async (): Promise<IEvent[]> => {
  const { data } = await api('/events')
  return data as IEvent[]
}

export const getParticipantsEvents = async (): Promise<IEventUsers[]> => {
  const { data } = await api('/events?_embed=users')
  return data as IEventUsers[]
}
