import { useQuery } from 'react-query'
import * as S from './styles'
import Card from './Card'
import { getParticipantsEvents } from '../../../services/events.service'
import { IEventUsers } from '../../../services/types'
import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

function Forums () {
  const { data: events, isLoading } = useQuery<IEventUsers[]>(['events'], getParticipantsEvents)
  return (
    <S.Container>
      <div>
        <S.Title>Próximos Eventos</S.Title>
        <S.SubTitle>Eventos</S.SubTitle>
      </div>

      <S.CardContainer>
        <Suspense fallback={<Skeleton height={60} count={3} />}>
          {events?.length > 0 ? events.map(event => <Card key={event.id} data={event} />) : null}
        </Suspense>
      </S.CardContainer>

    </S.Container>
  )
}

export default Forums
