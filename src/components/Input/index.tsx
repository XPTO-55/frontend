import React, { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  width?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ children, placeholder, width, ...props }, ref) => {
    return (
    <>
      <S.ContainerInput>
        <S.Icon>{children}</S.Icon>
        <S.Input placeholder={placeholder} {...props} className={width} />
      </S.ContainerInput>
    </>
    )
  }

export const Input = forwardRef(InputBase)
