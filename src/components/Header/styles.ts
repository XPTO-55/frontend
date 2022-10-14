import styled from "styled-components";


export const Main = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img{
    position: static;
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

`;

export const TextoMain = styled.div`
  width: 550px;
  height: 200px;
  margin-left: 150px;
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

export const Circle = styled.div`
  width: 50%;
  height: 700px;
  max-width: 700px;
  border-radius: 100%;
  background-color: rgba(144, 144, 144, 0.10);
  margin-left: 40%;
  margin-top: 240px;
  position: absolute;
  z-index: -2;

  &.circle2 {
    margin-left: -150px;
    margin-top: 700px;
    background-color: rgba(144, 144, 144, 0.10);
  }

  @media (min-width: 1200px){
    margin-left: 550px;
}
`;
