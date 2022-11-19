import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  z-index: 10;
`

export const Container = styled.div`
  width: 100%;
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
`
