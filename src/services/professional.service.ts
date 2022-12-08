import { api } from './api'
import { ICreateProfessionalRatingRequest, ICreateProfessionalRequest, IProfessional, IUpdateProfessionalRequest, IUserResponse } from './types'

export const getProfessionals = async () => {
  const { data } = await api.get('/professionals')
  return data as IProfessional[]
}

export const getProfessional = async (id: number) => {
  const { data } = await api.get(`/professionals/${id}`)
  return data as IProfessional
}

export const updateProfessional = async (id: number, userData: IUpdateProfessionalRequest) => {
  const { data } = await api.put(`/professionals/${id}`, userData)
  return data as IProfessional
}

export const createProfessional = async (userData: ICreateProfessionalRequest): Promise<IUserResponse[]> => {
  const { data } = await api.post('/professionals', userData)
  return data as IUserResponse[]
}

export const getProfessionalProfileImage = async (id: number) => {
  const { data } = await api.get(`/professionals/${id}/profileImage`)
  return data as unknown
}

export const updateProfessionalProfileImage = async (id: number, data: FormData) => {
  await api.patch(`/professionals/${id}/profileImage`, data, {
    headers: {
      'Content-Type': 'image/jpeg'
    }
  })
}

export const createRatingProfessional = async (professionalId: number, data: ICreateProfessionalRatingRequest) => {
  await api.post(`/professional/${professionalId}/rating`, data)
}
