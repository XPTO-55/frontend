import { Conteiner } from "./../../../pages/blog/articles/styles";
import styled from "styled-components";
export const ContainerCard = styled.div`
  width: 373px;
  height: 538px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
  border-radius: 7px;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 20px;
`;



export const ContainerInside = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid black; */
  /* background-color: red; */
  &.edit {
    height: 45%;
    /* background-color: blue; */
  }
  p {
    font-size: 20px;
    margin-top: 25px;
    font-weight: 700;
  }
  span {
    width: 100%;
    height: 25%;
    /* background-color: red; */
    font-size: 50px;
    color: #ffb800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  div {
    width: 100%;
    height: 35%;
    /* background-color: blue; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  div p {
    font-size: 16px;
    font-weight: 100;
    margin-left: 50px;
  }
  div p b {
    font-weight: 700;
  }
  i {
    width: 100%;
    height: 45%;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface imgProps{
  img: string
}



export const Img = styled.img<imgProps>`
    width: 208px;
    height: 208px;
    border-radius: 100%;
    border: 5px solid #2a8dd2;
    margin-top: 15px;
    background-image: url(${(props => props.img)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;


`