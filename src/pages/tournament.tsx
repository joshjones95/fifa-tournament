import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { Main } from '../layouts'

import { PlayersListContainer } from '../components/containers/PlayersListContainer'
import { GroupStageContainer } from '../components/containers/GroupStageContainer'
import { Navigation, NavigationItem } from '../components/containers/Navigation'

import './tournament.scss'

export const Tournament:React.FC = () => {

  return (
    <Main>
      <Navigation>
        <NavigationItem isActive><Link to='/tournament'>Groups</Link></NavigationItem>
        <NavigationItem><Link to='/fixtures'>Fixtures</Link></NavigationItem>
      </Navigation>
      <div>
        <div className="tournament-side">
          <PlayersListContainer/>
        </div>
        <div className="tournament-main">
          <GroupStageContainer />
        </div>
      </div>
    </Main>
  )
}