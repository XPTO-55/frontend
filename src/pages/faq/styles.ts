import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerContent = styled.div`
width: 100%;
height: 480px;
overflow: auto;
`

export const Svg = styled.svg`
z-index: -1;
position: fixed;
margin-top: 300px;
width: 100%;
height: 100%;
`