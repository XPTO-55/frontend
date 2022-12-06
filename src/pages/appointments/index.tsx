import { useQuery } from 'react-query'
import { BoxAppointments } from '../../@shared/BoxAppointments'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { getAppointments } from '../../services/appointments.service'
import { IAppointments } from '../../services/types'
import * as S from './styles'
import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { useState } from 'react'

export default function Appointments() {
  const [open, setOpen] = React.useState(false)

  const { data: appointments = [], isLoading } = useQuery<IAppointments[]>(
    ['appointments'],
    getAppointments
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
          </Typography>
          <Typography>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
                <BoxAppointments
                  onClick={handleOpen}
                  key={index}
                  appointments={appointment}
                />

              )
            })}
          </S.ContainerContent>
        </S.ContainerAppointments>
      </S.Container>
    </>
  )
}
