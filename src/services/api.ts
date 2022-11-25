import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.15.51:7000'
})

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   config.headers.Authorization = `Bearer ${token}`
//   return config
// })
