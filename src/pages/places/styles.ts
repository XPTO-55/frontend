import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    font-size: 23px;
    width: 100%;
    max-width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

export const MapsContainer = styled.div`
  width: 100%;
  height: 450px;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  span {
    margin-top: 70px;
    margin-left: 10px;
    position: absolute;
    z-index: 1;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  padding-right: 20px;
  box-sizing: border-box;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a8dd2;
    border-radius: 10px;
  }
`

export const NoPlace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  justify-content: flex-start;

  div {
    width: 330px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: white;
  }
`

export const SearchBar = styled.div`
  position: absolute;
  z-index: 2;
  margin: 80px 0px 0px 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
