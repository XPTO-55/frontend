import React from 'react'
import { IEventUsers } from '../../../../../services/types'
import * as S from './styles'

interface InfoProps {
  data: IEventUsers
}

function Info ({ data }: InfoProps) {
  return (
    <S.Container>

      <S.TextContainer>
        <S.EventName>{data.name}</S.EventName>
        <S.EventTime>{data.startDate} - {data.endDate}</S.EventTime>
      </S.TextContainer>

      <S.ParticipantsContainer>
        {data.users.map(user => (
          <S.ImageContainer key={user.id}>
            <S.ProfileImage src={user?.profileUrl} alt="" />
          </S.ImageContainer>
        ))}
      </S.ParticipantsContainer>
    </S.Container>
  )
}

export default Info
