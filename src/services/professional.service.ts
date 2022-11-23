import { api } from './api'
import { IProfessional } from './types'

export const getProfessionals = async () => {
  try {
    const { data } = await api.get('/professionals')
    return data as IProfessional[]
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

export const getProfessionalId = async ({ queryKey }) => {
  try {
    const [, id] = queryKey as [string, string]
    const { data } = await api.get(`/professionals/${id}`)
    return data as IProfessional
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

export const putProfessionalId = async () => {
  try {
    const { data } = await api.get('/professionals/5')
    return data as IProfessional
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
