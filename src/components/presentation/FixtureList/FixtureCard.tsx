import React from 'react'

import { Card } from '@material-ui/core'

import './Fixtures.scss'

export interface FixtureCardProps {
  playerOne: string,
  playerTwo: string
}

export const FixtureCard:React.FC<FixtureCardProps> = ({playerOne, playerTwo}) => {
  return (
    <Card className="fixture-card">
      <h5>{playerOne} vs {playerTwo}</h5>
    </Card>
  )
}