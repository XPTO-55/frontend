import Link from 'next/link'
import styled from 'styled-components'

export const LinkStyled = styled(Link)`
  font-weight: 600;
  letter-spacing: -0.025em;
  text-decoration: inherit;
`

export const ArticleTitle = styled.h1`
  margin-bottom: 12px;
  font-weight: 600;
  letter-spacing: -0.05em;
  color: #1e293b;
  font-size: 1.875rem;
  line-height: 2.25rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const Paragrafo = styled.p`
  letter-spacing: 0.05em;
  font-size: 1rem;
  color: rgb(100 116 139);
`

export const ListaNaoOrdenada = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem; /* 48px */
`

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  gap: 4rem; /* 64px */
  @media (min-width: 640px) {
    gap: 6rem; /* 96px */
  }
`

export const DivConteinerImg = styled.div`
  width: 100%;
`

export const Backlink = styled.span`
  & > * {
    color: #94a3b8;
  }
`
