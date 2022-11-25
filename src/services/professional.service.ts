import { api } from './api'
import { ICreateProfessionalRequest, IProfessional, IUpdateProfessionalRequest, IUserResponse } from './types'

export const getProfessionals = async () => {
  const { data } = await api.get('/professionals')
  return data as IProfessional[]
}

export const getProfessional = async (id: string) => {
  console.log('id', id)
  const { data } = await api.get(`/professionals/${id}`)
  return data as IProfessional
}

export const updateProfessional = async (id: string, userData: IUpdateProfessionalRequest) => {
  const { data } = await api.put(`/professionals/${id}`, userData)
  return data as IProfessional
}

export const createProfessional = async (userData: ICreateProfessionalRequest): Promise<IUserResponse[]> => {
  const { data } = await api.post('/professionals', userData)
  return data as IUserResponse[]
}

export const getProfessionalProfileImage = async (id: string) => {
  const { data } = await api.get(`/professionals/${id}/profileImage`)
  return data as unknown
}
