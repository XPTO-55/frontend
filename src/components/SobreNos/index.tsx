import imgSobre from "../../../public/assets/img/autis.png";
import * as S from "./styles";
import Image from "next/image";
import { ButtonPrimary } from "../ButtonPrimary";

export function SobreNos() {
  return (
    <S.PageContainer>

      <S.Container>
        <S.ContainerContent className="imgSobreNos">
          <Image src={imgSobre} width={500} />
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
  );
}
