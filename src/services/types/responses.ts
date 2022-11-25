import { IAddress, IUserBase } from './base'

export interface IUserLoginResponse {
  id: string
  jwtToken: string
  type: string
  refreshToken: string
  username: string
  profileUrl: string
  userType: 'patient' | 'professional'
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
  id: number
  name: string
  email: string
  cpf: string
  rg: string
  about: string
  profileUrl: string
  birthday: string
  landline: string
  phone: string
  roles: IRole[]
  ratings: [{
    rating: number
    comment: string
    profissional: string
  }]
  identificacao: string
  verificacao: string
  especialidade: string
  graduacao: string
  address?: IAddressGetResponse

}

export interface IPatient {
  id: number
  name: string
  email: string
  cpf: string
  rg: string
  about: string
  profileUrl: string
  birthday: string
  landline: string
  phone: string
  roles: IRole[]
  address?: IAddressGetResponse
}

interface IRole {
  name: string
}

export interface IAddressGetResponse extends IAddress {
  id: string
}
