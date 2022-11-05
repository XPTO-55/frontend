import React from "react";
import * as S from "./styles";
import { MdOutlineEmail } from "react-icons/md";

export const Input = ({ children, placeHolder }: any) => {
  return (
    <>
      <S.ContainerInput>
        <S.Icon>{children}</S.Icon>
        <S.Input placeholder={placeHolder} />
      </S.ContainerInput>
    </>
  );
};
