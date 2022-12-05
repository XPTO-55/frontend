import { formatDate } from '../../util/publish.date'
import * as S from './styles'
import { BoxAppointmentsProps } from './types'

export const BoxAppointments = (appointment: BoxAppointmentsProps) => {
  return (
    <S.Container>

      <p>{formatDate.format(new Date((appointment?.appointments?.date)))}</p>
      <p>{appointment?.appointments?.professional}</p>
      <p>{appointment?.appointments?.especiality}</p>
      <p>{appointment?.appointments?.patient}</p>
      <p>Agendado</p>

    </S.Container>
  )
}
