import React from 'react'
import styled from 'styled-components'

export const HorizontalDivider = () => {
  return <HorizontalDividerStyled />
}

export const HorizontalDividerStyled = styled.hr`
  width: 100%;
  border: 0;
  height: .25px;
  background-color: #212121;

  @media (min-width: 640px) {
    max-width: 24rem; /* 384px */
  }
`
