import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { BiSearch } from 'react-icons/bi'
import * as S from './styles'
import { Input } from '../../../@shared/Input'
import { useState } from 'react'
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import { RiMailSendLine } from 'react-icons/ri'
import Link from 'next/link'

export default function ModalPassword() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setSendPassword(false)
  }

  const [sendPassword, setSendPassword] = useState<boolean>(false)

  const handleClick = () => {
    setSendPassword(true)
  }

  const Form = () => {
    return (
      <>
        <span>
          <img src="assets/img/logoCPA.png" alt="" />
        </span>

        <label htmlFor="">Recuperar senha de acesso</label>
        <Input placeholder="Digite seu email">
          <BiSearch />
        </Input>
        <ButtonPrimary onClick={handleClick} className="laranja">
          Enviar
        </ButtonPrimary>
      </>
    )
  }

  const FormSucess = () => {
    return (
      <>
        <h3>
          <h4>
            <RiMailSendLine />
          </h4>
          <h5>
            Verifique sua caixa de entrada para seguir com a recuperação de
            senha
          </h5>
        </h3>

        <ButtonPrimary onClick={handleClose} className="laranja">
          Voltar
        </ButtonPrimary>
      </>
    )
  }

  return (
    <div>
      <S.Title onClick={handleOpen}>Esqueceu a senha?</S.Title>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.Box>
          <S.Container>{!sendPassword ? Form() : FormSucess()}</S.Container>
        </S.Box>
      </Modal>
    </div>
  )
}
