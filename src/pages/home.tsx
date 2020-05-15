import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Centre } from '../layouts'
import { Button } from '@material-ui/core'

const component:React.FC<RouteComponentProps> = ({history}) => {
  return (
    <Centre>
      <Button 
        variant="contained" 
        color="primary"
        onClick={_ => history.push('/tournament')}
      >
        Saturdays are for the boys
      </Button>
    </Centre>
  )
}

export const Home = withRouter(component)