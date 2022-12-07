import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 80px;
margin-top: 20px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.03);
display: flex;
align-items: center;
justify-content: space-around;
transition: all 0.3s;
cursor: pointer;

:hover{
background-color: #FFB24D;
color: white;
  
}

p{
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 200px;
}

`
