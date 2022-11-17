import React from 'react'
import { Input } from '../../../Input'
import { FiUser, FiSmartphone } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { BsCalendarDate, BsTelephonePlus } from 'react-icons/bs'
import { TiDocument } from 'react-icons/ti'
import { CgFileDocument, CgPassword } from 'react-icons/cg'
import * as S from '../styles'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import * as Dialog from '@radix-ui/react-dialog'

export function PacienteForm() {
  return (
    <S.Form>
      <S.Fieldset>
        <Input type="text" placeholder="Nome Completo" width="cadastro" >
          <FiUser />
        </Input>
      </S.Fieldset>
      <S.Fieldset>
        <Input type="email" placeholder="Email" width="cadastro" >
          <TfiEmail />
        </Input>
      </S.Fieldset >
      <S.Fieldset>
        <Input placeholder="RG" width="cadastro" >
          <TiDocument />
        </Input>
      </S.Fieldset >
      <S.Fieldset>
        <Input placeholder="CPF" width="cadastro" >
          <CgFileDocument />
        </Input>
      </S.Fieldset >
      <S.Fieldset>
        <Input type="date" placeholder="Data de nascimento" width="cadastro" >
          <BsCalendarDate />
        </Input>
      </S.Fieldset >
      <S.Fieldset>
        <Input placeholder="Telefone fixo" width="cadastro" >
          <BsTelephonePlus />
        </Input>
      </S.Fieldset >
      <S.Fieldset>
        <Input placeholder="Telefone Celular" width="cadastro" >
          <FiSmartphone />
        </Input>
      </S.Fieldset>
      <S.Fieldset>
        <Input type="password" placeholder="Senha" width="cadastro" >
          <RiLockPasswordLine />
        </Input >
      </S.Fieldset >
      <S.Fieldset>
        <Input type="password" placeholder="Confirmar senha" width="cadastro" >
          <CgPassword />
        </Input>
      </S.Fieldset >
      <S.Footer className="bottom">
        <ButtonPrimary className="azul" tamanho="151px">
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
  )
}
