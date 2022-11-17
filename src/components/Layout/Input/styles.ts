import styled from "styled-components";

export const Input = styled.input`
  width: 250px;
  height: 45px;
  border: none;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 17px;
  padding-left: 10px;
  background-color: #F9F9F9;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &.cadastro{
    width: 330px;
  }

  &.editProfile{
    width: 350px;
  }

`;

export const Icon = styled.div`
  width: 55px;
  height: 50px;
  background-color: #2a8dd2;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  color: white;
  width: 30px;
  height: 30px;
`;
