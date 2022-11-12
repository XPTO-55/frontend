import styled from "styled-components";

// className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8"
export const listItemStyled = styled.li`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: flex-start;
  gap: 1.5rem;
  @media (min-width: 640px) {
    gap: 2rem; /* 32px */
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

// p className="font-serif italic tracking-tighter text-slate-500"
export const Paragrafo = styled.p`
  font-family: serif;
  font-style: italic;
  letter-spacing: -0.05em;
  color: rgb(100 116 139);
`;
// md:text-lg DUVIDA
// className="font-serif leading-relaxed md:text-lg md:leading-relaxed"
export const Paragrafo2 = styled.p`
  font-family: serif;
  line-height: 1.65;
  @media (min-width: 640px) {
    line-height: 1.65;
  }
`;
// className="grid grid-cols-1 gap-3 md:col-span-2"
export const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem; /* 12px */
  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
  }
`;

// className="grid grid-cols-1 gap-16"
export const ListaNaoOrdenada = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 4rem; /* 64px */
`;
// aspect-w-4 aspect-h-3 DUVIDA
// className="aspect-w-4 aspect-h-3 relative bg-gray-100"
export const Div2 = styled.div`
  position: relative;
  background-color: #f3f4f6;
`;
