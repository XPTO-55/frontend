import { useQuery } from 'react-query'
import * as S from './styles'
import Card from './Card'
import { getParticipantsEvents, IEventUsers } from '../../../services/events.service'
import React from 'react'

function Forums () {
  const { data: events, isLoading } = useQuery<IEventUsers[]>(['events'], getParticipantsEvents)

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <S.Container>
      <div>
        <S.Title>Próximos Eventos</S.Title>
        <S.SubTitle>Eventos</S.SubTitle>
      </div>

      <S.CardContainer>
        {events.map(event => <Card key={event.id} data={event} />)}
      </S.CardContainer>

    </S.Container>
  )
}

export default Forums
