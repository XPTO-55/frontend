import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { ButtonPrimaryProps } from './types'
import { Button } from './styles'

const ButtonPrimaryBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonPrimaryProps> = ({
  children,
  className,
  tamanho,
  onClick,
  ...props
}: ButtonPrimaryProps, ref) => {
  return (
    <Button {...props} className={className} ref={ref} width={tamanho} onClick={onClick}>
      {children}
    </Button>
  )
}

export const ButtonPrimary = forwardRef(ButtonPrimaryBase)
