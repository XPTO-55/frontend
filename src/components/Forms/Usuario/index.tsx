import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { PacienteForm, ProfissionalForm } from './tabs/'
import { UsuarioFormProps } from './types'
import Image from 'next/image'

export function UsuarioForm({ setOpen }: UsuarioFormProps) {
  const [tab, setTab] = useState('comum')
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content onClick={(event) => event.stopPropagation()}>
        <Dialog.Title>
          <S.TopWave color={tab === 'profissional' ? '#ffa025' : undefined}>
            <div>
              <Image width={36} height={36} src="/assets/img/logoSemTexto.png" alt="logo" />
              <p>Criar conta</p>
            </div>
          </S.TopWave>
        </Dialog.Title>
        <S.TabContainer onValueChange={setTab} defaultValue={tab}>
          <S.TabList aria-label="Manage your account">
            <S.Tab value="comum">Comum</S.Tab>
            <S.Tab value="profissional" color={'#ffa025'}>
              Profissional
            </S.Tab>
          </S.TabList>
          <S.TabContent value="comum">
            <PacienteForm setOpen={setOpen} />
          </S.TabContent>
          <S.TabContent value="profissional">
            <ProfissionalForm setOpen={setOpen} />
          </S.TabContent>
        </S.TabContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
