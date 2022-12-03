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
