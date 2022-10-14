import * as S from "./styles";
import Image from "next/image";
import logo from '../../../public/assets/img/logoCPA.png'

export function NavBar() {
  return (
    <S.Nav>
      <S.Container>
        <Image src={logo} width="130.43px" height="60px"/>

        <S.Ul>
          <S.Li>Home</S.Li>
          <S.Li>Sobre</S.Li>
          <S.Li>Blog</S.Li>
          <S.Li>Contato</S.Li>
          <S.Button>Entrar</S.Button>
        </S.Ul>
      </S.Container>
    </S.Nav>
  );
}
