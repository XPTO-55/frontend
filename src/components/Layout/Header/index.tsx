import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import logo from '../../../../public/assets/img/logoCPA.png'
import Link from 'next/link'
import { TfiMenu, TfiClose } from 'react-icons/tfi'

export function Header() {
  const [open, setOpen] = useState('0%')

  const opening = () => {
    setOpen('100%')

    console.log('teste')
  }

  const close = () => {
    setOpen('0%')
  }

  return (
    <>
      <S.Header>
        <S.Container>
          <Image src={logo} width="130.43px" height="56px" alt="logo" />
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
            </S.Ul>
            <Link href="/auth">
              <S.Button>Entrar</S.Button>
            </Link>
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

        <span onClick={close}>
          <TfiClose />
        </span>
      </S.SecondMenu>
    </>
  )
}
