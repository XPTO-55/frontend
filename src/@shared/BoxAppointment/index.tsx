import { formatDate } from '../../util/publish.date'
import * as S from './styles'
import { BoxAppointmentsProps } from './types'

export const BoxAppointment = ({ appointment, onClick }: BoxAppointmentsProps) => {
  return (
    <S.Container onClick={onClick}>

      <p>{formatDate.format(new Date((appointment?.date)))}</p>
      <p>{appointment?.professional}</p>
      <p>{appointment?.especiality}</p>
      <p>{appointment?.patient}</p>
      <p>Agendado</p>

    </S.Container>
  )
}
