import { Footer } from "antd/lib/layout/layout";
import { ProfileBar } from "../../components/Layout/ProfileBar";
import { ProfessionalCard } from "../../components/Professional-list/ProfessionalCard";
import * as S from "./styles";
import { Input } from "../../components/Layout/Input";
import { BiSearch } from "react-icons/bi";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  getProfessionals,
  IProfessional,
} from "../../services/professional.service";
import { useQuery } from "react-query";
import { LoaderAllPage } from "../../components/Layout/LoaderAllPage";
import { Loader } from "../../components/Layout/Loader";

interface ProfessionalProps {
  setSelectProfessional: Dispatch<SetStateAction<IProfessional>>;
}

export default function ProfessionalList({
  setSelectProfessional,
}: ProfessionalProps) {
  const {
    data: professionals,
    isError,
    isLoading,
  } = useQuery<IProfessional[]>(["professionals"], getProfessionals);

  const [search, setSearch] = useState("");

  const filteredProfessionalList =
    search.length > 0
      ? professionals.filter((professionals) =>
          professionals.name.includes(search)
        )
      : professionals;

  if (isLoading) {
    return <LoaderAllPage />;
  }

  function handleClickprofessional(professional: IProfessional) {
    console.log("professional", professional);
    setSelectProfessional(professional);
  }

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
            {professionals.length > 0 ? (
              filteredProfessionalList.map((res) => {
                return (
                  <ProfessionalCard
                    key={res.id}
                    id={res.id}
                    name={res.name}
                    identificacao={res.role}
                    telefoneCelular={res.telefoneCelular}
                  />
                );
              })
            ) : (
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
  );
}
