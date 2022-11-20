import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Loader } from '../../@shared/Loader'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { signed, loading } = useAuth()

  useEffect(() => {
    if (!(signed) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [signed, loading])

  if (loading) {
    return <Loader width={34} />
  }

  return children
}
