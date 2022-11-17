import { api } from './api'
import { IUserRequest, IUserResponse } from './types'

export const getUsers = async (): Promise<IUserResponse[]> => {
  const { data } = await api.get('/users')
  return data as IUserResponse[]
}

export const createPatient = async (userData: IUserRequest): Promise<IUserResponse[]> => {
  const { data } = await api.post('/patients', userData)
  return data as IUserResponse[]
}

export const createProfessional = async (userData: IUserRequest): Promise<IUserResponse[]> => {
  const { data } = await api.post('/professionals', userData)
  return data as IUserResponse[]
}
