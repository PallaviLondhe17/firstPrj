import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TableFormat from './tableformat';



export default function StaffList() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }; 
  return (
    <div>
     <React.Fragment>
      <CssBaseline />
      <Container fixed>
    <Box sx={{boxShadow: 1 ,width: 1 }}>
      <FormControl sx={{ m: 5, minWidth: 200 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={10}>Animal Astro</MenuItem>
          <MenuItem value={20}>Animal Care </MenuItem>
          <MenuItem value={30}>Orio Clinic</MenuItem>
        </Select>
      </FormControl>
      <Divider variant="middle" />
      </Box>
     <TableFormat/>
      </Container>
      </React.Fragment>
    </div>
  );
}