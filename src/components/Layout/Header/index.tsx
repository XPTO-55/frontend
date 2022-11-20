import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import logo from '../../../../public/assets/img/logoCPA.png'
import Link from 'next/link'

export function Header () {
  return (
    <S.Header>
      <S.Container>
        <Image src={logo} width="130.43px" height="56px" />
        <S.Navbar>
          <S.Ul>
            <Link href="/">
              <S.Li>Home</S.Li>
            </Link>
            <Link href="/blog">
              <S.Li>Blog</S.Li>
            </Link>
            <Link href="/faq">
              <S.Li>FAQ</S.Li>
            </Link>
          </S.Ul>
          <Link href="/auth">
            <S.Button>Entrar</S.Button>
          </Link>
        </S.Navbar>
      </S.Container>
    </S.Header>
  )
}
