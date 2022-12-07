import React from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAppointments } from '../../services/types/responses'
export interface BoxAppointmentsProps extends React.HTMLAttributes<HTMLDivElement> {
  appointment: IAppointments
}
