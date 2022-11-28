import React, { createContext, useState, useEffect, useContext } from 'react'
import * as Auth from '../services/auth.service'
import { api } from '../services/api'
import { IUserLoginRequest, IUserLoginResponse } from '../services/types'
import { useRouter } from 'next/router'
import { LoaderAllPage } from '../components/Layout/LoaderAllPage'

interface AuthContextData {
  signed: boolean
  user: IUserLoginResponse | null
  loading: boolean
  signIn: (userData: IUserLoginRequest) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserLoginResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem('user')
      const storagedToken = localStorage.getItem('token')

      // validar token depois

      if (storagedUser && storagedToken) {
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`
        setUser(JSON.parse(storagedUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStoragedData()
  }, [])

  async function signIn(userData: IUserLoginRequest) {
    const response = await Auth.authenticate(userData)
    setUser(response)

    api.defaults.headers.common.Authorization = `Bearer ${response.jwtToken}`

    localStorage.setItem('user', JSON.stringify(response))
    localStorage.setItem('token', response.jwtToken)
  }

  async function signOut() {
    localStorage.clear()
    setUser(null)
    setLoading(true)
    await router.push('/')
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {loading ? <LoaderAllPage /> : children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
};
