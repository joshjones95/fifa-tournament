import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { FixtureList } from '../../presentation/FixtureList'

const mapState = (state: any) => ({
  players: state.players
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const component:React.FC<PropsFromRedux> = ({players}) => {
  return (
    <FixtureList fixtures={players} />
  )
}

export const FixtureContainer = connector(component)