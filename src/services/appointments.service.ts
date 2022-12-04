import { api } from './api'
import { IAppointments } from './types/responses'

export const getAppointments = async () => {
  try {
    const { data } = await api.get('/appointments')
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
