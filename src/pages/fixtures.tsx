import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { Main } from '../layouts'

import { Navigation, NavigationItem } from '../components/containers/Navigation'
import { FixtureContainer } from '../components/containers/FixtureContainer'

import './tournament.scss'

export const Fixtures:React.FC = () => {

  return (
    <Main>
      <Navigation>
        <NavigationItem><Link to='/tournament'>Groups</Link></NavigationItem>
        <NavigationItem isActive><Link to='/fixtures'>Fixtures</Link></NavigationItem>
      </Navigation>
      <div>
        <FixtureContainer />
      </div>
    </Main>
  )
}