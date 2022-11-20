import React, { Dispatch, SetStateAction, useState } from 'react'
import { ProfileBar } from '../../../components/Layout/ProfileBar'
import { ProfessionalCard } from '../../../components/Professional-list/ProfessionalCard'
import * as S from './styles'
import { Input } from '../../../@shared/Input'
import { BiSearch } from 'react-icons/bi'
import { getProfessionals } from '../../../services/professional.service'
import { useQuery } from 'react-query'
import { IProfessional } from '../../../services/types'

interface ProfessionalProps {
  setSelectProfessional: Dispatch<SetStateAction<IProfessional>>
}

const mockListProfessinals = [
  {
    nome: 'Rafael Leão',
    img: 'https://institucional-cms.medprev.app/storage/medprev-institucional-cms-prddescubra_o_que_faz_o_medico_coloproctologista_70ffac3201.jpeg'
  },
  {
    nome: 'Julia Paiva',
    img: 'https://img.freepik.com/fotos-gratis/mulher-medica-vestindo-jaleco-com-estetoscopio-isolado_1303-29791.jpg?w=2000'
  },
  {
    nome: 'Ruben Dias',
    img: 'https://img.freepik.com/fotos-premium/positivo-jovem-medico-negro-segurando-o-interior-da-clinica-de-tablet-digital_116547-17794.jpg?w=2000'
  },
  {
    nome: 'Benardo Silva',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBz_PjbwVc-imJW9QKQ-ciKJK9p9a6HFxkIw&usqp=CAU'
  },
  {
    nome: 'João Cancelo',
    img: 'https://www.medassistservicos.com.br/blog/wp-content/uploads/sites/2/2022/06/cnpj-medico.jpg'
  },
  {
    nome: 'Maria Belmonte',
    img: 'https://prescricaoeletronica.cfm.org.br/wp-content/themes/novaprescricaotemplate/assets/img/home_1.png'
  },
  {
    nome: 'Jaqueline Oliveira',
    img: 'https://media-exp1.licdn.com/dms/image/D4D03AQFQsUuDUmpQ3A/profile-displayphoto-shrink_800_800/0/1663607587698?e=1674086400&v=beta&t=OSDQXl8WGJTH8CDbJFnvL-uvzbiu0abfBqaIKFgPiyg'
  },
  {
    nome: 'Ana Bitencourt',
    img: 'https://www.todecacho.com.br/wp-content/uploads/2019/09/Mona-Nunes-m%C3%A9dica-630x473.jpg'
  },
  {
    nome: 'Lucas Alves',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsro985Ok-tFvxlM6v0miupO9Tav81clM3G2GnBNgYa954rsOwCs5YIt8Ub-QVXTfkJYw&usqp=CAU'
  },

  {
    nome: 'Sabrina Souza',
    img: 'https://img.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7807.jpg?w=2000'
  },
  {
    nome: 'Lurdes Mariah',
    img: 'https://img.freepik.com/fotos-gratis/retrato-de-medica-em-hospital_23-2148827807.jpg?w=2000'
  },
  {
    nome: 'Mariana Pacheco',
    img: 'https://telemedicinamorsch.com.br/wp-content/uploads/2018/05/carreira-medica.jpg'
  },

  {
    nome: 'Isaac Gonzaga',
    img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/3ea195/3ea19591ee98a4531980097910defee5_140_square.jpg'
  },
  {
    nome: 'Felipe Araujo',
    img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/ad9697/ad9697e5225688f2f5187c30f4f68667_140_square.jpg'
  },
  {
    nome: 'Ana Beatriz',
    img: 'http://www.bibliomed.com.br/images/ilustra_medica.jpg'
  },

  {
    nome: 'Ana Clara',
    img: 'https://diabetes.org.br/covid-19/wp-content/uploads/2020/03/imagem_m%C3%A9dica_ipad.png'
  },
  {
    nome: 'Maria das Graças',
    img: 'https://conectamedico.com.br/wp-content/uploads/sites/8/2021/02/img-2.jpg'
  },
  {
    nome: 'Gabriela Nascimento',
    img: 'https://www.conexasaude.com.br/blog/wp-content/uploads/2019/02/medico-on-line-medica-tablet.jpg'
  },

  {
    nome: 'Junior Azevedo',
    img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/236841/236841866fcd2e6886c895339c327623_140_square.jpg'
  },
  {
    nome: 'Eder Milton',
    img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/f965b5/f965b5cc3c5f46566d559de046acda9b_medium_square.jpg'
  },
  {
    nome: 'Jonas Serafim',
    img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/d60c6b/d60c6b76c7c6129c73e9588b08e05b1b_medium_square.jpg'
  }
]

export default function ProfessionalList({
  setSelectProfessional
}: ProfessionalProps) {
  const { data: professionals = [], isLoading } = useQuery<IProfessional[]>(
    ['professionals'],
    getProfessionals
  )

  console.log('professionals', professionals)

  const [search, setSearch] = useState('')

  const filteredProfessionalList =
    search.length > 0
      ? professionals.length > 0
        ? professionals.filter((professionals) =>
          professionals.name.includes(search)
        )
        : professionals
      : professionals

  // if (isLoading) {
  //   return (
  //     <LoaderAllPage />
  //   )
  // }

  // function handleClickprofessional(professional: IProfessional) {
  //   setSelectProfessional(professional)
  // }

  return (
    <>
      <ProfileBar />

      <div>
        <S.PageContainer>
          <S.Header>
            <Input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Pesquise aqui..."
            >
              <BiSearch />
            </Input>
          </S.Header>
          <S.Container>
            {mockListProfessinals.length > 0
              ? (
                mockListProfessinals.map((professional, index) => {
                  return (
                    <ProfessionalCard
                      key={index}
                      id={index}
                      name={'index'}
                      identificacao={'index'}
                      telefoneCelular={'index'}
                    />
                  )
                })
              )
              : (
                <S.NoProfessional>
                  <div>Nenhum profissional encontrado</div>
                </S.NoProfessional>
              )}
          </S.Container>
        </S.PageContainer>
      </div>
    </>
  )
}
