import { Input } from '../../@shared/Input'
import * as S from './styles'
import { TfiLock, TfiUnlock } from 'react-icons/tfi'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Head from 'next/head'
import { useState } from 'react'
import { GiConfirmed } from 'react-icons/gi'
import Link from 'next/link'

export default function RedefinePassword() {
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleForm = () => {
    setIsValid(true)
  }

  const Form = () => {
    return (
      <>
        <form>
          <Input type="password" placeholder="Digite uma nova senha...">
            <TfiUnlock />
          </Input>
          <Input type="password" placeholder="Confirme a nova senha...">
            <TfiLock />
          </Input>
        </form>

        <ButtonPrimary className="laranja" onClick={handleForm}>
          Salvar
        </ButtonPrimary>
      </>
    )
  }

  const FormSucess = () => {
    return (
      <>
        <h3>
          <h4>
            <GiConfirmed />
          </h4>{' '}
          <h5>Senha redefinida com sucesso!</h5>
        </h3>

        <Link href="auth">
          <ButtonPrimary className="azul">Login</ButtonPrimary>

        </Link>

      </>
    )
  }

  return (
    <S.PageContainer>
      <Head>
        <title> Redefinir senha | CPA</title>
      </Head>
      <S.Container>
        <S.BoxContent>
          <p>
            <Link href={'/'}>
              <img src="/assets/img/logoCPA.png" alt="" />
            </Link>
            <h1>Redefinição de senha</h1>
          </p>

          {isValid ? FormSucess() : Form()}

        </S.BoxContent>
      </S.Container>
    </S.PageContainer>
  )
}
