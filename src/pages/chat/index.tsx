import React, { useState } from 'react'
import Events from '../../components/Chat/Events'
import Forums from '../../components/Chat/Forums'
import Messages from '../../components/Chat/Messages'
import { ProfileBar } from '../../components/Layout/ProfileBar'
import { useAuth } from '../../context/auth'
import { IForum } from '../../services/types'
import * as S from './_styles'

export default function Chat () {
  const [selectedForum, setSelectedForum] = useState<IForum>()
  const { user } = useAuth()
  if (!user) {
    console.log('usuário não está logado')
  }
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
