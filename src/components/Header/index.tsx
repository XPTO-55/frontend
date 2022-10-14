import { ButtonPrimary } from "../ButtonPrimary";
import { NavBar } from "../NavBar";
import Image from "next/image";
import imgMain from '../../../public/assets/img/imagemMain.webp'
import * as S from "./styles"

export function Header() {
  return (
    <>
      <NavBar />
      <S.Main>
        <S.ContainerTextoBanner>
          <S.TextoMain>
            <h1>Comunidade de parceiros autistas</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              blandit magna rhoncus neque. Enim, amet, risus aliquam sed lectus.
              Vulputate sit amet, consectetur adipiscing elit.
            </p>
            <ButtonPrimary>Cadastra-se</ButtonPrimary>
          </S.TextoMain>
        </S.ContainerTextoBanner>

        <Image className="teste" src={imgMain} width="673px" height="479px" />
        <S.Circle />
        <S.Circle className="circle2" />
      </S.Main>

      <S.Svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2A8DD2"
          fill-opacity="1"
          d="M0,64L60,101.3C120,139,240,213,360,245.3C480,277,600,267,720,234.7C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </S.Svg>
    </>
  );
}
