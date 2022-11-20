import React from 'react'
import { TfiPencil, TfiEmail, TfiLocationPin, TfiLocationArrow } from 'react-icons/tfi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineOtherHouses } from 'react-icons/md'
import { BiBuildingHouse, BiStreetView } from 'react-icons/bi'
import { SiOpenstreetmap } from 'react-icons/si'
import { FiSmartphone } from 'react-icons/fi'
import { BsGenderAmbiguous, BsTelephone, BsHouse } from 'react-icons/bs'
import { ButtonPrimary } from '../../../../../@shared/ButtonPrimary'
import { UploadImage } from '../../../../../components/EditProfile/UploadImage'
import { Input } from '../../../../../@shared/Input'
import { Select } from '../../../../../components/Layout/Select'

import { ProfileBar } from '../../../../../components/Layout/ProfileBar'
import * as S from './styles'

export default function EditProfile() {
  return (
    <>
      <ProfileBar />

      <S.PageContainer>
        <S.ContainerForm>
          <S.ContentArea>
            <S.LeftArea>
              <UploadImage />
            </S.LeftArea>
            <S.RightArea>
              <Input defaultValue="Maria Belmonte">
                <TfiPencil />
              </Input>
              <textarea placeholder="Sobre mim..." defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vitae metus eget suscipit. Cras interdum, felis ac ornare mollis, erat turpis dictum purus, sed pretium dolor tellus non urna. Morbi elit arcu, ullamcorper et justo id, ornare egestas diam. Aenean nec turpis hendrerit, accumsan mauris a, fermentum odio" />
            </S.RightArea>
          </S.ContentArea>
          <S.ContentArea>
            <S.LeftArea className="baixo">
              <ButtonPrimary className="azul">Salvar</ButtonPrimary>
              <ButtonPrimary className="laranja">Limpar</ButtonPrimary>
            </S.LeftArea>

            <S.RightArea className="baixo">
              <S.ContainerInput>
                <span>
                  <Input defaultValue="mariabelmonte@hotmail.com " width="editProfile">
                    <TfiEmail />
                  </Input>
                  <Select icon={<BsGenderAmbiguous />}>
                  </Select>
                </span>

                <span>
                  <Input defaultValue="503.200.222-01 " width="editProfile">
                    <HiOutlineDocumentText />
                  </Input>
                  <Input width="editProfile" type="date">
                    <TfiPencil />
                  </Input>
                </span>

                <span>
                  <Input defaultValue="11 96787-6787 " width="editProfile">
                    <FiSmartphone />
                  </Input>
                  <Input defaultValue="" width="editProfile" placeholder="Telefone fixo">
                    <BsTelephone />
                  </Input>

                </span>

                <span>

                  <Input defaultValue="" width="editProfile" placeholder="CEP">
                    <TfiLocationPin />
                  </Input>

                  <Input defaultValue="" width="editProfile" placeholder="Logradouro">
                    <BiStreetView />
                  </Input>
                </span>

                <span>
                  <Input defaultValue="" width="editProfile" placeholder="Bairro">
                    <SiOpenstreetmap />
                  </Input>
                  <Input defaultValue="" width="editProfile" placeholder="Número">
                    <BsHouse />
                  </Input>
                </span>

                <span>
                  <Input defaultValue="" width="editProfile" placeholder="Complemento">
                    <MdOutlineOtherHouses />
                  </Input>
                  <Input defaultValue="" width="editProfile" placeholder="Cidade">
                    <BiBuildingHouse />
                  </Input>
                </span>

                <span>
                  <Input defaultValue="" width="editProfile" placeholder="UF">
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
