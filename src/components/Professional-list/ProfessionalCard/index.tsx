import React from 'react'
import * as S from './styles'
import { AiFillStar } from 'react-icons/ai'
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import Link from 'next/link'
import PrefessionalCardProps from './types'

export const ProfessionalCard = ({
  id,
  name,
  telefoneCelular,
  ...props
}: PrefessionalCardProps) => {
  return (
    <S.ContainerCard>
      <S.ContainerInside>
        <S.Img img={''} />
        <p>{name}</p>
      </S.ContainerInside>
      <S.ContainerInside className="edit">
        <span>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
        <div>
          <p>
            <b>Especialidade</b>: {id}
          </p>
          <p>
            <b>Telefone</b>: {telefoneCelular}
          </p>
        </div>
        <i>
          <Link href="about-user">
            <ButtonPrimary className="laranja">
              Saiba mais
            </ButtonPrimary>
          </Link>
        </i>
      </S.ContainerInside>
    </S.ContainerCard>
  )
}
