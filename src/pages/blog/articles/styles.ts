import { PrismicLink } from '@prismicio/react';
import styled from 'styled-components';
// className="font-semibold tracking-tight text-slate-400"
export const PrismicLinkStyled = styled(PrismicLink)`
font-weight: 600;
letter-spacing:-.025em;
color: #94a3b8;
`

export const ArticleTitle = styled.h1`
margin-bottom:12px;
font-weight: 600;
letter-spacing:-.05em;
color:#1e293b;
font-size: 1.875rem; 
line-height: 2.25rem;
@media(min-width: 640px){
    font-size: 2.25rem;
    line-height: 2.5rem; 
}
`
// p className="font-serif italic tracking-tighter text-slate-500"
export const Paragrafo = styled.p`
font-family: serif;
font-style:italic;
letter-spacing:-0.05em;
color: rgb(100 116 139);
`

// ul className="grid grid-cols-1 gap-12"
export const ListaNaoOrdenada = styled.ul`
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
gap: 3rem; /* 48px */
`

// className="grid grid-cols-1 justify-items-center gap-16 md:gap-24"
export const Conteiner = styled.div`
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
justify-items: center;
gap: 4rem; /* 64px */
@media(min-width: 640px) {
    gap: 6rem; /* 96px */
}
`
// className="w-full"
export const DivConteinerImg = styled.div`
width: 100%;
`

// " margim bottom  =mb-3*4 
// text-3xl  md:text-4xl">