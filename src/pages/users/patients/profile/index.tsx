import React, { useState } from 'react'
import {
  TfiPencil,
  TfiEmail,
  TfiLocationPin,
  TfiLocationArrow
} from 'react-icons/tfi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineOtherHouses } from 'react-icons/md'
import { FaRegAddressCard } from 'react-icons/fa'
import { BiBuildingHouse, BiStreetView } from 'react-icons/bi'
import { SiOpenstreetmap } from 'react-icons/si'
import { FiSmartphone } from 'react-icons/fi'
import { BsGenderAmbiguous, BsTelephone, BsHouse } from 'react-icons/bs'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { UploadImage } from '../../../../components/EditProfile/UploadImage'
import { Input } from '../../../../@shared/Input'
import { Select } from '../../../../@shared/Select'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import * as S from './styles'
import { useQuery } from 'react-query'
import { IProfessional } from '../../../../services/types'
import { putProfessionalId } from '../../../../services/professional.service'
import { api } from '../../../../services/api'

export default function Profile() {
  const [edit, setEdit] = useState<boolean>(false)

  const editing = (e) => {
    setEdit(!edit)
    e.preventDefault()
  }

  const { data: professional, isLoading } = useQuery<IProfessional>(['professional'], putProfessionalId)

  console.log('professionals', professional?.name)

  // function atualizarDados() {
  //   const dadosAtuais = {
  //     name: professional.name
  //   }
  // }

  const buttons = () => {
    return (
      <>
        <ButtonPrimary className="azul">Salvar</ButtonPrimary>
        <ButtonPrimary className="laranja" onClick={editing}>
          Cancelar
        </ButtonPrimary>
      </>
    )
  }

  return (
    <>
      <ProfileBar />

      <S.PageContainer>
        <S.ContainerForm>
          <S.ContentArea>
            <S.LeftArea>
              <UploadImage edit={!edit} />
            </S.LeftArea>
            <S.RightArea>
              <Input defaultValue='' disabled={!edit}>
                <TfiPencil />
              </Input>

              <textarea
                placeholder="Sobre mim..."
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vitae metus eget suscipit. Cras interdum, felis ac ornare mollis, erat turpis dictum purus, sed pretium dolor tellus non urna. Morbi elit arcu, ullamcorper et justo id, ornare egestas diam. Aenean nec turpis hendrerit, accumsan mauris a, fermentum odio"
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
                <span>
                  <Input
                    defaultValue="mariabelmonte@hotmail.com "
                    width="editProfile"
                    disabled={!edit}
                  >
                    <TfiEmail />
                  </Input>
                  <Select
                    icon={<BsGenderAmbiguous />}
                    disabled={!edit}
                  ></Select>
                </span>

                <span>
                  <Input
                    defaultValue="503.200.222-01 "
                    width="editProfile"
                    disabled={!edit}
                  >
                    <HiOutlineDocumentText />
                  </Input>
                  <Input width="editProfile" type="date" disabled={!edit}>
                    <TfiPencil />
                  </Input>
                </span>

                <span>
                  <Input
                    defaultValue="11 96787-6787 "
                    width="editProfile"
                    disabled={!edit}
                  >
                    <FiSmartphone />
                  </Input>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Telefone fixo"
                    disabled={!edit}
                  >
                    <BsTelephone />
                  </Input>
                </span>

                <span>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="CEP"
                    disabled={!edit}
                  >
                    <TfiLocationPin />
                  </Input>

                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Logradouro"
                    disabled={!edit}
                  >
                    <BiStreetView />
                  </Input>
                </span>

                <span>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Bairro"
                    disabled={!edit}
                  >
                    <SiOpenstreetmap />
                  </Input>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Número"
                    disabled={!edit}
                  >
                    <BsHouse />
                  </Input>
                </span>

                <span>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Complemento"
                    disabled={!edit}
                  >
                    <MdOutlineOtherHouses />
                  </Input>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="Cidade"
                    disabled={!edit}
                  >
                    <BiBuildingHouse />
                  </Input>
                </span>

                <span>
                  <Input
                    defaultValue=""
                    width="editProfile"
                    placeholder="UF"
                    disabled={!edit}
                  >
                    <TfiLocationArrow />
                  </Input>
                </span>
              </S.ContainerInput>
            </S.RightArea>
          </S.ContentArea>
        </S.ContainerForm>
      </S.PageContainer>
    </>
  )
}
