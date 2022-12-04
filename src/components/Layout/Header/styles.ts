import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;


  @media (max-width: 1000px){
    display: none;
  }
`

export const Li = styled.li`
  &:hover {
    color: #2a8dd2;
    cursor: pointer;
    transition: all 0.3s;
  }
`

export const Button = styled.button`
  width: 120px;
  height: 46px;
  background: #2a8dd2;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #1f6392;
  }

  @media (max-width: 1000px){
    display: none;
  }
`

export const Icon = styled.div`

font-size: 50px;
cursor: pointer;
transition: all 0.3s;

:hover{
  color: #1f6392;
}

@media (min-width: 1000px){
    display: none;
  }

`

interface MenuProps {
  tamanho: string
}

export const SecondMenu = styled.div<MenuProps>`
width: ${(props) => props.tamanho};
height: 110vh;
position: fixed;
background-color: #2A8DD2;
z-index: 10;
top: 0;
transition: all 0.3s;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5px;
color: white;
font-size: 24px;
overflow: hidden;
box-sizing: border-box;
padding-bottom: 100px;
p{
  cursor: pointer;
  transition: all 0.3s;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
}

p:hover{
  background-color: #0A6CB2;
}

span{
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border-radius: 10px;

}



span:hover{
  background-color: #0A6CB2;

}

div{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 500;
}

div img{
  width: 75px;
  border-radius: 10px;
}
`
