import { IUserBase } from './base'

export interface IUpdatePatientRequest extends IUserBase {
  // password: string
  // confirm_password: string
}

export interface ICreatePatientRequest extends IUserBase {
  password: string
  confirm_password: string
}

export interface ICreateProfessionalRequest extends IUserBase {
  password: string
  confirm_password: string
  especialidade: string
  graduacao: string
}

export interface IUpdateProfessionalRequest extends IUserBase {
  especialidade: string
  graduacao: string
}

export interface IUserLoginRequest {
  email: string
  password: string
}

export interface ICreateMessageRequest {
  message: string
  senderName: string
  userId: number
}
