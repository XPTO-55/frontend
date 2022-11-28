import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import logo from '../../../../public/assets/img/logoCPA.png'
import Link from 'next/link'
import { useAuth } from '../../../context/auth'

export function Header () {
  const { signed, signOut } = useAuth()

  return (
    <S.Header>
      <S.Container>
        <Link href={'/'}>
          <Image src={logo} width="130.43px" height="56px" alt='logo' />
        </Link>
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
            {
              signed
                ? (
                  <Link href="/feed">
                    <S.Li>
                      Feed
                    </S.Li>
                  </Link>
                )
                : null
            }
          </S.Ul>
          {
            signed
              ? (
                <S.Button onClick={signOut}>Sair</S.Button>
              )
              : (
                <Link href="/auth">
                  <S.Button>Entrar</S.Button>
                </Link>
              )
          }
        </S.Navbar>
      </S.Container>
    </S.Header>
  )
}
