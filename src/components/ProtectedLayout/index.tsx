import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Loader } from '../../@shared/Loader'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!(user) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [user, loading])

  if (loading || router.isFallback) {
    return <Loader width={34} />
  }

  return children
}
