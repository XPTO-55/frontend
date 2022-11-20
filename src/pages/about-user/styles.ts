import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Container = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

export const ContentUp = styled.div`
  width: 100%;
  height: 40%;
  display: flex;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h2 {
    font-size: 24px;
  }

  h4 {
    font-size: 50px;
    color: #ffb800;
    margin-left: -10px;
  }

  h5 {
    margin-top: 40px;
    margin-bottom: -30px;
    font-size: 20px;
  }
`

export const ContentDown = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    width: 19%;
    height: 100%;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 7px;
    background-color: #f5f5f5;
  }
  p {
    width: 78%;
    height: 91.5%;
    background-color: #f5f5f5;
    resize: none;
    border: none;
    margin-top: 20px;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 20px;
    overflow: hidden;
  }
`

export const BoxImg = styled.div`
  width: 28%;
  height: 100%;

  img {
    width: 84%;
    height: 99%;
    background-image: url("/assets/img/fotoRafaelLeao.png");
    background-size: cover;
    border-radius: 100%;
    border: 5px solid #2a8dd2;
  }
`

export const Footer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  color: #979797;

  div {
    font-size: 45px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: -25px;
  }

  div span {
    font-size: 16px;
    margin-top: 5px;
    margin-left: 10px;
  }
`
