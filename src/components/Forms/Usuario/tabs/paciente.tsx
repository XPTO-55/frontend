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
import { SubmitHandler, useForm } from 'react-hook-form'
import { registerPatientSchema } from '../../../../validations/user.validation'
import { ICreatePatientRequest } from '../../../../services/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPatient } from '../../../../services/patient.service'
import { useMutation } from 'react-query'
import { Loader } from '../../../../@shared/Loader'
import { Toast } from '../../../../@shared/Toast'
import { FormProps } from './types'

export function PacienteForm({ setOpen }: FormProps) {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(createPatient, {
    onSuccess: () => {
      setOpen(false)
    }
  })
  const { register, handleSubmit, formState: { errors } } = useForm<ICreatePatientRequest>({
    resolver: yupResolver(registerPatientSchema)
  })

  const onSubmit: SubmitHandler<ICreatePatientRequest> = (data) => {
    mutate(data)
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Fieldset>
          <Input type="text" placeholder="Nome Completo" {...register('name')}>
            <FiUser />
          </Input>
          <p>{errors?.name?.message}</p>
        </S.Fieldset>
        <S.Fieldset>
          <Input type="email" placeholder="Email" {...register('email')}>
            <TfiEmail />
          </Input>
          <p>{errors?.email?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="RG" {...register('rg')}>
            <TiDocument />
          </Input>
          <p>{errors?.rg?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="CPF" {...register('cpf')}>
            <CgFileDocument />
          </Input>
          <p>{errors?.cpf?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input type="date" placeholder="Data de nascimento" {...register('birthday')}>
            <BsCalendarDate />
          </Input>
          <p>{errors?.birthday?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="Telefone fixo" {...register('landline')}>
            <BsTelephonePlus />
          </Input>
          <p>{errors?.landline?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input placeholder="Telefone Celular" {...register('phone')}>
            <FiSmartphone />
          </Input>
          <p>{errors?.phone?.message}</p>
        </S.Fieldset>
        <S.Fieldset>
          <Input type="password" placeholder="Senha" {...register('password')}>
            <RiLockPasswordLine />
          </Input>
          <p>{errors?.password?.message}</p>
        </S.Fieldset >
        <S.Fieldset>
          <Input type="password" placeholder="Confirmar senha" {...register('confirm_password')}>
            <CgPassword />
          </Input>
          <p>{errors?.confirm_password?.message}</p>

        </S.Fieldset >
        <S.Footer className="bottom">
          <ButtonPrimary className="azul" tamanho="151px" disabled={isLoading}>
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
      {/* @ts-expect-error */}
      {isError ? <Toast type={'error'} title={'Error'} description={error?.message?.message || error?.message || 'Erro ao realizar o cadastro'} /> : null}
      {isSuccess ? <Toast type={'success'} title={'Success'} description={'Cadastro realizado com sucesso'} /> : null}
    </>
  )
}
