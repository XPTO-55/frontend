import { useState } from 'react'
import * as S from './styles'

export function ProfileBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={"/assets/img/logoSemTexto.png"} alt="" />
      </S.LogoContainer>
      <S.UserInfo>
        <S.Username>nazaré tedesco</S.Username>
        <S.ImageProfileContainer>
          <S.ImageProfile src="/assets/img/profile.png" alt="" />
        </S.ImageProfileContainer>
        <S.HamburguerMenuContainer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
          <S.Hamburguer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </S.Hamburguer>
          <S.HamburguerMenu open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
            <ul>
              <li>
                Feed
              </li>
              <li>
                Profissionais
              </li>
              <li>
                FAQ
              </li>
              <li>
                Sair
              </li>
            </ul>
          </S.HamburguerMenu>
        </S.HamburguerMenuContainer>
      </S.UserInfo>
    </S.Container>
  )
}