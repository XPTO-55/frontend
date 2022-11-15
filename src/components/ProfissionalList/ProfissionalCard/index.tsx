import * as S from './styles'
import { AiFillStar } from "react-icons/ai"
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
export const ProfissionalCard = (props) => {
    return (
        <S.ContainerCard>
            <S.ContainerInside>
                <img src={props.image} alt="crisudo" />
                <p>Cristian Oliveira</p>

            </S.ContainerInside>
            <S.ContainerInside className='edit'>
                <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                <div>
                    <p><b>Especialidade</b>: Psiquiatra </p>
                    <p><b>Formação</b>: BANDTEC</p>
                </div>
                <i><ButtonPrimary className='laranja' children='Saiba mais' /></i>

            </S.ContainerInside>
        </S.ContainerCard>


    )
}