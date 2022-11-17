import * as S from './styles'
import { AiFillStar } from "react-icons/ai"
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import Link from 'next/link'
export const ProfessionalCard = (props) => {
    return (
        <S.ContainerCard>
            <S.ContainerInside>

                <S.Img img={props.image}/>
                <p>{props.nome}</p>

            </S.ContainerInside>
            <S.ContainerInside className='edit'>
                <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                <div>
                    <p><b>Especialidade</b>: Psiquiatra </p>
                    <p><b>Formação</b>: BANDTEC</p>
                </div>
                <i>
                    <Link href="about-user">
                    <ButtonPrimary className='laranja' children='Saiba mais' />
                    </Link>
                    </i>

            </S.ContainerInside>
        </S.ContainerCard>


    )
}