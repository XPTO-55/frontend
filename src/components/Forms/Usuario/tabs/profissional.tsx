import React from 'react'
import { Input } from '../../../../@shared/Input'
import { FiUser, FiSmartphone } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { BsCalendarDate, BsTelephonePlus } from 'react-icons/bs'
import { TiDocument } from 'react-icons/ti'
import { CgFileDocument, CgPassword } from 'react-icons/cg'
import * as S from '../styles'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import * as Dialog from '@radix-ui/react-dialog'
import { registerSchema } from '../../../../validations/user.validation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserRequest } from '../../../../services/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { createProfessional } from '../../../../services/users.service'
import { Form } from './types'
import { Loader } from '../../../../@shared/Loader'
import { Toast } from '../../../../@shared/Toast'

export function ProfissionalForm({ setOpen }: Form) {
  const { mutate, isLoading, isError, error } = useMutation(createProfessional)
  const { register, handleSubmit, formState: { errors } } = useForm<IUserRequest>({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<IUserRequest> = (data, event) => {
    event.preventDefault()
    mutate(data)
    setOpen(false)
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Fieldset>
          <Input type="text" placeholder="Nome Completo" width="cadastro" {...register('name')}>
            <FiUser />
          </Input>
          <p>{errors?.name?.message}</p>
        </S.Fieldset>
        <S.Fieldset>
          <Input type="email" placeholder="Email" width="cadastro" {...register('email')}>
            <TfiEmail />
          </Input>
          <p>{errors?.email?.message}</p>

        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="RG" width="cadastro" {...register('rg')}>
            <TiDocument />
          </Input>
          <p>{errors?.rg?.message}</p>

        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="CPF" width="cadastro" {...register('cpf')}>
            <CgFileDocument />
          </Input>
          <p>{errors?.cpf?.message}</p>

        </S.Fieldset >
        <S.Fieldset>
          <Input type="date" placeholder="Data de nascimento" width="cadastro" {...register('birthday')}>
            <BsCalendarDate />
          </Input>
          <p>{errors?.birthday?.message}</p>

        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="Telefone fixo" width="cadastro" {...register('landline')}>
            <BsTelephonePlus />
          </Input>
          <p>{errors?.landline?.message}</p>

        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="Telefone Celular" width="cadastro" {...register('phone')}>
            <FiSmartphone />
          </Input>
          <p>{errors?.phone?.message}</p>

        </S.Fieldset>
        <S.Fieldset>
          <Input type="password" placeholder="Senha" width="cadastro" {...register('password')}>
            <RiLockPasswordLine />
          </Input>
          <p>{errors?.password?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input type="password" placeholder="Confirmar senha" width="cadastro" {...register('confirm_password')}>
            <CgPassword />
          </Input>
          <p>{errors?.confirm_password?.message}</p>

        </S.Fieldset >
        <S.Footer className="bottom">
          <ButtonPrimary className="azul" tamanho="151px">
            {isLoading ? <Loader width={16} /> : null}
          Cadastrar
          </ButtonPrimary>

          <Dialog.Close asChild aria-label="Close" type='button'>
            <ButtonPrimary
              className="laranja"
              tamanho="151px"
            >
            Cancelar
            </ButtonPrimary>
          </Dialog.Close>
        </S.Footer>
      </S.Form>
      {isError ? <Toast type={'error'} title={'Error'} description={error?.message?.message || error?.message || 'Erro ao realizar o cadastro'} /> : null}

    </>
  )
}
