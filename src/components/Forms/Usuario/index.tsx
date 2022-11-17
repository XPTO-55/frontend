import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import * as S from './styles'
import { PacienteForm, ProfissionalForm } from './tabs/'
import { UsuarioFormProps } from './types'

export function UsuarioForm({ setOpen }: UsuarioFormProps) {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content onClick={event => event.stopPropagation()}>
        <Dialog.Title>
          <S.TopWave>
            <div>
              <img src="/assets/img/logoSemTexto.png" />
              <p>Criar conta</p>
            </div>
          </S.TopWave>
        </Dialog.Title>
        <S.TabContainer defaultValue="comum">
          <S.TabList aria-label="Manage your account">
            <S.Tab value="comum">
              Comum
            </S.Tab>
            <S.Tab value="profissional">
              Profissional
            </S.Tab>
          </S.TabList>
          <Tabs.Content value="comum">
            <PacienteForm setOpen={setOpen} />
          </Tabs.Content>
          <Tabs.Content value="profissional">
            <ProfissionalForm setOpen={setOpen} />
          </Tabs.Content>
        </S.TabContainer>
      </S.Content>
    </Dialog.Portal >

  )
}
