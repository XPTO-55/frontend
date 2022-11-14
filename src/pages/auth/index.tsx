import React, { useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { SlLock } from 'react-icons/sl'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import { ModalCadastro } from '../../components/Forms/ModalCadastro'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Auth() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }

  const onSubmit = async () => await new Promise((resolve, reject) => (setTimeout(resolve, 2000)))

  return (
    <S.PageContainer>
      {modal ? <ModalCadastro closeModal={openModal} /> : null}

      <S.Container>
        <S.ContainerLogin>
          <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
          </Link>
          <form onSubmit={() => handleSubmit(onSubmit)}>
            <Input placeholder="Email" {...register('email')} name="email">
              <MdOutlineAlternateEmail />
            </Input>
            <Input placeholder="Senha" {...register('password')} name="password">

              <SlLock />
            </Input>

            <span>Esqueceu a senha?</span>
            <ButtonPrimary type="submit" className="laranja">Entrar</ButtonPrimary>
          </form>

          <p>
            Não possui uma conta?
            <a href="#" onClick={openModal}>
              {' '}
              Cadastra-se
            </a>{' '}
          </p>
        </S.ContainerLogin>
      </S.Container>
    </S.PageContainer>
  )
}
