import React, { useState } from "react";
import * as S from "./styles";
import { Input } from "../../Input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ButtonPrimary } from "../../../@shared/ButtonPrimary";
import { SlLock } from "react-icons/sl";
import { FiUser, FiSmartphone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BsCalendarDate } from "react-icons/bs";
import { TiDocument } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
import { BsTelephonePlus } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineMapsHomeWork } from "react-icons/md";
export const ModalCadastro = ({ closeModal }: any) => {
  const [userSelect, setUserSelect] = useState(0);

  const [color, setColor] = useState(false);

  const userComum = () => {
    setUserSelect(0);
  };

  const userProfissional = () => {
    setUserSelect(1);
  };

  const userSelected = () => {
    if (userSelect == 0) {
      return (
        <S.ContainerBtn>
          <S.BtnComum onClick={userComum}>Comum</S.BtnComum>
          <S.BtnProfissional onClick={userProfissional} color={"#b0b0b0"}>
            Profissional
          </S.BtnProfissional>
        </S.ContainerBtn>
      );
    } else {
      return (
        <S.ContainerBtn>
          <S.BtnComum onClick={userComum} color={"#b0b0b0"}>
            Comum
          </S.BtnComum>
          <S.BtnProfissional onClick={userProfissional}>
            Profissional
          </S.BtnProfissional>
        </S.ContainerBtn>
      );
    }
  };

  const formSelected = () => {
    if (userSelect == 0) {
      return (
        <S.Form>
          <Input placeHolder="Nome Completo">
            <FiUser />
          </Input>
          <Input placeHolder="Email">
            <TfiEmail />
          </Input>
          <Input placeHolder="RG">
            <TiDocument />
          </Input>
          <Input placeHolder="CPF">
            <CgFileDocument />
          </Input>
          <Input placeHolder="Data de nascimento">
            <BsCalendarDate />
          </Input>
          <Input placeHolder="Telefone fixo" >
            <BsTelephonePlus />
          </Input>
          <Input placeHolder="Telefone Celular" >
            <FiSmartphone />
          </Input>
          <Input placeHolder="CEP" >
            <HiOutlineMapPin />
          </Input>
          <Input placeHolder="Endereço" >
            <MdOutlineMapsHomeWork />
          </Input>
        </S.Form>
      );
    } else {
      return (
        <S.Form>
          <Input placeHolder="Nome Completo">
            <FiUser />
          </Input>
          <Input placeHolder="Email" >
            <TfiEmail />
          </Input>
          <Input placeHolder="RG">
            <TiDocument />
          </Input>
          <Input placeHolder="CPF">
            <CgFileDocument /></Input>
          <Input
            placeHolder="Data de nascimento"
          >
            <BsCalendarDate />
          </Input>
          <Input placeHolder="Telefone fixo">
            <BsTelephonePlus />
          </Input>
          <Input placeHolder="Telefone Celular">
            <FiSmartphone />
          </Input>
          <Input placeHolder="CEP">
            <HiOutlineMapPin />
          </Input>
          <Input placeHolder="Endereço">
            <MdOutlineMapsHomeWork />
          </Input>
        </S.Form>
      );
    }
  };

  return (
    <S.PageContainer>
      <S.Container>
        <S.TopWave>
          <div>
            <img src="/assets/img/logoSemTexto.png" />
            <p>Criar conta</p>
          </div>
        </S.TopWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A8DD2"
            fill-opacity="1"
            d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,208C672,224,768,192,864,160C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {userSelected()}

        {formSelected()}

        <S.ContainerBtn className="bottom">
          <ButtonPrimary
            className="azul"
            tamanho="151px"
          >
            Cadastrar
          </ButtonPrimary>
          <ButtonPrimary
            className="laranja"
            tamanho="151px"
            onClick={closeModal}
          >
            Cancelar
          </ButtonPrimary>
        </S.ContainerBtn>
      </S.Container>
    </S.PageContainer>
  );
};
