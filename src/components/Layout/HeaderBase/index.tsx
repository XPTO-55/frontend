import Link from 'next/link'
import React from 'react'
import * as S from './styles'

export function HeaderBase() {
  return (
    <S.Container>
      <S.Content>
        <Link href={'/'}>
          <S.LogoContainer>
            <S.Logo src={'/assets/img/logoSemTexto.png'} alt="" />
          </S.LogoContainer>
        </Link>
        <p>CPA</p>
      </S.Content>

    </S.Container>
  )
}
