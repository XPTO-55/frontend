import { PrismicNextImage } from '@prismicio/next'
import styled from 'styled-components'

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

export const Div2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`
