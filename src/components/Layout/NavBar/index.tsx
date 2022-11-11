import * as S from "./styles";
import Image from "next/image";
import logo from "../../../../public/assets/img/logoCPA.png";
import Link from "next/link";

export function NavBar() {
  return (
    <S.Nav>
      <S.Container>
        <Image src={logo} width="130.43px" height="60px" />

        <S.Ul>
          <Link href="/">
            <S.Li>Home</S.Li>
          </Link>
          <S.Li>Sobre</S.Li>
          <S.Li>Blog</S.Li>
          <Link href="/faq">
            <S.Li>FAQ</S.Li>
          </Link>
          <S.Li>Contato</S.Li>

          <Link href="/auth">
            <S.Button>Entrar</S.Button>
          </Link>
        </S.Ul>
      </S.Container>
    </S.Nav>
  );
}
