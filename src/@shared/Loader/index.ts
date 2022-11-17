import styled from 'styled-components'

interface LoaderProps {
  width?: number
}

export const Loader = styled.div<LoaderProps>`
  display: inline-block;
  width: max-content;
  height: max-content;

  &:after {
    content: " ";
    display: block;
    width: ${({ width = 40 }) => width}px;
    height: ${({ width = 40 }) => width}px;
    border-radius: 50%;
    border: calc(${({ width = 40 }) => width}px / 4) solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
