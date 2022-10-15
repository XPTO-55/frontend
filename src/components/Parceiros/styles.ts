import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2A8DD2;
  flex-direction: column;

  h1{
    position: absolute;
    margin-top: -500px;
    font-size: 36px;
    color: white;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -140px;
`;

export const ContainerNavigator = styled.div`
  position: relative;
  width: 100vw;
`;

