import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 1028px;
  height: 578px;
  border-radius: 7px;
  background-color: #f3f4f5;
  background-image: url("/assets/img/fundoLogin.png");
  background-repeat: no-repeat, repeat-x;
  background-position: top right, center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const BoxContent = styled.div`
width: 60%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;

p{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1{
  color: grey;
  font-size: 18px;
  margin-bottom: -20px;
}

img{
  width: 130px;
  margin-bottom: 30px;
}

form{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 110px;
}


h3{
  font-size: 25px;
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

h4{
  color: #2A8DD2;
}
`
