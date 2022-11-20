import React, { useEffect } from 'react'
import * as S from './styles'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { Header } from '../../components/Layout/Header'
import { Loader } from '../../@shared/Loader'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import Head from 'next/head'

export default function HotSite (): JSX.Element {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!(user) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [user, loading, router])

  if (loading) {
    return <Loader width={34} />
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
              <ButtonPrimary className="azul" >

              UPLOADS
            </ButtonPrimary>
          </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

    </>
  )
}
