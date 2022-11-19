import React, { useEffect } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/auth'
import { Header } from '../../components/Layout/Header'

export default function Upload (): JSX.Element {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!(user) && !loading) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/auth')
    }
  }, [user, loading])

  return (
    <>
      <Header />
      <S.PageContainer>

        <S.Container>
          <S.ContainerLogin>
            <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
            </Link>

            <p> Faça aqui os seus upload</p>
            <form action="">
              <div>
                <label htmlFor="arquivo"></label>
                <Input type={'file'} name={'arquivo'} id={'arquivo'}>

                 </Input>
              </div>
            </form>

            <Link href="/hotsite">
          <ButtonPrimary className="azul" >
              VOLTAR
            </ButtonPrimary>
          </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

    </>
  )
}
