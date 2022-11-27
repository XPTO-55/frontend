import { PrismicLink } from '@prismicio/react'
import styled from 'styled-components'

export const PrismicLinkStyled = styled(PrismicLink)`
  font-weight: 600;
  letter-spacing: -0.025em;
  text-decoration: inherit;
  color: #212121;
`

export const listItemStyled = styled.li`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: flex-start;
  gap: 1.5rem;
  @media (min-width: 640px) {
    gap: 2rem; /* 32px */
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

export const ListaNaoOrdenada = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 4rem; /* 64px */
`
export const Div2 = styled.div`
  position: relative;
  background-color: #f3f4f6;
  aspect-ratio: 4 / 3;
`
