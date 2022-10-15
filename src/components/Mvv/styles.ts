import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.mvv {
    background-color: #2a8dd2;
    height: 500px;
  }
`;

export const ContainerMvv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardMvv = styled.div`
  width: 380px;
  height: 400px;
  border-radius: 7px;
  background-color: #e6e9ea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &.missao{
    svg{
      color: #FFA025;
    }
  }
  &.visao{
    svg{
      color: #2A8DD2;
    }
  }
  &.valores{
    svg{
      color: #FF4725;
    }
  }

  svg{
    width: 140px;
    height: 140px;

    
  }

  div{
    height: 48%;
    width: 50%;
    background-color: #D0D3D4;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1{
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
  }

  span{
    height: 40%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
  }
`;
