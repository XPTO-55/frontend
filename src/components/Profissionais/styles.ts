import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/assets/img/fundoProfissionais.jpg");
  background-repeat: no-repeat, repeat-x;
  background-position: top right, center;
  background-size: cover;
  max-width: 1598px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  color: white;
`;


export const ContainerInfoProf = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoProfContent = styled.div`
  width: 50%;
  height: 100%;

  &.texto {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 150px;

    h1 {
      font-size: 36px;
      font-weight: bold;
      width: 300px;
      margin-bottom: 40px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      margin-top: 10px;
      font-size: 17px;
      width: 500px;
      margin-bottom: 10px;
    }
  }

  &.imgProf {
    padding-top: 125px;
    padding-left: 80px;
    z-index: 2;
    img {
      border-radius: 7px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
`;

export const bordaImgProf = styled.div`
  width: 354px;
  height: 452px;
  position: absolute;
  margin-left: 650px;
  margin-top: 70px;
  border-radius: 7px;
  background-color: #2a8dd2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Svg = styled.svg`
  margin-top: -280px;
  max-width: 1600px;
`;
