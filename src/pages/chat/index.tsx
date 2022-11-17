import React, { useState } from 'react'
import Events from '../../components/Chat/Events'
import Forums from '../../components/Chat/Forums'
import Messages from '../../components/Chat/Messages'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { IForum } from '../../services/types'
import * as S from './_styles'

export default function Chat () {
  const [selectedForum, setSelectedForum] = useState<IForum>()
  return (
    <>
      <ProfileBar />
      <S.Container>
        <Forums setSelectForum={setSelectedForum} />
        <Messages forum={selectedForum} />
        <Events />
      </S.Container>
    </>
  )
}
