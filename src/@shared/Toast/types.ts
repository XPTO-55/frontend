export interface ToastProps {
  title: string
  description?: string
  action?: string
  close?: boolean
  type?: 'success' | 'pending' | 'info' | 'light' | 'error'
}

export interface IToastTypesProps {
  type: IToastTypes
}

export enum IToastTypes {
  success = '#80be80',
  pending = '#fd7e14',
  info = '#0d6efd',
  light = '#f6f6f6',
  error = '#C8372D',
}
