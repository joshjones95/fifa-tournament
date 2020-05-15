import React from 'react'

import { Main } from '../layouts'

import { PlayersListContainer } from '../components/containers/PlayersListContainer'
import { GroupStageContainer } from '../components/containers/GroupStageContainer'

import './tournament.scss'

export const Tournament:React.FC = () => {

  return (
    <Main>
      <div className="tournament-side">
        <PlayersListContainer/>
      </div>
      <div className="tournament-main">
        <GroupStageContainer />
      </div>
    </Main>
  )
}