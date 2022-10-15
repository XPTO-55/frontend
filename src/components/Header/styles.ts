import styled from "styled-components";

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

    img {
      display: none;
    }
  }
`;

export const Svg = styled.svg`
  margin-top: -100px;
  max-width: 1600px;
  z-index: 1;
`;

export const ContainerTextoBanner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-left: -100px;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const TextoMain = styled.div`
  width: 550px;
  height: 200px;
  margin-left: 150px;
  margin-top: 50px;
  z-index: 2;

  h1 {
    font-size: 45px;
    font-weight: bold;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 19px;
  }
`;
