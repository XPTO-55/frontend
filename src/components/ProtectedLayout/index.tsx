import { useAuth } from '../../pages/auth/useAuth'
import React from 'react'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (!auth.email) {
    return <h1>Tou don't have acess</h1>
  }

  return children
}
