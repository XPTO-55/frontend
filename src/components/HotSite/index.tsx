import imgSobre from "../../../public/assets/img/autis.png";
import * as S from "./styles";
import Image from "next/image";
import { ButtonPrimary } from "../ButtonPrimary";

export function HotSite() {
  return (
    <>
    <S.PageContainer>

      <S.Container>
        <S.ContainerContent className="imgSobreNos">
          <S.Img src="/assets/img/autis.png"/>
        </S.ContainerContent>

        <S.ContainerContent className="textoHotSite">
          <h1>Como podemos te ajudar hoje?</h1>
          <h2>
            Faça aqui mesmo seus downloads e uploads sempre que precisar.{" "}
            <br />
            <br />
            Click abaixo para realizar seu Download
          </h2>
          <ButtonPrimary className="laranja">Download</ButtonPrimary>
        </S.ContainerContent>
      </S.Container>
    </S.PageContainer>
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A8DD2" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></S.Svg>
</>
  );
}
