import styled from "styled-components";

export const ArticleImage = styled.figure`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 4rem;
`
export const ArticleImageCaption = styled.figcaption`
  text-align: center;
  font-style: italic;
  line-height: -.025em;
  color: #64748b;
`

