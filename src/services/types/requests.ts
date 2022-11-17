import { IUserBase } from './base'

export interface IUserRequest extends IUserBase {
  confirm_password: string
}

export interface IUserLoginRequest {
  email: string
  password: string
}
