import { useMutation, useQuery } from 'react-query'
import { BoxAppointment } from '../../@shared/BoxAppointment'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { useAuth } from '../../context/auth'
import { getAppointments } from '../../services/appointments.service'
import { IAppointments, ICreateProfessionalRatingRequest } from '../../services/types'
import * as S from './styles'
import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { useState } from 'react'
import { ButtonPrimary } from '../../@shared/ButtonPrimary'
import { formatDate } from '../../util/publish.date'
import { createRatingProfessional } from '../../services/professional.service'
import { Toast } from '../../@shared/Toast'
import { AxiosError } from 'axios'

export default function Appointments() {
  const [open, setOpen] = React.useState(false)
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const { user } = useAuth()
  const { data: appointments = [], isLoading } = useQuery<unknown, AxiosError, IAppointments[]>(
    ['appointments'],
    async () => {
      if (!user) return
      return await getAppointments(user?.id)
    }
  )
  const { mutate, isLoading: isLoadingRating, isError, isSuccess, error } = useMutation<unknown, unknown, ICreateProfessionalRatingRequest>(async (data) => await createRatingProfessional(appointment?.professionalId, data), {
    onSuccess: () => {
      setOpen(false)
    }
  })

  const [appointment, setAppointment] = useState<IAppointments>({
    patient: '',
    professional: '',
    especiality: '',
    date: new Date().toISOString()
  } as IAppointments)

  if (isLoading) {
    return <LoaderAllPage />
  }

  const handleOpen = (data: IAppointments) => {
    setOpen(true)
    setAppointment(data)
  }
  const handleClose = () => setOpen(false)

  const handleRatingSubmit = () => {
    mutate({
      rating: Number(rating),
      comment
    })
  }

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
                    <p>Data da consulta: {formatDate.format(new Date(appointment.date))}</p>
                    <p>Profissional: {appointment.professional}</p>
                    <p>Especialidade: {appointment.especiality}</p>
                    <p>Paciente: {appointment.patient}</p>
                  </div>

                  <textarea placeholder='Como foi a consulta?' onChange={(e) => setComment(e.target.value)} />
                </div>

                <div className='box-avaliacao'>

                  <h1>Avalie o profissional</h1>
                  <S.Rate >
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      type="radio"
                      id="star5"
                      name="rate"
                      value={5}
                    />
                    <label htmlFor='star5' title="text">5 stars</label>
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      type="radio"
                      id="star4"
                      name="rate"
                      value={4}
                    />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      type="radio"
                      id="star3"
                      name="rate"
                      value={3}
                    />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      type="radio"
                      id="star2"
                      name="rate"
                      value={2}
                    />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      type="radio"
                      id="star1"
                      name="rate"
                      value={1}
                    />
                    <label htmlFor="star1" title="text">1 star</label>
                  </S.Rate>
                  <ButtonPrimary className='laranja' disabled={isLoadingRating} onClick={handleRatingSubmit}>Salvar</ButtonPrimary>
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
            {appointments.length > 0
              ? appointments.map((appointment, index) => {
                return (
                  <BoxAppointment
                    onClick={() => handleOpen(appointment)}
                    key={index}
                    appointment={appointment}
                  />
                )
              })
              : null}
          </S.ContainerContent>
        </S.ContainerAppointments>
      </S.Container>
      {isError
        ? <Toast
          type='error'
          title='Erro ao avaliar o agendamento'
          // @ts-expect-error
          description={error?.message?.message || error?.message}
        />
        : null}
      {isSuccess
        ? <Toast
          type='success'
          title='Avaliação feita com sucesso'

        />
        : null}
    </>
  )
}
