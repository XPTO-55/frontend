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

  @media (max-width: 1000px) {
    height: 700px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  color: white;
`;

export const ContainerInfoProf = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfoProfContent = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 1000px) {
    margin-left: -550px;
  }

  &.texto {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 150px;
    gap: 0.5rem;

    @media (max-width: 1000px) {
      padding-right: 180px;
      width: 30%;
      margin-top: -100px;
    }

    h1 {
      font-size: 36px;
      font-weight: bold;

      @media (max-width: 1000px) {
        margin-bottom: 10px;
        margin-top: -50px;
      }
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      margin-top: 10px;
      font-size: 17px;
      width: 500px;
      margin-bottom: 10px;
      line-height: 1.5rem;

      @media (max-width: 1000px) {
        width: 300px;
      }
    }
  }

  &.imgProf {
    padding-top: 125px;
    padding-left: 80px;
    z-index: 2;

    @media (max-width: 1000px) {
      display: none;
    }

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

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  margin-top: -280px;
  max-width: 1600px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
