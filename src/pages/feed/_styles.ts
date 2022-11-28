import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 88vh;
`

export const Main = styled.main`
  padding: 1rem 2rem;
  width: 80vw;
  height: 85vh;
  overflow-y: scroll;
`

export const ListaNaoOrdenada = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #F0F0F0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem;
  gap: 4rem; /* 64px */
  border-radius: 7px;
  padding: 1rem 2rem;
`
