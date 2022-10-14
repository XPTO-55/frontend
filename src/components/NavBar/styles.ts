import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
width: 100%;
  max-width: 1200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

export const Li = styled.li`
  margin-left: 100px;

  &:hover {
    color: #2a8dd2;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  background: #2a8dd2;
  color: white;
  border: none;
  border-radius: 7px;
  margin-left: 60px;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #1f6392;
  }
`;
