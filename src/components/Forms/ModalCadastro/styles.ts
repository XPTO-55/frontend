import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Container = styled.div`
  width: 550px;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 7px;
  z-index: 20;

  span {
    width: 100%;
    height: 50px;
    background-color: red;
  }
`;

export const TopWave = styled.div`
  width: 100%;
  height: 40px;
  background-color: #2a8dd2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  div {
    z-index: 11;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -20px;
    padding-right: 12px;
  }

  div p {
    margin-bottom: -20px;
    font-size: 24px;
    font-weight: 400;
    color: white;
    z-index: 10;
  }

  div img {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    margin-bottom: -20px;
    z-index: 10;
    margin-right: 10px;
  }
`;

interface btnProps {
  color?: string;
}

export const ContainerBtn = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  &.bottom {
    margin-top: 30px;

    button {
      margin: 15px;
    }
  }
`;

export const BtnComum = styled.button`
  width: 140px;
  height: 46px;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  background-color: ${(props: btnProps) =>
    props.color ? props.color : "#2a8dd2"};
  border: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const BtnProfissional = styled.button`
  width: 140px;
  height: 46px;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  background-color: ${(props: btnProps) =>
    props.color ? props.color : "#2a8dd2"};
  border: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Form = styled.form`
  width: 90%;
  height: 390px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: auto;

  div {
    margin-bottom: 20px;
    height: 50px;
  }

  div div {
    margin-bottom: -0px;
    margin-left: 60px;
  }
`;
