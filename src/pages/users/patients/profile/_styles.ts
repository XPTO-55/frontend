import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

export const ContainerForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  gap: 1rem;

`

export const ContentArea = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;;
gap: 1rem;
`

export const LeftArea = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
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
gap: 1rem;
margin-top: 1rem;


textArea{
  width: 100%;
  height: 190px;
  font-size: 1rem;
  border: none;
  resize: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: .5rem;
}
`

export const ContainerInput = styled.div`
width: 100%;
height: 220px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-flow: row wrap;
gap: .5rem;
overflow-x: hidden;
padding: .25rem;
margin-bottom: 1.5rem;

::-webkit-scrollbar {
  width: 9px;          
}

::-webkit-scrollbar-thumb {
  background-color: #2A8DD2;   
  border-radius: 10px;      
}

& > div{
  width: 48%;
  min-width: 48%;
 

  & > input, select {
    width: 100%;
    height: 50px;
  }

}
`
