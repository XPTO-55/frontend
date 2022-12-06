import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;

  span {
    font-size: 20px;
    margin-right: 20px;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    input {
      width: 200px;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 480px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5rem;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a8dd2;
    border-radius: 10px;
  }
`;
