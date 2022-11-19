import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { CardPlace } from "../../components/CardPlace";
import { Header } from "../../components/Layout/Header";
import { Input } from "../../components/Layout/Input";
import { LoaderAllPage } from "../../components/Layout/LoaderAllPage";
import { getPlaces, IPlaces } from "../../services/places.service";
import {BiSearch} from 'react-icons/bi'
import * as S from "./styles";

interface PlaceProps {
  setSelectPlace: Dispatch<SetStateAction<IPlaces>>;
}

export default function Places({ setSelectPlace }: PlaceProps) {
  {
    const {
      data: places = [],
      isError,
      isLoading,
    } = useQuery<IPlaces[]>(["places"], getPlaces);

    if (isLoading) {
      return <LoaderAllPage />;
    }

    // function handleClickprofessional(place: IPlaces) {
    //   console.log("professional", place);
    //   setSelectPlace(place);
    // }

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
            {places.length > 0 ? (
              places.map((place) => {
                return <CardPlace key={place.idLugar} place={place} />;
              })
            ) : (
                <S.NoProfessional>
                <div>
                  Nenhum lugar encontrado
                </div>
              </S.NoProfessional>
            )}
          </S.CardContainer>
        </S.PageContainer>
      </>
    );
  }
}
