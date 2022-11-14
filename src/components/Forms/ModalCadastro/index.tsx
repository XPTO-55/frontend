import React, { useState } from 'react'
import * as S from './styles'
import { Input } from '../../Input'
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import { FiUser, FiSmartphone } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { BsCalendarDate, BsTelephonePlus } from 'react-icons/bs'
import { TiDocument } from 'react-icons/ti'
import { CgFileDocument, CgPassword } from 'react-icons/cg'
import { RiLockPasswordLine } from 'react-icons/ri'

interface ModalCadastroProps {
  closeModal: () => void
}

export const ModalCadastro = ({ closeModal }: ModalCadastroProps) => {
  const [userSelect, setUserSelect] = useState(0)
  const userComum = () => {
    setUserSelect(0)
  }

  const userProfissional = () => {
    setUserSelect(1)
  }

  // leo

  const userSelected = () => {
    if (userSelect === 0) {
      return (
        <S.ContainerBtn>
          <S.BtnComum onClick={userComum}>Comum</S.BtnComum>
          <S.BtnProfissional onClick={userProfissional} color={'#b0b0b0'}>
            Profissional
          </S.BtnProfissional>
        </S.ContainerBtn>
      )
    } else {
      return (
        <S.ContainerBtn>
          <S.BtnComum onClick={userComum} color={'#b0b0b0'}>
            Comum
          </S.BtnComum>
          <S.BtnProfissional onClick={userProfissional}>
            Profissional
          </S.BtnProfissional>
        </S.ContainerBtn>
      )
    }
  }

  const formSelected = () => {
    if (userSelect === 0) {
      return (
        <S.Form>
          <Input type="text" placeholder="Nome Completo" width="cadastro">
            <FiUser />
          </Input>
          <Input type="email" placeholder="Email" width="cadastro">
            <TfiEmail />
          </Input>

          <Input placeholder="RG" width="cadastro">
            <TiDocument />
          </Input>
          <Input placeholder="CPF" width="cadastro">
            <CgFileDocument />
          </Input>
          <Input type="date" placeholder="Data de nascimento" width="cadastro">
            <BsCalendarDate />
          </Input>
          <Input placeholder="Telefone fixo" width="cadastro">
            <BsTelephonePlus />
          </Input>
          <Input placeholder="Telefone Celular" width="cadastro">
            <FiSmartphone />
          </Input>
          <Input type="password" placeholder="Senha" width="cadastro">
            <RiLockPasswordLine />
          </Input>
          <Input type="password" placeholder="Confirmar senha" width="cadastro">
            <CgPassword />
          </Input>
        </S.Form>
      )
    } else {
      return (
        <S.Form>
          <Input type="text" placeholder="Nome Completo" width="cadastro">
            <FiUser />
          </Input>
          <Input type="email" placeholder="Email" width="cadastro">
            <TfiEmail />
          </Input>

          <Input placeholder="RG" width="cadastro">
            <TiDocument />
          </Input>
          <Input placeholder="CPF" width="cadastro">
            <CgFileDocument />
          </Input>
          <Input type="date" placeholder="Data de nascimento" width="cadastro">
            <BsCalendarDate />
          </Input>
          <Input placeholder="Telefone fixo" width="cadastro">
            <BsTelephonePlus />
          </Input>
          <Input placeholder="Telefone Celular" width="cadastro">
            <FiSmartphone />
          </Input>
          <Input type="password" placeholder="Senha" width="cadastro">
            <RiLockPasswordLine />
          </Input>
          <Input type="password" placeholder="Confirmar senha" width="cadastro">
            <CgPassword />
          </Input>
        </S.Form>
      )
    }
  }

  return (
    <S.PageContainer>
      <S.Container>
        <S.TopWave>
          <div>
            <img src="/assets/img/logoSemTexto.png" />
            <p>Criar conta</p>
          </div>
        </S.TopWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A8DD2"
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,208C672,224,768,192,864,160C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {userSelected()}

        {formSelected()}

        <S.ContainerBtn className="bottom">
          <ButtonPrimary className="azul" tamanho="151px">
            Cadastrar
          </ButtonPrimary>

          <ButtonPrimary
            className="laranja"
            tamanho="151px"
            onClick={closeModal}
          >
            Cancelar
          </ButtonPrimary>
        </S.ContainerBtn>
      </S.Container>
    </S.PageContainer>
  )
}
