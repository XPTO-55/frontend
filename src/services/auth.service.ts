import { api } from './api'
import { IUserLoginRequest, IUserLoginResponse } from './types'

export const authenticate = async (userData: IUserLoginRequest): Promise<IUserLoginResponse> => {
  const { data } = await api.post('/auth', userData)
  return data as IUserLoginResponse
}
