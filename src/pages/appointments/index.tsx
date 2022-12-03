import { useQuery } from 'react-query'
import { BoxAppointments } from '../../@shared/BoxAppointments'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { getAppointments } from '../../services/appointments.service'
import { IAppointments } from '../../services/types'
import * as S from './styles'

export default function Appointments() {
  const { data: appointments = [], isLoading } = useQuery<IAppointments[]>(
    ['appointments'],
    getAppointments
  )

  if (isLoading) {
    return <LoaderAllPage />
  }
  return (

    <>
      <ProfileBar/>

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
                <BoxAppointments key={index} appointments={appointment}/>
              )
            })}

          </S.ContainerContent>

        </S.ContainerAppointments>

      </S.Container>
    </>

  )
}
