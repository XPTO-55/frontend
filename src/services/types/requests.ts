import { IUserBase } from './base'

export interface ICreatePatientRequest extends IUserBase {
  confirm_password: string
}

export interface ICreateProfessionalRequest extends IUserBase {
  confirm_password: string
  especialidade: string
  graduacao: string
}

export interface IUserLoginRequest {
  email: string
  password: string
}
