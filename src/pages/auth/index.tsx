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
import { useAuth } from '../../context/auth'
import { useMutation } from 'react-query'
import { Loader } from '../../@shared/Loader'
import { Toast } from '../../@shared/Toast'
import { useRouter } from 'next/router'

export default function Auth() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { signIn } = useAuth()
  const { mutate, isLoading, isError, error } = useMutation(signIn, {
    onSuccess: async () => {
      await router.push('/feed')
    }
  })

  const { register, handleSubmit, formState: { errors } } = useForm<IUserLoginRequest>({
    resolver: yupResolver(authenticationSchema)
  })

  const onSubmit: SubmitHandler<IUserLoginRequest> = (data, event) => {
    event.preventDefault()
    mutate(data)
    return false
  }
  return (
    <S.PageContainer>
      <S.Container>
        <S.ContainerLogin>
          <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
          </Link>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.InputContainer>
              <Input placeholder="Email" {...register('email')} >
                <MdOutlineAlternateEmail />
              </Input>
              <p>{errors?.email?.message}</p>
            </S.InputContainer>
            <S.InputContainer>
              <Input placeholder="Senha" type="password" {...register('password')} >
                <SlLock />
              </Input>
              <p>{errors?.password?.message}</p>
            </S.InputContainer>
            <span aria-disabled={isError}>
              {isError ? (error?.message?.message || error?.message) : null}
              <u>
                Esqueceu a senha?
              </u>
            </span>
            <ButtonPrimary type="submit" className="laranja">
              {isLoading ? <Loader width={16} /> : null}
              Entrar
            </ButtonPrimary>
          </S.Form>
          <p>
            Não possui uma conta?
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <S.ModalTrigger>
                <u>
                  Cadastra-se
                </u>
                <UsuarioForm setOpen={setOpen} />
              </S.ModalTrigger>
            </Dialog.Root >
          </p>
        </S.ContainerLogin>
      </S.Container>
      {/* {isError ? <Toast type={'error'} title={'Error'} description={error?.message?.message || error?.message || 'Erro ao realizar o login'} /> : null} */}
    </S.PageContainer>
  )
}
