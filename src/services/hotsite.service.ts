import { api } from './api'

export const upload = async (txtData: FormData): Promise<void> => {
  return await api.post('/hotsite/upload', txtData)
}

export const downloadCsv = async () => {
  return await api.get<Blob>('/hotsite/relatorio/csv')
}

export const downloadTxt = async () => {
  return await api.get<Blob>('/hotsite/relatorio/txt')
}
