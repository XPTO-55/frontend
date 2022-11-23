import React from 'react'
import * as S from './styles'
import { AiFillStar } from 'react-icons/ai'
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import Link from 'next/link'
import PrefessionalCardProps from './types'

export const ProfessionalCard = ({
  id,
  name,
  graduacao,
  ratings,
  especialidade
}: PrefessionalCardProps) => {
  const contador = []

  for (let index = 1; index < ratings; index++) {
    contador.push(index)
  }

  return (
    <S.ContainerCard>
      <S.ContainerInside>
        <S.Img img={''} />
        <p>{name}</p>
      </S.ContainerInside>
      <S.ContainerInside className="edit">
        <span>
          {contador.map((index) => {
            return <AiFillStar key={index} />
          })}
        </span>
        <div>
          <p>
            <b>Especialidade</b>: {especialidade}
          </p>
          <p>
            <b>Graduação</b>: {graduacao}
          </p>
        </div>
        <i>
          <Link href={`professionals/about/${id}`}>
            <ButtonPrimary className="laranja">Saiba mais</ButtonPrimary>
          </Link>
        </i>
      </S.ContainerInside>
    </S.ContainerCard>
  )
}
