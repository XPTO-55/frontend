import { api } from './api'
import { ICreatePatientRequest, IPatient, IUpdatePatientRequest, IUserResponse } from './types'

export const createPatient = async (userData: ICreatePatientRequest): Promise<IUserResponse[]> => {
  const { data } = await api.post('/patients', userData)
  return data as IUserResponse[]
}

export const getPatient = async (id: string) => {
  const { data } = await api.get(`/patients/${id}`)
  return data as IPatient
}

export const updatePatient = async (id: string, userData: IUpdatePatientRequest) => {
  const { data } = await api.put(`/patients/${id}`, userData)
  return data as IPatient
}

export const getPatientProfileImage = async (id: string) => {
  const { data } = await api.get(`/patients/${id}/profileImage`)
  return data as unknown
}
