import { api } from './api'
import { ICreateAppoinmentRequest } from './types'
import { IAppointments } from './types/responses'

export const getAppointments = async (userId: number) => {
  try {
    const { data } = await api.get(`/appointments/${userId}`)
    return data as IAppointments[]
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

export const createAppointment = async (data: ICreateAppoinmentRequest): Promise<void> => {
  try {
    await api.post('/appointments/', data)
    return
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
