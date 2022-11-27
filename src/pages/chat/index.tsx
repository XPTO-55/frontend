import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Events from '../../components/Chat/Events'
import Forums from '../../components/Chat/Forums'
import Messages from '../../components/Chat/Messages'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { useAuth } from '../../context/auth'
import { IForum } from '../../services/types'
import * as S from './_styles'

export default function Chat () {
  const [selectedForum, setSelectedForum] = useState<IForum>()
  const { signed, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!(signed) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [signed, loading, router])

  if (loading || router.isFallback) {
    return <LoaderAllPage />
  }

  return (
    <>
      <Head>
        <title> Chat | CPA </title>
      </Head>
      <ProfileBar />
      <S.Container>
        <Forums setSelectForum={setSelectedForum} />
        <Messages forum={selectedForum} />
        <Events />
      </S.Container>
    </>
  )
}
