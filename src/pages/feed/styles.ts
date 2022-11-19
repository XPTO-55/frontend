import { PrismicNextImage } from '@prismicio/next'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`

export const Main = styled.main`
  padding: 1rem 2rem;
  width: 80vw;
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
export const Div2 = styled.div`
  position: relative;
  background-color: #f3f4f6;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  flex: 1;
`
export const listItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* 32px */
  }
`

export const Paragrafo = styled.p`
  font-family: serif;
  font-style: italic;
  letter-spacing: -0.05em;
  color: rgb(100 116 139);
`
// md:text-lg DUVIDA
// className="font-serif leading-relaxed md:text-lg md:leading-relaxed"
export const Paragrafo2 = styled.p`
  font-family: serif;
  line-height: 1.65;
  @media (min-width: 640px) {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 2 */
  }
`
export const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem; /* 12px */
  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProfileImageContainer = styled.div`
  width: 96px;
  height: 96px;
  object-fit: cover;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Username = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
`

export const Especiality = styled.p`
  font-size: 0.625rem;
  font-weight: 600;
  color: #A7A7A7;
`

export const Image = styled(PrismicNextImage)`
  object-fit: cover;
`
