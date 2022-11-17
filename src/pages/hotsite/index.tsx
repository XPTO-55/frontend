import React from "react";
import { Input } from "../../components/Layout/Input";
import * as S from "./styles";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { ButtonPrimary } from "../../@shared/ButtonPrimary";
import { ModalCadastro } from "../../components/Forms/ModalCadastro";
import { useState } from "react";
import Link from "next/link";

export default function HotSite() {
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
            <p>
            Faça aqui mesmo seus downloads e uploads sempre que precisar. 
            </p>
            
            <ButtonPrimary className="laranja" >
              DOWNLOAD CSV 
            </ButtonPrimary>

            <ButtonPrimary className="laranja" >
              DOWNLOAD TXT 
            </ButtonPrimary>
           
          <Link  href="/upload">
          <ButtonPrimary className="laranja" >
              UPLOADS
            </ButtonPrimary>
          </Link>

          <Link  href="/feed">
          <ButtonPrimary className="azul" >
              VOLTAR
            </ButtonPrimary>
          </Link>
           
          
         
            
          </S.ContainerLogin>
        </S.Container>
      </S.PageContainer>

      
    </>
  );
}
