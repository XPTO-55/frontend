import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

import { Bounded } from '../../src/components/blog/Bounded'
import styled from 'styled-components'
import { TextSliceDefault } from '../../src/@types/prismic'

interface TextProps {
  slice: TextSliceDefault
}

const Text = ({ slice }: TextProps) => {
  return (
    <Bounded asChild>
      <section>
        {prismicH.isFilled.richText(slice.primary.text) && (
          <ContainerTextStyled>
            <PrismicRichText field={slice.primary.text} />
          </ContainerTextStyled>
        )}
      </section>

    </Bounded>
  )
}

const ContainerTextStyled = styled.div`
  line-height: 1.625; 

  strong {
    font-weight: 700;
  }

  @media (min-width: 768px) { 
    font-size: 1.25rem;
    line-height: 1.75rem; 
    line-height: 1.625; 
  }
`

export default Text
