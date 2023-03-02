import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../../context/auth'
import * as S from './styles'
import { makeProfileImageurlS3 } from '../../../util/make-image-url-s3'
import { useChat } from '../../../context/chat'
import { BiNotification } from 'react-icons/bi'
import { useRouter } from 'next/router'

export function ProfileBar () {
  const [openMenu, setOpenMenu] = useState(false)
  const [openNotifications, setOpenNotifications] = useState(false)
  const { signOut, user } = useAuth()
  const { notifications, readNotification } = useChat()
  // const {} = useQuery<Blob>(['profileImage', user.id], getProfi)
  const router = useRouter()

  if (!user?.userType) {
    void router.push('/')
    return null
  }
  const notificationsNotRead = notifications.filter(not => !not.read)
  const notificationsList = notificationsNotRead.length > 0 ? notificationsNotRead : []

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

        <S.ButtonNotifications onClick={(e) => {
          e.stopPropagation()
          setOpenNotifications((prev) => !prev)
        }}>
          <BiNotification size={24} />
          Notificações
        </S.ButtonNotifications>

        <S.NotificationsMenu
          open={openNotifications}
          onClick={e => e.stopPropagation()}
        >
          <ul>
            {notificationsList.length > 0
              ? notificationsList.map((notification, index) => {
                return (
                  <li
                    onClick={(e) => {
                      e.stopPropagation()
                      readNotification(notification.id)
                    }}
                    key={notification.id ?? index}>
                    {notification.message}
                  </li>
                )
              })
              : (
                <li>Não há novas mensagens</li>
              )}
          </ul>
        </S.NotificationsMenu>

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
                <Link href={'/users/professionals'}>
                  <a href="">
                    Profissionais
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/appointments'}>
                  <a href="">
                    Consultas
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
