import styled from 'styled-components'

export const Header = styled.div`
width: 100%;
height: 65vh;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/assets/img/fundoblog.webp");
    background-repeat: no-repeat, repeat-x;
  background-position: top right, center;
  background-size: cover;
  color: white;

display: flex;
align-items: center;
justify-content: center;

  

`

export const ContainerHeader = styled.div`
width: 1200px;
height: 100%;
box-sizing: border-box;
padding-top: 8%;



h1{
    font-size: 32px;
    width: 300px;
    margin-bottom: 20px;
  }

  h2{
    width: 500px;
    font-size: 18px;
    font-weight: lighter;
    margin-bottom: 20px;

  }
`
