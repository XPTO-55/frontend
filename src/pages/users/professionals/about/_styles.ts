import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const Container = styled.div`
  width: calc(100% - 8rem);
  background-color: #f6f6f6;
  border-radius: 5px;
  margin: 2rem;
  padding: 1rem 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;
`

export const ContentUp = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
 
  div {
    padding-top: 1rem;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
  }


  h4 {
    font-size: 50px;
    color: #ffb800;
    margin-left: -10px;
  }

  h5 {
    margin-top: 40px;
    margin-bottom: -30px;
    font-size: 20px;
  }
`

export const ContentDown = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 40vh;
  gap: .25rem;

  div {
    flex: 1;
    width: calc(100% - 40px);
    background-color: #f5f5f5;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 1rem;
    font-size: 20px;
    overflow: hidden;
  }
`

export const BoxImg = styled.figure`
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a8dd2;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  height: 18vh;
  justify-content: space-between;
  color: #979797;
  align-items: center;

  div {
    font-size: 45px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  div span {
    font-size: 16px;
    margin-top: 5px;
    margin-left: 10px;
  }
`
