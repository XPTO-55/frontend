import { api } from './api'
import { IUserLoginRequest, IUserLoginResponse } from './types'

export const authenticate = async (userData: IUserLoginRequest): Promise<IUserLoginResponse> => {
  try {
    const { data } = await api.post('/auth/login', userData)
    return data as IUserLoginResponse
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
