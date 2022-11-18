import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  padding-left: 180px;
  padding-right: 180px;
  box-sizing: border-box;
  z-index: 100;
`;

export const Header = styled.div`
  width: 1200px;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  flex-wrap: wrap;
  gap: 20px;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a8dd2;
    border-radius: 10px;
  }
`;

export const NoProfessional = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  justify-content: flex-start;

  div {
    width: 330px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    color: white;
  }
`;
