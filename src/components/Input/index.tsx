import React from "react";
import * as S from "./styles";

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
