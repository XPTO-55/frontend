import React, { useEffect } from 'react'
import * as S from './styles'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { Header } from '../../components/Layout/Header'
import Head from 'next/head'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { useQuery } from 'react-query'
import { downloadCsv, downloadTxt } from '../../services/hotsite.service'

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

  async function downloadTxtFile() {
    try {
      const { data } = await downloadTxt()
      const blob = new Blob([data], { type: 'text/plain' })
      const a = document.createElement('a')
      a.setAttribute('download', 'pacients.txt')
      a.setAttribute('href', window.URL.createObjectURL(blob))
      a.click()
    } catch (e) {
      console.error(e)
    }
  }

  async function downloadCsvFile() {
    try {
      const { data } = await downloadCsv()
      const encodedURI = encodeURI('data:text/csv;charset=utf-8,' + data.toString())
      window.open(encodedURI)
      // const link = document.createElement('a')
      // link.download = 'download'
      // link.href = href
      // document.body.appendChild(link)
      // link.click()
      // document.body.removeChild(link)
      // URL.revokeObjectURL(href)
    } catch (e) {
      console.error(e)
    }
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
            <ButtonPrimary className="azul" onClick={downloadCsvFile}>
              DOWNLOAD CSV
            </ButtonPrimary>

            <ButtonPrimary className="azul" onClick={downloadTxtFile}>
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
