import { GetStaticPaths, GetStaticProps } from 'next'
import { AiFillStar } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { LoaderAllPage } from '../../../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import {
  getProfessionalId
} from '../../../../services/professional.service'
import { IProfessional } from '../../../../services/types'
import * as S from './styles'

export default function About({ idProfessional }) {
  console.log(idProfessional)

  const {
    data: professional,
    isLoading
  } = useQuery<IProfessional>(
    ['professionals', idProfessional],
    getProfessionalId
  )

  // if (isLoading) {
  //   return <LoaderAllPage />
  // }
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
              <h1>{professional.name}</h1>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      idProfessional: params.id
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
