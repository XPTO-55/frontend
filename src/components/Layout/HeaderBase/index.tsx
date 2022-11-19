import React from 'react'
import * as S from './styles'

export function HeaderBase() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.Logo src={'/assets/img/logoSemTexto.png'} alt="" />
        </S.LogoContainer>
        <p>CPA</p>
      </S.Content>

    </S.Container>
  )
}
