import styled from 'styled-components'

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
export const Container = styled.div`
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
