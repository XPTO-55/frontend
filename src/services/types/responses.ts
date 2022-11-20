import { IUserBase } from './base'

export interface IUserLoginResponse {
  id: string
  jwtToken: string
  type: string
  refreshToken: string
  username: string
  email: string
}

export interface IUserResponse extends IUserBase {
  id: string
}

export interface IForum {
  id: string
  name: string
  imageUrl: string
  members: number
}

export interface IForumMessages {
  id: number
  eventId: number
  name: string
  members: number
  imageUrl: string
  messages: IMessage[]
}

export interface IEvent {
  id: string
  name: string
  startDate: string
  endDate: string
  status: 'confirmed' | 'pending' | 'canceled'
}

export enum IStatus {
  confirmed = '#80be80',
  pending = '#FF7900',
  canceled = '#C8372D',
}

export interface IEventUsers {
  id: string
  name: string
  startDate: string
  endDate: string
  status: IStatus
  users: IUserResponse[]
}

export interface IMessage {
  id: number
  text: string
  senderName: string
  userId: number
  forumId?: number
  replyes: IMessage[]
}

export interface IProfessional {
  id: string
  name: string
  telefoneCelular: string
  role: string
  identificacao: string
}
