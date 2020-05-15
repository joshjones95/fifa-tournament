import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { GroupStages } from '../../presentation/GroupStages'

const mapState = (state: any) => ({
  players: state.players
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const component:React.FC<PropsFromRedux> = ({players}) => {
  return (
    <GroupStages players={players} />
  )
}

export const GroupStageContainer = connector(component)