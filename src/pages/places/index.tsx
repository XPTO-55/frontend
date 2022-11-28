/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useQuery } from 'react-query'
import { CardPlace } from '../../components/CardPlace'
import { Header } from '../../components/Layout/Header'
import { Input } from '../../@shared/Input'
import { LoaderAllPage } from '../../components/Layout/LoaderAllPage'
import { getPlaces, IPlaces } from '../../services/places.service'
import { BiSearch } from 'react-icons/bi'
import * as S from './_styles'
import 'leaflet/dist/leaflet.css'
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api'
import Link from 'next/link'
interface PlaceProps {
  setSelectPlace: Dispatch<SetStateAction<IPlaces>>
}

const mockListLocals = [
  {
    lat: -23.51115894898398,
    lng: -46.41538542894575
  },

  {
    lat: -23.510778318129447,
    lng: -46.41410726098539
  },
  {
    lat: -23.511132492206777,
    lng: -46.416371045190814
  },
  {
    lat: -23.509784657994743,
    lng: -46.414922652452745
  },
  {
    lat: -23.513532980292293,
    lng: -46.41345280204449
  },
  {
    lat: -23.554289602789368,
    lng: -46.65756426053054
  },
  {
    lat: -23.553207756153906,
    lng: -46.65380916824667
  },
  {
    lat: -23.553925709914953,
    lng: -46.658787347731575
  },
  {
    lat: -23.552086560244557,
    lng: -46.655836918079956
  },
  {
    lat: -23.554883574882936,
    lng: -46.65495580586125
  },
  {
    lat: -23.556800184527454,
    lng: -46.6570750894563
  },
  {
    lat: -23.55537902767396,
    lng: -46.65211112989475
  },
  {
    lat: -23.551298005598007,
    lng: -46.655112263039406
  },
  {
    lat: -23.55559315241306,
    lng: -46.65497335584123
  },
  {
    lat: -23.552115054243625,
    lng: -46.663337871501966
  },
  {
    lat: -23.552747442574866,
    lng: -46.651897743553604
  },
  {
    lat: -23.550534070104767,
    lng: -46.65925621781184
  },
  {
    lat: -23.556963287026203,
    lng: -46.661900669498394
  },
  {
    lat: -23.553722368624552,
    lng: -46.645976471298916
  },
  {
    lat: -23.555250616527825,
    lng: -46.648735899145755
  },
  {
    lat: -23.54950642021789,
    lng: -46.64942575610747
  },
  {
    lat: -23.551825208574986,
    lng: -46.650661749830526
  }
]

export default function Places({ setSelectPlace }: PlaceProps) {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [position, setPosition] = useState({
    lat: -23.51115894898398,
    lng: -46.41538542894575
  })

  const { data: places = [], isLoading } = useQuery<IPlaces[]>(
    ['places'],
    getPlaces
  )

  const [searchBox, setSearchBox] =
    React.useState<google.maps.places.SearchBox>()
  const [map, setMap] = React.useState<google.maps.Map>()

  function handleClickPlace(place: IPlaces) {
    setSelectPlace(place)
  }

  if (isLoading) {
    return <LoaderAllPage />
  }

  const onPlacesChanged = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const places = searchBox?.getPlaces()
    console.log(places)

    if (places?.length) {
      const place = places[0]

      const location = {
        lat: place?.geometry?.location?.lat() || 1,
        lng: place?.geometry?.location?.lng() || 1
      }

      map?.panTo(location)

      setPosition(location)

      setLoaded(true)
    }
  }

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map)
  }

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  return (
    <>
      <Header />
      <S.PageContainer>
        <S.MapsContainer>
          <LoadScript
            googleMapsApiKey="AIzaSyCms5xrwnXKB-6oygcvu7gRBxo_oF4HBl0"
            libraries={['places']}
          >
            <GoogleMap
              onLoad={onMapLoad}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={position}
              zoom={16.5}
            >
              <S.SearchBar>
                <StandaloneSearchBox
                  onLoad={onLoad}
                  onPlacesChanged={onPlacesChanged}
                >
                  <Input placeholder="Pesquise aqui...">
                    <BiSearch />
                  </Input>
                </StandaloneSearchBox>

                {loaded
                  ? (
                    <>
                      <Marker position={position} />
                      {mockListLocals.map((posicao, index) => {
                        return (
                          <Marker
                            key={index}
                            position={posicao}
                            icon="/assets/img/pointer.png"
                          />
                        )
                      })}
                    </>
                  )
                  : (
                    <></>
                  )}
              </S.SearchBar>
            </GoogleMap>
          </LoadScript>
        </S.MapsContainer>
        <h1>Lugares acessíveis</h1>
        <S.CardContainer>
          {places.length > 0
            ? (
              places.map((place) => {
                return (
                  <CardPlace
                    onClick={() => handleClickPlace(place)}
                    key={place.idLugar}
                    place={place}
                  />
                )
              })
            )
            : (
              <S.NoPlace>
                <div>Nenhum lugar encontrado</div>
              </S.NoPlace>
            )}
        </S.CardContainer>
      </S.PageContainer>
    </>
  )
}
