import React, { useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ModalCadastro } from '../../components/Forms/ModalCadastro'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import Link from 'next/link'

export default function Upload (): JSX.Element {
  const [modal, setModal] = useState(false)

  const openModal = (): void => {
    setModal(!modal)
  }

  return (
    <>
      <S.PageContainer>
        {modal ? <ModalCadastro closeModal={openModal} /> : ''}

        <S.Container>
          <S.ContainerLogin>
            <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
            </Link>

            <p> Faça aqui os seus upload</p>
            <form action="">
              <div>
                <label htmlFor="arquivo"></label>
                <Input type={'file'} name={'arquivo'} id={'arquivo'}>

                 </Input>
              </div>
            </form>

            <Link href="/hotsite">
          <ButtonPrimary className="azul" >
              VOLTAR
            </ButtonPrimary>
          </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

    </>
  )
}
