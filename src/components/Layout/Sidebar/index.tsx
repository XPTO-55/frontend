import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from '../../../context/auth'
import { makeProfileImageurlS3 } from '../../../util/make-image-url-s3'
import * as S from './styles'

function Sidebar() {
  const { user, signOut } = useAuth()

  const router = useRouter()

  if (!user?.userType) {
    void router.push('/')
    return null
  }

  return (
    <S.Container>
      <Link href={`/users/${user?.userType}/profile`}>
        <S.ProfileInfo>
          <S.ImageProfileContainer>
            <S.ImageProfile src={makeProfileImageurlS3(user?.profileUrl)} alt="" />
          </S.ImageProfileContainer>
          <h3>{user?.username}</h3>
        </S.ProfileInfo>
      </Link>
      <S.Navigation>
        <ul>
          <li>
            <Link href={'/users/professionals'}>
              <a>
                Profissionais
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/chat'}>
              <a>
                Chat
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/appointments'}>
              <a>
                Consultas
              </a>
            </Link>
          </li>
          {/* <li>Amigos</li> */}
          <li>
            <Link href={'/hotsite'}>
              <a>
                Arquivos
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/faq'}>
              <a>
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <a onClick={signOut}>
              Sair
            </a>
          </li>
        </ul>
      </S.Navigation>
    </S.Container>
  )
}

export default Sidebar
