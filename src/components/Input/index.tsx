import React, {InputHTMLAttributes} from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import * as S from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  ref?: UseFormRegister<FieldValues>
  width?: string; 
}

export const Input = ({ children, placeholder, width, ...props }: InputProps) => {
  return (
    <>
      <S.ContainerInput>
        <S.Icon>{children}</S.Icon>
        <S.Input placeholder={placeholder} {...props} className={width} />
      </S.ContainerInput>
    </>
  );
};
