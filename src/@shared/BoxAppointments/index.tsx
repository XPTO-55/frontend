import * as S from './styles'
import { BoxAppointmentsProps } from './types'

export const BoxAppointments = (appointment: BoxAppointmentsProps, onClick) => {
  return (
    <S.Container onClick={onClick}>

      <p>{appointment?.appointments?.dataConsulta}</p>
      <p>{appointment?.appointments?.nomeProfissional}</p>
      <p>{appointment?.appointments?.especialidade}</p>
      <p>{appointment?.appointments?.nomePaciente}</p>
      <p>Agendado</p>

    </S.Container>
  )
}
