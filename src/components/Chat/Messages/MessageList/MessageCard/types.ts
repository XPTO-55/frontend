import React from 'react'
import { IMessage } from '../../../../../services/types'

export interface IMessageCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  message: IMessage
}
