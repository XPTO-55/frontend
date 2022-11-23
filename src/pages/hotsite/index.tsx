import React, { useEffect } from 'react'
import * as S from './styles'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { Header } from '../../components/Layout/Header'
import Head from 'next/head'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'

export default function HotSite(): JSX.Element {
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
      <Header />
      <Head>
        <title> Hotsite | CPA </title>
      </Head>
      <S.PageContainer>
        <S.Container>
          <S.ContainerLogin>
            <Link href="/">
              <S.Img src="/assets/img/logoCPA.png" alt="" />
            </Link>
            <p>
              Faça aqui mesmo seus downloads e uploads sempre que precisar.
            </p>
            <ButtonPrimary className="azul" >
              DOWNLOAD CSV
            </ButtonPrimary>

            <ButtonPrimary className="azul" >
              DOWNLOAD TXT
            </ButtonPrimary>

            <Link href="/upload">
              <ButtonPrimary className="verde" >

              UPLOADS
              </ButtonPrimary>
            </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

    </>
  )
}
