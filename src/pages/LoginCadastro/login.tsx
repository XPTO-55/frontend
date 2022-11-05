import React from "react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ModalCadastro } from "../../components/ModalCadastro";
import { useState } from "react";

export function Login() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <S.PageContainer>
        {modal ? <ModalCadastro closeModal={openModal} /> : ""}

        <S.Container>
          <S.ContainerLogin>
            <S.Img src="/assets/img/logoCPA.png" alt="" />
            <Input children={<MdOutlineAlternateEmail />} placeHolder="Email" />
            <Input children={<SlLock />} placeHolder="Senha" />
            <span>Esqueceu a senha?</span>
            <ButtonPrimary children="Entrar" className="laranja" />
            <p>
              Não possui uma conta?
              <a href="#" onClick={openModal}>
                {" "}
                Cadastra-se
              </a>{" "}
            </p>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>
    </>
  );
}
