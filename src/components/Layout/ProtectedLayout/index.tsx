import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../../context/auth'
import { LoaderAllPage } from '../LoaderAllPage'

export const ProtectedLayout = ({ children }: { children: React.ReactFragment | React.FC }) => {
  const router = useRouter()
  const { signed, loading } = useAuth()

  useEffect(() => {
    if (!(signed) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [signed, loading, router])

  if (loading) {
    return <LoaderAllPage />
  }

  return children
}
