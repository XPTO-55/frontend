import { IUserBase } from './base'

export interface IUserLoginResponse {
  id: string
  jwtToken: string
  type: string
  refreshToken: string
  username: string
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
