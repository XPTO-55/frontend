import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Loader } from '../../@shared/Loader'

function Feed() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!(user)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [user])

  if (loading) {
    return <Loader />
  }
  return (
    <div>Feed</div>
  )
}

export default Feed
