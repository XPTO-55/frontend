import React, { Dispatch, SetStateAction, useState } from 'react'
import { ProfileBar } from '../../../components/Layout/ProfileBar'
import { ProfessionalCard } from '../../../components/Professional-list/ProfessionalCard'
import * as S from './styles'
import { Input } from '../../../@shared/Input'
import { BiSearch } from 'react-icons/bi'
import {
  getProfessionals,
  IProfessional
} from '../../../services/professional.service'
import { useQuery } from 'react-query'
import { LoaderAllPage } from '../../../components/Layout/LoaderAllPage'

interface ProfessionalProps {
  setSelectProfessional: Dispatch<SetStateAction<IProfessional>>
}

export default function ProfessionalList({
  setSelectProfessional
}: ProfessionalProps) {
  const {
    data: professionals = [],
    isLoading
  } = useQuery<IProfessional[]>(['professionals'], getProfessionals)

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

  if (isLoading) {
    return (
      <LoaderAllPage />
    )
  }

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
            {professionals.length > 0
              ? (
                filteredProfessionalList.map((professional) => {
                  return (
                    <ProfessionalCard
                      key={professional.id}
                      id={professional.id}
                      name={professional.name}
                      identificacao={professional.role}
                      telefoneCelular={professional.telefoneCelular}
                    />
                  )
                })
              )
              : (
                <S.NoProfessional>
                  <div>
                    Nenhum profissional encontrado
                  </div>
                </S.NoProfessional>
              )}
          </S.Container>
        </S.PageContainer>
      </div>
    </>
  )
}
