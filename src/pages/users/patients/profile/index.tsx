import React, { useState } from 'react'
import {
  TfiPencil,
  TfiEmail,
  TfiLocationPin,
  TfiLocationArrow
} from 'react-icons/tfi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineOtherHouses } from 'react-icons/md'
import { BiBuildingHouse, BiStreetView } from 'react-icons/bi'
import { SiOpenstreetmap } from 'react-icons/si'
import { FiSmartphone } from 'react-icons/fi'
import { BsGenderAmbiguous, BsTelephone, BsHouse } from 'react-icons/bs'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { UploadImage } from '../../../../components/EditProfile/UploadImage'
import { Input } from '../../../../@shared/Input'
import { Select } from '../../../../@shared/Select'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import * as S from './_styles'
import { useMutation, useQuery } from 'react-query'
import { IPatient, IUpdatePatientRequest } from '../../../../services/types'
import { getPatient, updatePatient } from '../../../../services/patient.service'
import { useAuth } from '../../../../context/auth'
import { LoaderAllPage } from '../../../../components/Layout/LoaderAllPage'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '../../../../@shared/Loader'
import { yupResolver } from '@hookform/resolvers/yup'
import { updatePatientSchema } from '../../../../validations/user.validation'
import Head from 'next/head'
import { Toast } from '../../../../@shared/Toast'

export default function Profile() {
  const [edit, setEdit] = useState<boolean>(false)
  const { user } = useAuth()

  const { data: patient, isLoading } = useQuery<IPatient>(['patient'], async () => await getPatient(user?.id))

  const { mutate, reset, isLoading: updateLoading, isSuccess } = useMutation<IPatient, unknown, IUpdatePatientRequest>(['patient'], async (userData) => await updatePatient(user?.id, userData), {
    onError() {
      reset()
    },
    onSuccess() {
      setEdit(false)
    }
  })

  const { register, handleSubmit } = useForm<IPatient>({
    defaultValues: patient,
    resolver: yupResolver(updatePatientSchema)
  })

  const onSubmit: SubmitHandler<IUpdatePatientRequest> = (data, event) => {
    event.preventDefault()
    mutate(data)
  }

  const buttons = () => {
    return (
      <>
        <ButtonPrimary disabled={updateLoading} className="azul">
          {updateLoading ? <Loader width={16} /> : null}
          Salvar
        </ButtonPrimary>
        <ButtonPrimary className="laranja" onClick={cancelEditing}>
          Cancelar
        </ButtonPrimary>
      </>
    )
  }

  const editing = (e) => {
    e.preventDefault()
    setEdit(prev => !prev)
  }

  const cancelEditing = (e) => {
    e.preventDefault()
    setEdit(prev => !prev)
    reset()
  }

  if (isLoading) {
    return <LoaderAllPage />
  }

  return (
    <>
      <Head>
        <title> Perfil | CPA </title>
      </Head>
      <ProfileBar />

      <S.PageContainer>
        <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <S.ContentArea>
            <S.LeftArea>
              <UploadImage profileUrl={patient?.profileUrl} edit={!edit} />
            </S.LeftArea>
            <S.RightArea>
              <Input
                {...register('name')}
                value={patient?.name}
                disabled={!edit}
              >
                <TfiPencil />
              </Input>

              <textarea
                placeholder="Sobre mim..."
                {...register('about')}
                value={patient?.about}
                disabled={!edit}
              />
            </S.RightArea>
          </S.ContentArea>
          <S.ContentArea>
            <S.LeftArea className="baixo">
              {edit
                ? (
                  buttons()
                )
                : (
                  <ButtonPrimary className="laranja" onClick={editing}>
                  Editar
                  </ButtonPrimary>
                )}
            </S.LeftArea>

            <S.RightArea className="baixo">
              <S.ContainerInput>
                <Input
                  {...register('email')}
                  value={patient?.email}
                  placeholder="email@email.com"
                  disabled={!edit}
                >
                  <TfiEmail />
                </Input>
                <Select
                  icon={<BsGenderAmbiguous />}
                  disabled={!edit}
                ></Select>

                <Input
                  {...register('cpf')}
                  placeholder="000.000.000-00"
                  value={patient?.cpf}
                  disabled={!edit}
                >
                  <HiOutlineDocumentText />
                </Input>
                <Input
                  {...register('birthday')}
                  value={patient?.birthday}
                  type="date"
                  disabled={!edit}
                >
                  <TfiPencil />
                </Input>

                <Input
                  {...register('phone')}
                  placeholder="(00)00000-0000"
                  value={patient?.phone}
                  disabled={!edit}
                >
                  <FiSmartphone />
                </Input>
                <Input
                  {...register('landline')}
                  placeholder="(00)0000-0000"
                  value={patient?.landline}
                  disabled={!edit}
                >
                  <BsTelephone />
                </Input>

                <Input
                  {...register('address.zipcode')}
                  placeholder="CEP"
                  value={patient?.address?.zipcode}
                  disabled={!edit}
                >
                  <TfiLocationPin />
                </Input>

                <Input
                  {...register('address.street')}
                  value={patient?.address?.street}
                  placeholder="Rua"
                  disabled={!edit}
                >
                  <BiStreetView />
                </Input>

                <Input
                  {...register('address.district')}
                  value={patient?.address?.district}
                  placeholder="Bairro"
                  disabled={!edit}
                >
                  <SiOpenstreetmap />
                </Input>
                <Input
                  {...register('address.number')}
                  value={patient?.address?.number}
                  placeholder="Número"
                  disabled={!edit}
                >
                  <BsHouse />
                </Input>

                <Input
                  {...register('address.complement')}
                  value={patient?.address?.complement}
                  placeholder="Complemento"
                  disabled={!edit}
                >
                  <MdOutlineOtherHouses />
                </Input>
                <Input
                  {...register('address.city')}
                  value={patient?.address?.city}
                  placeholder="Cidade"
                  disabled={!edit}
                >
                  <BiBuildingHouse />
                </Input>

                <Input
                  {...register('address.uf')}
                  value={patient?.address?.uf}
                  placeholder="UF"
                  disabled={!edit}
                >
                  <TfiLocationArrow />
                </Input>
              </S.ContainerInput>
            </S.RightArea>
          </S.ContentArea>
        </S.ContainerForm>
      </S.PageContainer>
      {isSuccess ? <Toast type='success' title='Dados atualizados com sucesso' /> : null}
    </>
  )
}
