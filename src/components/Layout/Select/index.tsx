import React, { SelectHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import * as S from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon: React.ReactNode
  ref?: UseFormRegister<FieldValues>
}

export const Select = ({ icon }: SelectProps) => {
  return (
    <>
      <S.ContainerSelect>
        <S.Icon>{icon}</S.Icon>
        <S.Select>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="naobinario">Não binário</option>
        </S.Select>
      </S.ContainerSelect>
    </>
  )
}
