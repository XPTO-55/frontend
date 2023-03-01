import React, { useState } from 'react'
import {
  TfiPencil,
  TfiEmail,
  TfiLocationPin,
  TfiLocationArrow
} from 'react-icons/tfi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineOtherHouses } from 'react-icons/md'
import { FaRegAddressCard, FaRegAddressBook, FaGraduationCap } from 'react-icons/fa'
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
import { IProfessional, IUpdateProfessionalRequest } from '../../../../services/types'
import { getProfessional, updateProfessional } from '../../../../services/professional.service'
import Head from 'next/head'
import { useAuth } from '../../../../context/auth'
import { LoaderAllPage } from '../../../../components/Layout/LoaderAllPage'
import { updateProfessionalSchema } from '../../../../validations/user.validation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Toast } from '../../../../@shared/Toast'
import { Loader } from '../../../../@shared/Loader'
import { AxiosError } from 'axios'

export default function Profile() {
  const [edit, setEdit] = useState<boolean>(false)
  const { user } = useAuth()

  const editing = () => {
    setEdit(!edit)
  }

  const { data: professional, isLoading } = useQuery<unknown, AxiosError, IProfessional>(['professional'], async () => {
    if (!user) return
    return await getProfessional(user?.id)
  })

  const { mutate, reset, isLoading: updateLoading, isSuccess } = useMutation<IProfessional, unknown, IUpdateProfessionalRequest>(['patient'], async (userData) => {
    if (!user) throw new Error('user id not found')
    return await updateProfessional(user?.id, userData)
  }, {
    onError() {
      reset()
    },
    onSuccess() {
      setEdit(false)
    }
  })

  const { register, handleSubmit } = useForm<IProfessional>({
    defaultValues: professional,
    resolver: yupResolver(updateProfessionalSchema)
  })

  const onSubmit: SubmitHandler<IUpdateProfessionalRequest> = (data) => {
    mutate(data)
  }

  if (isLoading) {
    return <LoaderAllPage />
  }

  const buttons = () => {
    return (
      <>
        <ButtonPrimary className="azul">
          {updateLoading ? <Loader width={16} /> : null}
          Salvar
        </ButtonPrimary>
        <ButtonPrimary className="laranja" onClick={editing}>
          Cancelar
        </ButtonPrimary>
      </>
    )
  }

  return (
    <>
      <ProfileBar />
      <Head>
        <title> Profile | CPA </title>
      </Head>

      <S.PageContainer>
        <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <S.ContentArea>
            <S.LeftArea>
              <UploadImage profileUrl={professional?.profileUrl ?? ''} edit={!edit} />
            </S.LeftArea>
            <S.RightArea>
              <Input
                value={professional?.name}
                {...register('name')}
                disabled={!edit}
              >
                <TfiPencil />
              </Input>

              <textarea
                placeholder="Sobre mim..."
                {...register('about')}
                value={professional?.about}
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
                  value={professional?.email}
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
                  value={professional?.cpf}
                  width="50"
                  disabled={!edit}
                >
                  <HiOutlineDocumentText />
                </Input>
                <Input
                  width="50"
                  {...register('birthday')}
                  value={professional?.birthday}
                  type="date"
                  disabled={!edit}>
                  <TfiPencil />
                </Input>

                <Input
                  {...register('phone')}
                  value={professional?.phone}
                  width="50"
                  disabled={!edit}
                >
                  <FiSmartphone />
                </Input>
                <Input
                  {...register('landline')}
                  value={professional?.landline}
                  width="50"
                  placeholder="Telefone fixo"
                  disabled={!edit}
                >
                  <BsTelephone />
                </Input>

                <Input
                  value={professional?.address?.zipcode}
                  {...register('address.zipcode')}
                  width="50"
                  placeholder="CEP"
                  disabled={!edit}
                >
                  <TfiLocationPin />
                </Input>

                <Input
                  value={professional?.address?.street}
                  {...register('address.street')}
                  width="50"
                  placeholder="Logradouro"
                  disabled={!edit}
                >
                  <BiStreetView />
                </Input>

                <Input
                  value={professional?.address?.district}
                  {...register('address.district')}
                  width="50"
                  placeholder="Bairro"
                  disabled={!edit}
                >
                  <SiOpenstreetmap />
                </Input>
                <Input
                  value={professional?.address?.number}
                  {...register('address.number')}
                  width="50"
                  placeholder="Número"
                  disabled={!edit}
                >
                  <BsHouse />
                </Input>

                <Input
                  value={professional?.address?.complement}
                  {...register('address.complement')}
                  width="50"
                  placeholder="Complemento"
                  disabled={!edit}
                >
                  <MdOutlineOtherHouses />
                </Input>
                <Input
                  value={professional?.address?.city}
                  {...register('address.city')}
                  width="50"
                  placeholder="Cidade"
                  disabled={!edit}
                >
                  <BiBuildingHouse />
                </Input>

                <Input
                  value={professional?.address?.uf}
                  {...register('address.uf')}
                  width="50"
                  placeholder="UF"
                  disabled={!edit}
                >
                  <TfiLocationArrow />
                </Input>

                <Input
                  value={professional?.identificacao}
                  {...register('identificacao')}
                  width="50"
                  placeholder="Documento Profissional"
                  disabled={!edit}
                >
                  <FaRegAddressCard />
                </Input>

                <Input
                  value={professional?.especialidade}
                  {...register('especialidade')}
                  width="50"
                  placeholder="Especialidade"
                  disabled={!edit}
                >
                  <FaRegAddressBook />
                </Input>
                <Input
                  value={professional?.graduacao}
                  {...register('graduacao')}
                  width="50"
                  placeholder="Graduação"
                  disabled={!edit}
                >
                  <FaGraduationCap />
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
