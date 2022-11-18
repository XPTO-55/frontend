import { api } from './api'
import { IUserRequest, IUserResponse } from './types'

export const getUsers = async (): Promise<IUserResponse[]> => {
  const { data } = await api.get('/users')
  return data as IUserResponse[]
}

export const createPatient = async (userData: IUserRequest): Promise<IUserResponse[]> => {
  try {
    const { data } = await api.post('/patients', userData)
    return data as IUserResponse[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw {
      code: error.code,
      message: error.response.data,
      responseStatus: error.response?.status
    }
  }
}

export const createProfessional = async (userData: IUserRequest): Promise<IUserResponse[]> => {
  try {
    const { data } = await api.post('/professionals', userData)
    return data as IUserResponse[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw {
      code: error.code,
      message: error.response.data,
      responseStatus: error.response?.status
    }
  }
}
