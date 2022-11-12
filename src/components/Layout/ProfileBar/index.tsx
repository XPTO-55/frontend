import { useState } from 'react'
import * as S from './styles'

export function ProfileBar() {
  const [openMenu, setOpenMenu] = useState(false);

  // let show = true;

  // const menuSection = document.querySelector(".menu-section")
  // const menuToggle = menuSection.querySelector(".menu-toggle")

  // menuToggle.addEventListener("click", () => {

  //   document.body.style.overflow = show ? "hidden" : "initial"

  //   menuSection.classList.toggle("on", show)
  //   show = !show;
  // })

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={"/assets/img/logoSemTexto.png"} alt="" />
      </S.LogoContainer>
      <S.UserInfo>
        <S.Username>maria Belmonte</S.Username>
        <S.ImageProfileContainer>
          <S.ImageProfile src="/assets/img/profile.png" alt="" />
        </S.ImageProfileContainer>
        {/* menu-section */}
        <S.HamburguerMenuContainer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
          {/* menu-toggle */}
          <S.Hamburguer open={openMenu} onClick={() => setOpenMenu(prev => !prev)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </S.Hamburguer>
          {/* nav */}
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