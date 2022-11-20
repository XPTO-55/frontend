import { api } from './api'

export interface IProfessional {
  id: string
  name: string
  telefoneCelular: string
  role: string
  identificacao: string
}

export const getProfessionals = async () => {
  const { data } = await api.get('/professionals')
  return data as IProfessional[]
}
