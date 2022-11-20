import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;

`

export const ContentArea = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
`

export const LeftArea = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

button{
  margin-top: 20px;
}

&.baixo{
  height: 210px;
  justify-content: flex-end;
}

`

export const RightArea = styled.div`
width: 70%;
height: 100%;
font-size: 26px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;




textArea{
  width: 880px;
  height: 190px;
  font-size: 19px;
  margin-top: 20px;
  border: none;
  resize: none;
  padding-left: 20px;
  padding-top: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
`

export const ContainerInput = styled.div`
width: 100%;
height: 220px;
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: column;
overflow: auto;
overflow-x: hidden;

::-webkit-scrollbar {
  width: 9px;          
}

::-webkit-scrollbar-thumb {
  background-color: #2A8DD2;   
  border-radius: 10px;      
}

span{
  width: 100%;
  padding: 20px;
  margin-left: -20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: -20px;
  

  input{
    margin-right: 70px;
  }
}


`
