import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 540px;
  height: 220px;
  border-radius: 7px;
  background-color: #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  margin-bottom: 50px;
  display: flex;
  border-bottom: 20px solid #2a8dd2;
`

export const ContainerCardLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  box-sizing: border-box;

  img {
    width: 250px;
    border-radius: 7px;
  }
`
export const ContainerCardRight = styled.div`
  width: 50%;
  height: 100%;

  padding-left: 40px;
  box-sizing: border-box;
  padding-top: 50px;
  gap: 40px;

  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;

  }

  h2 {
    font-weight: 500;
    margin-bottom: 10px;
  }
`
