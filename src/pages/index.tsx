import * as S from "./styles";
import { Profissionais } from "../components/Profissionais";
import { Header } from "../components/Header";
import { SobreNos } from "../components/SobreNos";
import { Mvv } from "../components/Mvv";
import { Parceiros } from "../components/Parceiros";
import { Footer } from "../components/Footer";
export default function Home() {
  return (
    <S.PageContainer>
      <Header />
      <Mvv />
      <Profissionais />
      <SobreNos />
      <Parceiros/>
      <Footer/>
    </S.PageContainer>
  );
}
