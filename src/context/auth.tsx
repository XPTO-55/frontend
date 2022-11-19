import React, { createContext, useState, useEffect, useContext } from 'react'
import * as Auth from '../services/auth.service'
import { api } from '../services/api'
import { IUserLoginRequest } from '../services/types'
import { useMutation, useQuery } from 'react-query'

interface User {
  username: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  loading: boolean
  signIn: (userData: IUserLoginRequest) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { mutate } = useMutation(Auth.authenticate, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess(data) {
      setUser(data)
      api.defaults.headers.common.Authorization = `Bearer ${data.jwtToken}`
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('token', data.jwtToken)
      localStorage.setItem('refreshToken', data.refreshToken)
    },
    onSettled() {
      setLoading(false)
    }
  })

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
    }
    loadStoragedData()
  }, [])

  async function signIn(userData: IUserLoginRequest) {
    mutate(userData)
  }

  function signOut() {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
};
