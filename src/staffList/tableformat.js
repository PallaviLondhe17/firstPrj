import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FontAwesomeIcon from '../themes/iconList';
import { Link } from '@mui/material';
function createData(staff,manage) {
  return { staff ,manage };
}

const rows = [
  createData('*Dr. Cynthia Aswad', ),
  createData('Alfered Benjamin', ),
  createData('Eclair', ),
  createData('Ramo', ),
  createData('Jony', ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Staff</TableCell>
            <TableCell align="right">Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{row.staff}</TableCell>
              <TableCell  align='right'>
                <Link href="#" underline="none" to={{
    pathname: "../setting/setting.js",
  }}>
        <FontAwesomeIcon/>
      </Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}