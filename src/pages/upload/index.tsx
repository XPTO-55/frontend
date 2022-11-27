import React, { useEffect, useState } from 'react'
import { Input } from '../../@shared/Input'
import * as S from './_styles'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Header } from '../../components/Layout/Header'
import Head from 'next/head'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { useMutation } from 'react-query'
import { upload } from '../../services/hotsite.service'
import { Loader } from '../../@shared/Loader'
import { Toast } from '../../@shared/Toast'

export default function Upload (): JSX.Element {
  const { signed, loading } = useAuth()
  const [file, setFile] = useState<File>(null)
  const router = useRouter()
  useEffect(() => {
    if (!(signed) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [signed, loading, router])

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  const { mutate, isLoading, isSuccess, isError, error, reset } = useMutation<void, unknown, FormData>(async (data) => await upload(data), {
    onSuccess: () => {
      reset()
    },
    onError: () => {
      reset()
    }
  })

  if (loading || router.isFallback) {
    return <LoaderAllPage />
  }

  const handleSubmit = () => {
    const blob = new Blob([file], { type: 'text/plain' })
    const data = new FormData()
    data.append('arquivo', blob)
    mutate(data)
  }

  return (
    <>
      <Header />
      <Head>
        <title> Upload | CPA </title>
      </Head>
      <S.PageContainer>

        <S.Container>
          <S.ContainerLogin>
            <Link href="/">
              <S.Img src="/assets/img/logoCPA.png" alt="" />
            </Link>

            <p> Faça aqui os seu upload</p>
            {/* <form action=""> */}
            <S.InputContainer>
              <label htmlFor="arquivo">
                {file?.name || 'Escolha o arquivo'}
              </label>
              <Input type={'file'} multiple={false} onChange={(e) => setFile(e.currentTarget.files[0])} name={'arquivo'} id={'arquivo'} accept="text/plain">

              </Input>
            </S.InputContainer>

            {/* </form> */}
            <ButtonPrimary className="laranja" onClick={handleSubmit}>
              {isLoading ? <Loader width={16} /> : null}
              Enviar
            </ButtonPrimary>
            <Link href="/hotsite">
              <ButtonPrimary className="azul" >
              VOLTAR
              </ButtonPrimary>
            </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>
      {isSuccess ? <Toast type='success' title='Arquivo carregado com sucessso' /> : null}
      {/* @ts-expect-error */}
      {isError ? <Toast type='error' title='Problema ao carrregar arquivo' description={error?.message?.message || error?.message} /> : null}
    </>
  )
}
