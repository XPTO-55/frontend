import { Footer } from "antd/lib/layout/layout";
import { ProfileBar } from "../../components/Layout/ProfileBar";
import { ProfissionalCard } from "../../components/ProfissionalList/ProfissionalCard";
import * as S from "./styles"

export default function Profissionais() {
    return (
        <>
            <ProfileBar />
            <div>

                <S.PageContainer>
                    <S.Container>
                        <ProfissionalCard image="https://github.com/cristianoliveira15.png" />
                        <ProfissionalCard />
                        <ProfissionalCard />
                        <ProfissionalCard />
                        <ProfissionalCard />
                        <ProfissionalCard />

                    </S.Container>
                </S.PageContainer>
            </div>


        </>
    )
}