import { GetStaticPaths, GetStaticProps } from 'next'
import { AiFillStar } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { LoaderAllPage } from '../../../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import { getProfessionalId } from '../../../../services/professional.service'
import { IProfessional } from '../../../../services/types'
import * as S from './styles'

export default function About({ idProfessional }) {
  console.log(idProfessional)

  const { data: professional, isLoading } = useQuery<IProfessional>(
    ['professionals', idProfessional],
    getProfessionalId
  )

  if (isLoading) {
    return <LoaderAllPage />
  }

  const contador = []

  for (let index = 1; index < professional.ratings; index++) {
    contador.push(index)
  }

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
              <h1>{professional?.name}</h1>
              <h2>{professional?.especialidade}</h2>
              <h3>Graduação: {professional.graduacao}</h3>

              <h4>
                {contador.map((index) => {
                  return <AiFillStar key={index} />
                })}
              </h4>
              <h5>Sobre</h5>
            </span>
          </S.ContentUp>
          <S.ContentDown>
            <div />
            <p>{professional.about}</p>
          </S.ContentDown>
          <S.Footer>
            <div>
              <BsLinkedin />

              <BsInstagram />
              <span>
                <h1>Email: {professional.email}</h1>
                <h1>Celular: {professional.telefoneCelular}</h1>
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
