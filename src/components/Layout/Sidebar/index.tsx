import Link from 'next/link'
import React from 'react'
import * as S from './styles'

function Sidebar() {
  return (
    <S.Container>
      <S.ProfileInfo>
        <S.ImageProfileContainer>
          <S.ImageProfile src="http://github.com/milenafazolim.png" alt="" />
        </S.ImageProfileContainer>
        <h3>Maria Belmonte</h3>
      </S.ProfileInfo>
      <S.Navigation>
        <ul>
          <li>Profissionais</li>
          <li>Chat</li>
          <li>Agenda</li>
          <li>Amigos</li>
          <li>
            <Link href={'/hotsite'}>
              <a>
                Arquivos
              </a>
            </Link>
          </li>
          <li>FAQ</li>
        </ul>
      </S.Navigation>
    </S.Container>
  )
}

export default Sidebar
