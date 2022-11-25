import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { ButtonPrimary } from '../../../../@shared/ButtonPrimary'
import { LoaderAllPage } from '../../../../components/Layout/LoaderAllPage'
import { ProfileBar } from '../../../../components/Layout/ProfileBar'
import { getProfessional } from '../../../../services/professional.service'
import { IProfessional } from '../../../../services/types'
import * as S from './styles'

export default function About() {
  const router = useRouter()
  const idProfissional = typeof router.query?.id === 'string' ? router.query.id : ''
  const { data: professional, isLoading } = useQuery<IProfessional>(
    ['professionals', idProfissional],
    async () => await getProfessional(idProfissional)
  )
  if (isLoading || router.isFallback) {
    return <LoaderAllPage />
  }

  const rating = professional ? professional.ratings.reduce((media, rating) => media + rating.rating, 0) / professional.ratings.length : 0

  return (
    <>
      <ProfileBar />
      <Head>
        <title> Sobre | CPA </title>
      </Head>
      <S.PageContainer>
        <S.Container>
          <S.ContentUp>
            <S.BoxImg>
              <img
                src={`http://s3.amazonaws.com/cpausers/${professional?.profileUrl ? professional?.profileUrl : 'user.png'}`}
                alt="user profile image"
              />
            </S.BoxImg>
            <div>
              <h1>{professional?.name}</h1>
              <h2>{professional?.especialidade}</h2>
              <h3>Graduação: {professional.graduacao}</h3>

              <h4>
                {new Array(Math.floor(rating)).fill(null).map((index) => {
                  return <AiFillStar key={index} />
                })}
              </h4>
            </div>
          </S.ContentUp>
          <S.ContentDown>
            <p>Sobre {'\n'}</p>
            <div>
              <p> {professional.about}</p>
            </div>
          </S.ContentDown>
          <S.Footer>
            <div>
              <BsLinkedin />

              <BsInstagram />
              <span>
                <h1>Email: {professional.email}</h1>
                <h1>Celular: {professional.phone}</h1>
              </span>
            </div>

            <ButtonPrimary className="laranja">
              {professional?.phone
                ? (
                  <a target="_blank" href={`https://api.whatsapp.com/send?phone=${professional?.phone}`} rel="noreferrer">
                    Agendar consulta
                  </a>
                )
                : <a target="_blank" href={`mailto:${professional?.email}`} rel="noreferrer">
                  Agendar consulta
                </a>
              }

            </ButtonPrimary>
          </S.Footer>
        </S.Container>
      </S.PageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery(['getProfessional', id],
  //   async () => await getProfessional(id)
  // )

  // return {
  //   props: {
  //     idProfessional: dehydrate(queryClient)
  //   }
  // }
  return {
    props: {
      idProfessional: id
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
