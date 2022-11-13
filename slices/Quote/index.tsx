import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicText } from '@prismicio/react'
import { Bounded } from '../../src/components/blog/Bounded'
import styled from 'styled-components'
import { QuoteSliceDefault } from '../../src/@types/prismic'

interface QuoteProps {
  slice: QuoteSliceDefault
}

const Quote = ({ slice }: QuoteProps) => {
  return (
    <Bounded asChild size="wide">
      <section>
        {prismicH.isFilled.richText(slice.primary.quote) && (
          <QuoteContainer>
            &ldquo;
            <PrismicText field={slice.primary.quote} />
            &rdquo;
            {prismicH.isFilled.keyText(slice.primary.source) && (
              <> &mdash; {slice.primary.source}</>
            )}
          </QuoteContainer>
        )}
      </section>

    </Bounded>
  )
}

const QuoteContainer = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem; 
  font-style: italic; 
  line-height: 1.625; 
`

export default Quote
