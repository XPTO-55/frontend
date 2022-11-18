import React from 'react'
import * as S from './styles'
import { Header } from '../../components/Layout/Header'
import SimpleAccordion from '../../components/SimpleAccordion'

export default function Faq () {
  return (
    <>
      <Header />
      <S.PageContainer>
        <S.Container>

          <SimpleAccordion />
        </S.Container>
        <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A8DD2"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,250.7C672,245,768,203,864,197.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </S.Svg>
      </S.PageContainer>
    </>
  )
}
