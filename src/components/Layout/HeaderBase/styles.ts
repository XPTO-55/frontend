import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: #2A8DD2;
  color: #fff;
`

export const Content = styled.div`
  display: flex; 
  align-items: center;
  gap: .5rem;

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 29.26px
  }
 
`

export const LogoContainer = styled.div`
  height: 48px;
  width: 48;
  border-radius: .5rem;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem;
`
