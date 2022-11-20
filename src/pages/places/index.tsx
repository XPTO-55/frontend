import React, { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { CardPlace } from '../../components/CardPlace'
import { Header } from '../../components/Layout/Header'
import { Input } from '../../@shared/Input'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { getPlaces, IPlaces } from '../../services/places.service'
import { BiSearch } from 'react-icons/bi'
import * as S from './styles'

interface PlaceProps {
  setSelectPlace: Dispatch<SetStateAction<IPlaces>>
}

export default function Places({ setSelectPlace }: PlaceProps) {
  const {
    data: places = [],
    isLoading
  } = useQuery<IPlaces[]>(['places'], getPlaces)

  if (isLoading) {
    return <LoaderAllPage />
  }

  function handleClickPlace(place: IPlaces) {
    setSelectPlace(place)
  }

  return (
      <>
        <Header />
        <S.PageContainer>
          <S.MapsContainer>
            <Input placeholder="Pesquise aqui..." >
          <BiSearch />
            </Input>
          </S.MapsContainer>
          <h1>Lugares acessíveis</h1>
          <S.CardContainer>
          {places.length > 0
            ? places.map((place) => {
              return <CardPlace onClick={() => handleClickPlace(place)} key={place.idLugar} place={place} />
            })
            : (
              <S.NoPlace>
                <div>
                  Nenhum lugar encontrado
                </div>
              </S.NoPlace>
              )
          }
          </S.CardContainer>
        </S.PageContainer>
      </>
  )
}
