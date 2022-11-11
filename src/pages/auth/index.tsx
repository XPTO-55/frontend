import React from "react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { ButtonPrimary } from "../../@shared/ButtonPrimary";
import { ModalCadastro } from "../../components/Forms/ModalCadastro";
import { useState } from "react";
import Link from "next/link";

export default function Auth() {
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
            <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
            </Link>
            <Input placeholder="Email">
              <MdOutlineAlternateEmail /></Input>
            <Input placeholder="Senha" >
              <SlLock />
            </Input>
            <span>Esqueceu a senha?</span>
            <ButtonPrimary className="laranja" >
              Entrar
            </ButtonPrimary>
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
