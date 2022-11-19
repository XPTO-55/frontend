import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 7px;
  padding: 1rem 1rem;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 100%;
  background-color: #EAEAEA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const ContainerProfileImage = styled.div`
height: 48px;
width: 48px;
object-fit: cover;
overflow: hidden;
border-radius: 50%;
border: 2px solid #2A8DD2;
background-color: #f6f6f6;

img {
  width: 100%;
  height: 100%;
}
`

export const Username = styled.h6`
  font-size: 1rem;
  letter-spacing: 5%;
  font-weight: 600;
  line-height: 1rem;
`

export const Comment = styled.p`
  font-size: 1rem;
  letter-spacing: 5%;
  font-weight: 400;
  line-height: 1rem;
`
