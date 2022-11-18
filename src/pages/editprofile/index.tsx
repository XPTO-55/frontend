import TextArea from "antd/lib/input/TextArea";
import { TfiPencil, TfiEmail } from "react-icons/tfi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsGenderAmbiguous, BsTelephone, BsHouse } from "react-icons/bs";
import { ButtonPrimary } from "../../@shared/ButtonPrimary";
import { UploadImage } from "../../components/EditProfile/UploadImage";
import { Input } from "../../components/Input";
import { ProfileBar } from "../../components/Layout/ProfileBar";
import * as S from "./styles";

export default function EditProfile() {
  return (
    <>
      <ProfileBar />

      <S.PageContainer>
        <S.ContainerForm>
          <S.ContentArea>
            <S.LeftArea>
              <UploadImage />
            </S.LeftArea>
            <S.RightArea>
              <Input value="Maria Belmonte">
                <TfiPencil />
              </Input>
              <textarea
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vitae metus eget suscipit. Cras interdum, felis ac ornare mollis, erat turpis dictum purus, sed pretium dolor tellus non urna. Morbi elit arcu, ullamcorper et justo id, ornare egestas diam. Aenean nec turpis hendrerit, accumsan mauris a, fermentum odio"
              />
            </S.RightArea>
          </S.ContentArea>
          <S.ContentArea>
            <S.LeftArea className="baixo">
              <ButtonPrimary className="azul">Salvar</ButtonPrimary>
              <ButtonPrimary className="laranja">Limpar</ButtonPrimary>
            </S.LeftArea>

            <S.RightArea className="baixo">
              <span>
                <Input value="mariabelmonte@hotmail.com " width="editProfile">
                  <TfiEmail />
                </Input>
                <Input value="Feminino " width="editProfile">
                  <BsGenderAmbiguous />
                </Input>
              </span>

              <span>
                <Input value="503.200.222-01 " width="editProfile">
                  <HiOutlineDocumentText />
                </Input>
                <Input width="editProfile" type="date">
                  <TfiPencil />
                </Input>
              </span>

              <span>
                <Input value="11 96787-6787 " width="editProfile">
                  <BsTelephone />
                </Input>
                <Input value="Rua Hadock Lobo N°1290 " width="editProfile">
                  <BsHouse />
                </Input>
              </span>
            </S.RightArea>
          </S.ContentArea>
        </S.ContainerForm>
      </S.PageContainer>
    </>
  );
}
