import React from 'react'
export interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  className?: string
  tamanho?: string
  onClick?: () => void
}
