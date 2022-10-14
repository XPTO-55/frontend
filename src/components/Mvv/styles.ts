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
`;
