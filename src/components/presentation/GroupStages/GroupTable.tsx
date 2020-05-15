import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


export interface GroupTableInterface {
  players: any,
  groupId: number
}

export const GroupTable:React.FC<GroupTableInterface> = ({players, groupId}) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  const classes = useStyles();

  const rows = players.filter((item: any) => {return item.group===groupId})
  
  return (
    <TableContainer>
    <Table className={classes.table} size="small" aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Player</TableCell>
          <TableCell>Games</TableCell>
          <TableCell>Points</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.games}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.points}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}