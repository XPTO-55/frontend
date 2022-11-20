import React from 'react'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import * as S from './styles'
import { AiFillStar } from 'react-icons/ai'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function AboutUser() {
  return (
    <>
      <ProfileBar />

      <S.PageContainer>
        <S.Container>
          <S.ContentUp>
            <S.BoxImg>
              <img />
            </S.BoxImg>
            <span>
              <h1>Rafael Leão</h1>
              <h2>Psiquiatra</h2>
              <h3>Universidade de São Paulo</h3>

              <h4>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </h4>
              <h5>Sobre</h5>
            </span>
          </S.ContentUp>
          <S.ContentDown>
            <div />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ligula nisl, posuere eget dignissim nec, efficitur sit amet risus.
              Aenean laoreet laoreet sagittis. Cras pharetra ante lectus, vel
              interdum felis ultrices sed. Aliquam sed metus nec eros porta
              mattis. Cras euismod velit quis metus cursus accumsan. Nulla sit
              amet semper orci. Phasellus eu cursus risus. <br />
              <br />
              Posuere eget dignissim nec, efficitur sit amet risus. Aenean
              laoreet laoreet sagittis. Cras pharetra ante lectus, vel interdum
              felis ultrices sed. Aliquam sed metus nec eros porta mattis. Cras
              euismod velit quis metus cursus accumsan. Nulla sit amet semper
              orci. Phasellus eu cursus risus.
            </p>
          </S.ContentDown>
          <S.Footer>
            <div>
              <BsLinkedin />

              <BsInstagram />
              <span>
                <h1>Endereço: Rua Hadock Lobo, 1987 - SP</h1>
                <h1>Contato: 11 98765-0987</h1>
              </span>
            </div>

            <ButtonPrimary className="laranja">Agendar consulta</ButtonPrimary>
          </S.Footer>
        </S.Container>
      </S.PageContainer>
    </>
  )
}
