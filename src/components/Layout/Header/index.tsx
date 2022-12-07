import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import logo from '../../../../public/assets/img/logoCPA.png'
import Link from 'next/link'
import { useAuth } from '../../../context/auth'
import { TfiMenu, TfiClose } from 'react-icons/tfi'

export function Header() {
  const [open, setOpen] = useState('0%')

  const opening = () => {
    setOpen('100%')
  }

  const close = () => {
    setOpen('0%')
  }

  const { signed, signOut } = useAuth()

  return (
    <>
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
              <Link href="/places">
                <S.Li>Lugares</S.Li>
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
            <S.Icon onClick={opening}>
              <TfiMenu />
            </S.Icon>
          </S.Navbar>
        </S.Container>
      </S.Header>

      <S.SecondMenu tamanho={open}>
        <div>
          <img src="/assets/img/logo.png" alt="" />
          CPA
        </div>

        <Link href="/">
          <p>Home</p>
        </Link>

        <Link href="/blog">
          <p>Blog</p>
        </Link>

        <Link href="/faq">
          <p>FAQ</p>
        </Link>

        <Link href="/places">
          <p>Lugares</p>
        </Link>

        <Link href="/auth">
          <p>Login</p>
        </Link>

        <span onClick={close}>
          <TfiClose />
        </span>
      </S.SecondMenu>
    </>
  )
}
