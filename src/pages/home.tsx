import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Centre } from '../layouts'
import { Button } from '@material-ui/core'

export const Home:React.FC<RouteComponentProps> = ({history}) => {
  return (
    <Centre>
      <Button 
        variant="contained" 
        color="primary"
        onClick={_ => history.push('/tournament')}
      >
        New Tournament
      </Button>
    </Centre>
  )
}