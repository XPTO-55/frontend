import React, { useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { SlLock } from 'react-icons/sl'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import { UsuarioForm } from '../../components/Forms/Usuario'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authenticationSchema } from '../../validations/user.validation'
import { IUserLoginRequest } from '../../services/types'
import * as Dialog from '@radix-ui/react-dialog'

export default function Auth() {
  const { register, handleSubmit, formState: { errors } } = useForm<IUserLoginRequest>({
    resolver: yupResolver(authenticationSchema)
  })

  const onSubmit: SubmitHandler<IUserLoginRequest> = (data, event) => {
    event.preventDefault()
    console.log(data)
    return false
  }

  const onError = (errors) => {
    console.log(errors)
  }

  return (
    <S.PageContainer>
      {/* {modal ? <ModalCadastro closeModal={openModal} /> : null} */}

      <S.Container>
        <S.ContainerLogin>
          <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
          </Link>
          <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
            <S.InputContainer>
              <Input placeholder="Email" {...register('email')} >
                <MdOutlineAlternateEmail />
              </Input>
              <p>{errors?.email?.message}</p>
            </S.InputContainer>
            <S.InputContainer>
              <Input placeholder="Senha" {...register('password')} >
                <SlLock />
              </Input>
              <p>{errors?.password?.message}</p>
            </S.InputContainer>
            <span>Esqueceu a senha?</span>
            <ButtonPrimary type="submit" className="laranja">Entrar</ButtonPrimary>
          </S.Form>

          <p>
            Não possui uma conta?
            <Dialog.Root>
              <Dialog.Trigger>
                Cadastra-se
                <UsuarioForm />
              </Dialog.Trigger>
            </Dialog.Root >
          </p>
        </S.ContainerLogin>
      </S.Container>
    </S.PageContainer>
  )
}
