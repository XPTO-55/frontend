import { IAddress, IUserBase } from './base'

export interface IUserLoginResponse {
  id: number
  jwtToken: string
  type: string
  refreshToken: string
  username: string
  profileUrl: string
  userType: 'patients' | 'professionals'
  email: string
}

export interface IUserResponse extends IUserBase {
  id: number
}

export interface IForum {
  id: string
  name: string
  imageUrl: string
  members: number
}

export interface IForumMessages {
  id: number
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

enum Status {
  confirmed = '#80be80',
  pending = '#FF7900',
  canceled = '#C8372D',
}

export const IStatus = Status

export interface IEventUsers {
  id: string
  name: string
  startDate: string
  endDate: string
  status: keyof typeof IStatus
  users: IUserResponse[]
}

export interface IMessage {
  id: number
  message: string
  senderName: string
  senderId: number
  forum: IForum
  replyes: IMessage[]
  createdAt: Date
  updatedAt: Date
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

export interface ICommentsResponse {
  id: number
  comment: string
  postId: string
  patient: {
    id: number
    name: string
    profileUrl: string
  }
}

export interface IAppointments {
  date: string
  professional: string
  professionalId: number
  patient: string
  especiality: string
}
