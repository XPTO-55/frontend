import styled from 'styled-components'

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  width: 310px;
  height: 310px;
  font-size: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #2a8dd2;
  border-radius: 100%;
  color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("/assets/img/fundoProfissionais.jpg");
  background-repeat: no-repeat, repeat-x;
  background-position: top right;
  background-size: cover;
  background-blend-mode: darken;
  transition: all 0.3s;

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/assets/img/fundoProfissionais.jpg");
    color: white;
  }
`
