import Link from "next/link"
import { ButtonPrimary } from "../../@shared/ButtonPrimary"
import { ProfileBar } from "../../components/Layout/ProfileBar"
import * as S from "./styles" 

export default function Feed() {
    return (
        <>
    <ProfileBar/>
    <S.Container>
    <div>
        <img src="https://reymann.com.br/wp-content/uploads/2022/03/imagem.png" alt="" />
        <h1>Pagina em construção</h1>
    </div>

    <span>

<Link href="/edit-profile">
<ButtonPrimary >Editar perfil</ButtonPrimary>

</Link>
<Link href="professional-list">
<ButtonPrimary>Profissionais</ButtonPrimary>


</Link>
<Link href="hotsite">
<ButtonPrimary>Arquivo TXT</ButtonPrimary>

</Link>
    </span>
</S.Container>
        
        </>

    )
}