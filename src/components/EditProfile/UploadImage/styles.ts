import styled from 'styled-components'

export const Input = styled.input`
  display: none;
`
export const Label = styled.label`
  width: 200px;
  height: 200px;
  font-size: 36px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #2a8dd2;
  border-radius: 100%;
  color: rgba(0, 0, 0, 0);
  transition: all 0.3s; 
  overflow: hidden;
  z-index: 1;

  &:hover {
    z-index: 1;
     img {
      z-index: 0;
      opacity: 0.3;
     }
     svg {
      position: absolute;
      z-index: 20;
      color: #000;
      font-weight: 700;
      size: 1.5rem;
     }
  }

  img {
    padding: 0.25rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
    background-color: #f6f6f6;
    user-select: none;

    &:hover {
      z-index: 1;
    }
  }
`
