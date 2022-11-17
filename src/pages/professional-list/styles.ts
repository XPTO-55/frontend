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
`

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
  background-color: #2A8DD2;   
  border-radius: 10px;      
}
`;


