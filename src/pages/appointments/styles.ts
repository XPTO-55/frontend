import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 24px;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
  }
`

export const ContainerAppointments = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  overflow: hidden;
`

export const HeaderAppointments = styled.div`
  width: 100%;
  height: 13%;
  background-color: #2a8dd2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  p {
    font-size: 20px;
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ContainerContent = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a8dd2;
    border-radius: 10px;
  }
`

export const Title = styled.p`
  cursor: pointer;
  border-bottom: 1px solid grey;
  color: grey;
  transition: all 0.3s;
  margin-bottom: 10px;

  :hover {
    border-bottom: 1px solid #2a8dd2;
    color: #2a8dd2;
  }
`

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ContainerModal = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 7px;
  background-color: #f3f4f5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 5px solid #2a8dd2;

  span {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 180px;
  }

  label {
    margin-bottom: 20px;
    color: #797d82;
  }

  button {
    margin-top: 20px;
  }

  h3 {
    text-align: center;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 60%;
    margin-top: 50px;
  }

  h4 {
    font-size: 70px;
    color: #2a8dd2;
  }
`
