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
import Link from 'next/link'
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api'
import Head from 'next/head'
interface PlaceProps {
  setSelectPlace: Dispatch<SetStateAction<IPlaces>>
}

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

  // function handleClickPlace(place: IPlaces) {
  //   setSelectPlace(place)
  // }

  if (isLoading) {
    return <LoaderAllPage />
  }

  const onPlacesChanged = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const places = searchBox?.getPlaces()

    if (places?.length) {
      const place = places[0]

      const location = {
        lat: place?.geometry?.location?.lat() ?? 1,
        lng: place?.geometry?.location?.lng() ?? 1
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
      <Head>
        <title> Lugares | CPA </title>
      </Head>
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
              zoom={15.5}
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
                      <a target={'_blank'} href={`https://www.google.com/maps/?q=${position.lat ?? 0},${position.lng ?? 0}`} rel="noreferrer">
                        <Marker position={position} />
                      </a>

                      {places.length
                        ? places.map((place, index) => {
                          return (
                            <a target={'_blank'} key={index} href={`https://www.google.com/maps/?q=${place.address.latitude ?? 0},${place.address.longitude ?? 0}`} rel="noreferrer">
                              <Marker
                                key={index}
                                position={{
                                  lat: place.address.latitude ?? 0,
                                  lng: place.address.latitude ?? 0
                                }}
                                icon="/assets/img/pointer.png"
                              />
                            </a>
                          )
                        })
                        : null}
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
                  // eslint-disable-next-line react/jsx-key
                  <Link href="https://www.google.com.br/maps">
                    <CardPlace key={place.idLugar} place={place} />
                  </Link>
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
