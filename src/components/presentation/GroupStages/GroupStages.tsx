import React from 'react'

import { GroupTable } from './GroupTable'
import { Card } from '@material-ui/core';

import './GroupStage.scss'

export interface GroupStagesProps {
  players: any
}

export const GroupStages: React.FC<GroupStagesProps> = ({players}) => {

  return (
    <div>
      <h2>Group Stages</h2>
      <Card className="group-card">
        <h3>Group A</h3>
        <GroupTable players={players} groupId={1}/>
      </Card>
      <Card className="group-card">
        <h3>Group B</h3>
        <GroupTable players={players} groupId={2}/>
      </Card>
    </div>
  )
}