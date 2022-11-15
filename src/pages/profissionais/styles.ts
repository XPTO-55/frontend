import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  overflow: auto;
  flex-wrap: wrap;
  gap: 20px;
`;
