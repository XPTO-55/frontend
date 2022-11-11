import * as S from './styles'

export function ProfileBar() {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={"/assets/img/logoSemTexto.png"} alt="" />
      </S.LogoContainer>
      <S.UserInfo>
        <S.Username>maria Belmonte</S.Username>
        <S.ImageProfileContainer>
          <S.ImageProfile src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </S.ImageProfileContainer>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.UserInfo>
    </S.Container>
  )
}