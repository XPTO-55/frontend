import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../../context/auth'
import * as S from './styles'
import { makeProfileImageurlS3 } from '../../../util/profile-image-s3'

export function ProfileBar () {
  const [openMenu, setOpenMenu] = useState(false)
  const { signOut, user } = useAuth()
  // const {} = useQuery<Blob>(['profileImage', user.id], getProfi)

  return (
    <S.Container>
      <Link href={'/'}>
        <S.LogoContainer>
          <S.Logo src={'/assets/img/logoSemTexto.png'} alt="" />
        </S.LogoContainer>
      </Link>
      <S.UserInfo>
        <S.Username>{user?.username}</S.Username>
        <S.ImageProfileContainer>
          <S.ImageProfile
            src={makeProfileImageurlS3(user?.profileUrl)}
            alt="user profile image"
          />
        </S.ImageProfileContainer>
        <S.HamburguerMenuContainer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
          <S.Hamburguer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
            <div onClick={() => setOpenMenu(prev => !prev)} className="one"></div>
            <div onClick={() => setOpenMenu(prev => !prev)} className="two"></div>
            <div onClick={() => setOpenMenu(prev => !prev)} className="three"></div>
          </S.Hamburguer>
          <S.HamburguerMenu
            open={openMenu}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <ul>
              <li>
                Configurações
              </li>
              <li>
                Ajuda e suporte
              </li>
              <li>
                <Link href={'/faq'}>
                  <a href="">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a onClick={signOut}>
                    Sair
                  </a>
                </Link>
              </li>
            </ul>
          </S.HamburguerMenu>
        </S.HamburguerMenuContainer>
      </S.UserInfo>
    </S.Container>
  )
}
