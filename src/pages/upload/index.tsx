import React from "react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { ModalCadastro } from "../../components/Forms/ModalCadastro";
import { ButtonPrimary } from "../../@shared/ButtonPrimary";
import { useState } from "react";
import Link from "next/link";

export default function Upload() {
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
            
            <p> Faça aqui os seus upload</p>
            <form action="">
              <div>
                <label htmlFor="arquivo"></label>
                 <Input  type={"file"} name={"arquivo"} id={"arquivo"}>
            
                 </Input>
              </div>
            </form>

            <Link  href="/">
          <ButtonPrimary className="laranja" >
              VOLTAR
            </ButtonPrimary>
          </Link>
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

      
    </>
  );
}
