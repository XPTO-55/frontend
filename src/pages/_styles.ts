import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

export const Main = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px;

  img {
    margin-top: 60px;
    width: 850px;
    height: 600px;
    margin-left: -150px;
  }

  @media (max-width: 1200px) {
    margin-left: 500px;
    justify-content: flex-start;
    height: 600px;

    img {
      display: none;
    }
  }
`

export const Svg = styled.svg`
  margin-top: -100px;
  max-width: 1600px;
  z-index: 1;
`

export const ContainerTextoBanner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-left: -100px;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin-left: -130px;
    align-items: center;
    margin-top: -160px;
  }
`

export const TextoMain = styled.div`
  width: 550px;
  height: 200px;
  margin-top: 50px;
  z-index: 2;

  @media (max-width: 1000px) {
    width: 400px;
  }

  h1 {
    font-size: 45px;
    font-weight: bold;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 19px;
  }
`

export const Section = styled.section`
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.mvv {
    background-color: #2a8dd2;
    height: 500px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`

export const ContainerMvv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardMvv = styled.div`
  width: 380px;
  text-align: left;
  height: 400px;
  border-radius: 7px;
  background-color: #e6e9ea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &.missao {
    svg {
      color: #ffa025;
    }
  }
  &.visao {
    svg {
      color: #2a8dd2;
    }
  }
  &.valores {
    svg {
      color: #ff4725;
    }
  }
  svg {
    width: 140px;
    height: 140px;
  }
  div {
    height: 48%;
    width: 50%;
    background-color: #d0d3d4;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
  }
  span {
    height: 40%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
  }
`

export const ContainerSobreNos = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f2;
  flex-direction: column;

  @media (max-width: 1000px) {
    height: 1100px;
    margin-top: -50px;
  }
`

export const ContSobreNos = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -100px;

  @media (max-width: 1000px) {
    height: 100%;
  }
`

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 34px;
      margin-bottom: 10px;
    }

    h2 p {
      margin-bottom: 20px;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    height: 700px;
    justify-content: center;
    flex-direction: column;

    div {
      width: 80%;
      height: 400px;
      align-items: center;
      text-align: center;
    }
  }
`

export const ImgSobre = styled.p`
  width: 100%;
  height: 100%;
  background-image: url("/assets/img/autismo.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 2%;
  margin-top: -40px;
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin-top: -30px;
    margin-left: 20px;
  }
`

export const BorderImg = styled.span`
  width: 450px;
  height: 450px;
  background-color: #ff4725;
  border-radius: 2%;

  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
`

export const Img = styled.img`
  width: 800px;
  height: 500px;
  margin-left: -110px;
`

export const Svg2 = styled.svg`
  margin-top: -160px;
  max-width: 1600px;
`

export const PageContainerFooter = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a6cb2;

  @media (max-width: 1000px) {
    height: 700px;
  }
`

export const ContainerFooter = styled.div`
  width: 1200px;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const ContainerContentFooter = styled.div`
  width: 32%;
  height: 95%;
  display: flex;
  color: #f0f2f2;

  @media (max-width: 1000px) {
    width: 90%;

    &.redesSociais {
      margin-left: 60px;
    }

    &.suporte {
      margin-left: 60px;
    }
  }
  &.redesSociais {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &.info {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 24px;
      margin-top: 20px;
      font-weight: 500;
    }
    h2 {
      font-size: 15px;
      font-weight: normal;
      margin-top: 3px;
    }
  }
  &.suporte {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 50px;
    h1 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 15px;
      font-weight: normal;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 15px;
      font-weight: normal;
      margin-bottom: 15px;
    }
  }
  &.imgCpa {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-top: 15px;
      margin-left: 100px;
    }
  }
`

export const SvgFooter = styled.svg`
  color: #f0f2f2;
  width: 50px;
  height: 50px;
  margin-top: 25px;
`
