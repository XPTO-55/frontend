import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../../context/auth'
import * as S from './styles'
import { makeProfileImageurlS3 } from '../../../util/make-image-url-s3'

export function ProfileBar () {
  const [openMenu, setOpenMenu] = useState(false)
  const [openNotifications, setOpenNotifications] = useState(false)
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
        <Link href={`/users/${user?.userType}/profile`}>
          <S.Username>{user?.username}</S.Username>
        </Link>
        <Link href={`/users/${user?.userType}/profile`}>
          <S.ImageProfileContainer>
            <S.ImageProfile
              src={makeProfileImageurlS3(user?.profileUrl)}
              alt="user profile image"
            />
          </S.ImageProfileContainer>
        </Link>

        <button>Notifications</button>

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
                <Link href={'/'}>
                  <a href="">
                    Inicio
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/feed'}>
                  <a href="">
                    Feed
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/chat'}>
                  <a href="">
                    Chat
                  </a>
                </Link>
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
