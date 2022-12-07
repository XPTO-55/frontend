import { useQuery } from 'react-query'
import { BoxAppointment } from '../../@shared/BoxAppointment'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { useAuth } from '../../context/auth'
import { getAppointments } from '../../services/appointments.service'
import { IAppointments } from '../../services/types'
import * as S from './styles'
import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { useState } from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'

export default function Appointments() {
  const [open, setOpen] = React.useState(false)

  const { user } = useAuth()
  const { data: appointments = [], isLoading } = useQuery<IAppointments[]>(
    ['appointments'],
    async () => await getAppointments(user?.id)
  )

  if (isLoading) {
    return <LoaderAllPage />
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography>
            <S.Box>
              <S.ContainerModal>
                <div className='header'>
                  <img src="/assets/img/logoCPA.png" alt="" />
                  <p>Feedback</p>
                </div>
                <div className="dados">

                  <div className="info">
                    <p>Data da consulta: 00-00-000</p>
                    <p>Profissional: Rafael Leão</p>
                    <p>Especialidade: Psiquiatra</p>
                    <p>Paciente: Jel Lonas</p>
                  </div>

                  <textarea placeholder='Como foi a consulta?'/>
                </div>

                <div className='box-avaliacao'>

                  <h1>Avalie o profissional</h1>
                  <S.Rate>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label htmlFor='star5' title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="text">1 star</label>
                  </S.Rate>
                  <ButtonPrimary className='laranja'>Salvar</ButtonPrimary>
                </div>

              </S.ContainerModal>
            </S.Box>
          </Typography>
        </Box>
      </Modal>
      <ProfileBar />

      <S.Container>
        <h1>Historico de agendamento</h1>

        <S.ContainerAppointments>
          <S.HeaderAppointments>
            <p>Data</p>
            <p>Profissional</p>
            <p>Especialidade</p>
            <p>Paciente</p>
            <p>Status</p>
          </S.HeaderAppointments>

          <S.ContainerContent>
            {appointments.map((appointment, index) => {
              return (
                <BoxAppointment
                  onClick={handleOpen}
                  key={index}
                  appointment={appointment}
                />
              )
            })}
          </S.ContainerContent>
        </S.ContainerAppointments>
      </S.Container>
    </>
  )
}
