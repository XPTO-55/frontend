import styled from 'styled-components'

export const ContainerLoading = styled.div`
  width: 100px;
  height: 100px;

  &loaderAllPage {
    width: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  div:before,
  div:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  div:before {
    animation: ball1 1s infinite;
    background-color: #f9bc35;
    box-shadow: 30px 0 0 red;
    margin-bottom: 10px;
  }
  div:after {
    animation: ball2 1s infinite;
    background-color: #159ce4;
    box-shadow: 30px 0 0 red;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(0.8);
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(1.2);
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.8);
      -moz-transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #08469c;
    }
    50% {
      box-shadow: 0 0 0 #08469c;
      margin-bottom: 0;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #08469c;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #fd4e26;
    }
    50% {
      box-shadow: 0 0 0 #fd4e26;
      margin-top: -20px;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #fd4e26;
      margin-top: 0;
    }
  }
`
