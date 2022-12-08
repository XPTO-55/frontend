import React, { Dispatch, SetStateAction, useState } from 'react'
import { ProfileBar } from '../../../components/Layout/ProfileBar'
import { ProfessionalCard } from '../../../components/Professional-list/ProfessionalCard'
import * as S from './_styles'
import { Input } from '../../../@shared/Input'
import { BiSearch } from 'react-icons/bi'
import { getProfessionals } from '../../../services/professional.service'
import { useQuery } from 'react-query'
import { IProfessional } from '../../../services/types'
import { LoaderAllPage } from '../../../components/Layout/LoaderAllPage'
import Head from 'next/head'

interface ProfessionalProps {
  setSelectProfessional: Dispatch<SetStateAction<IProfessional>>
}

export default function ProfessionalList({
  setSelectProfessional
}: ProfessionalProps) {
  const { data: professionals = [], isLoading } = useQuery<IProfessional[]>(
    ['professionals'],
    getProfessionals
  )

  const [search, setSearch] = useState('')

  const filteredProfessionalList =
    search.length > 0
      ? professionals.length > 0
        ? professionals.filter((professionals) =>
          professionals.name.includes(search)
        )
        : professionals
      : professionals

  if (isLoading) {
    return <LoaderAllPage />
  }

  return (
    <>
      <ProfileBar />
      <Head>
        <title> Profissionais | CPA </title>
      </Head>
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
            {professionals.length > 0
              ? (
                filteredProfessionalList.map((professional) => {
                  return (
                    <ProfessionalCard
                      key={professional.id}
                      id={professional.id}
                      name={professional.name}
                      graduacao={professional.graduacao}
                      especialidade={professional.especialidade}
                      ratings={professional.ratings}
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
