import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { PlayerTable } from '../../presentation/PlayerTable'

import { Button } from '@material-ui/core'

const mapState = (state: any) => ({
  players: state.players
})

const mapDispatch = {
  editGroup: (arr: any) => ({ type: 'EDIT_GROUP', players: arr })
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface PlayersListContainerProps extends PropsFromRedux {
  groups?: number
}

const component:React.FC<PlayersListContainerProps> = ({players, groups=2, editGroup}) => {

  function shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  function generateFixtures() {
    const a = players.length / groups
    const arr = shuffleArray(players)

    for (var i = 0; players.length > i; i++){
      arr[i].group = (i%2 + 1)
    }

    editGroup(arr)

  }

  return (
    <>
      <PlayerTable players={players} />
      <div className="generate-button">
        <Button onClick={_ => generateFixtures()} variant="contained" color="primary">Generate Fixtures</Button>
      </div>
    </>
  )
}

export const PlayersListContainer = connector(component)