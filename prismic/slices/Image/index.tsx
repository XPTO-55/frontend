import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { Bounded } from '../../../src/components/blog/Bounded'
import * as S from './styles'
import { ImageSliceDefault, ImageSliceWide } from '../../../src/@types/prismic'

interface ImageProps {
  slice: ImageSliceDefault | ImageSliceWide
}

const Image = ({ slice }: ImageProps) => {
  const image = slice?.primary?.image
  return (
    <Bounded asChild size={slice.variation === 'wide' ? 'widest' : 'base'}>
      <section>
        <S.ArticleImage>
          {prismicH.isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage field={image} layout="responsive" />
            </div>
          )}
          {prismicH.isFilled.richText(slice.primary.caption) && (
            <S.ArticleImageCaption >
              <PrismicRichText field={slice.primary.caption} />
            </S.ArticleImageCaption>
          )}
        </S.ArticleImage>
      </section>
    </Bounded>
  )
}

export default Image
