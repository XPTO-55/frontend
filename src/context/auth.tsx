import React, { createContext, useState, useEffect, useContext } from 'react'
import * as Auth from '../services/auth.service'
import { api } from '../services/api'

interface User {
  username: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

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

  async function signIn() {
    const response = await Auth.authenticate()
    setUser(response)

    api.defaults.headers.common.Authorization = `Bearer ${response.jwtToken}`

    localStorage.setItem('user', JSON.stringify(response))
    localStorage.setItem('token', response.jwtToken)
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
