import { HtmlProps } from "next/dist/shared/lib/html-context";
import React, {InputHTMLAttributes} from "react";
import * as S from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

export const Input = ({ children, placeholder, ...props }: InputProps) => {
  return (
    <>
      <S.ContainerInput>
        <S.Icon>{children}</S.Icon>
        <S.Input placeholder={placeholder} {...props} />
      </S.ContainerInput>
    </>
  );
};
