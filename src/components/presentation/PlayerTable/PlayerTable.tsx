import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export interface PlayerTableProps {
  players: any
}

export const PlayerTable:React.FC<PlayerTableProps> = ({players}) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 300,
    },
  });

  const classes = useStyles();
  
  return (
    <TableContainer>
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
        {players.map((row: any) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}