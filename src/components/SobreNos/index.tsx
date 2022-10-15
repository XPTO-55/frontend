import imgSobre from "../../../public/assets/img/autis.png";
import * as S from "./styles";
import Image from "next/image";
import { ButtonPrimary } from "../ButtonPrimary";

export function SobreNos() {
  return (
    <>
    <S.PageContainer>

      <S.Container>
        <S.ContainerContent className="imgSobreNos">
          <S.Img src="/assets/img/autis.png"/>
        </S.ContainerContent>

        <S.ContainerContent className="textoSobreNos">
          <h1>Sobre nós</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            blandit magna rhoncus neque. Enim, amet, risus aliquam sed lectus.{" "}
            <br />
            <br />
            Vulputate ullamcorper augue praesent integer. Nunc volutpat laoreet
            curabitur lacinia. aliquam sed lectus. Vulputate ullamcorper augue
            praesent integer. Nunc volutpat laoreet curabitur lacinia
          </h2>
          <ButtonPrimary className="laranja">Cadastre-se</ButtonPrimary>
        </S.ContainerContent>
      </S.Container>
    </S.PageContainer>
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A8DD2" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></S.Svg>
</>
  );
}
