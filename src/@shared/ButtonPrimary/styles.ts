import styled from 'styled-components'

interface ButtonProps {
  width?: string
}

export const Button = styled.button`
  width: ${(props: ButtonProps) => (props.width ? props.width : '254px')};
  height: 50px;
  background-color: rgba(7, 7, 7, 0);
  border: 1px solid #2a8dd2;
  color: #2a8dd2;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #2a8dd2;
    color: white;
  }

  &.laranja {
    background-color: #ffa025;
    border: 1px solid #ffa025;
    color: white;
  }

  &.laranja:hover {
    background-color: #ef8700;
  }

  &.azul {
    background-color: #2a8dd2;
    color: white;
  }

  &.azul:hover {
    background-color: #17649a;
  }
`
