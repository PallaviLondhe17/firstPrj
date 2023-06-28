import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';





export default function FormControlLabelPosition() {
  return (
    <div>
    
    <FormControl component="fieldset" >
    <Box
      component="form"
      sx={{
        display: 'flex',
        '& > :not(style)': { m: 2, width: '25ch' },
        alignItems: 'center',
        justifyContent:"center"

      }}
      noValidate
      autoComplete="off"
    >
      <FormLabel component="legend">Clinic Schedule for</FormLabel>
      
      <TextField id="Clinic Schedule for" value="Animal astro" variant="outlined" size="small" />
      </Box>
      <Box
      component="form"
      sx={{
        display: 'flex',
        '& > :not(style)': { m: 2, width: '25ch' },
        justifyContent:"center"

      }}
      noValidate
      autoComplete="off"
    >
      <FormLabel component="legend">User Schedule for</FormLabel>
      
      <TextField id="User Schedule for" value="*Dr. Cynthia Aswad" variant="outlined" size="small" />
      </Box>
      <Box
      component="form"
      sx={{
        display: 'flex',
        '& > :not(style)': { m: 2, width: '10ch' },
        justifyContent:"center"

      }}
      noValidate
      autoComplete="off"
    >
      <FormLabel component="legend">Working Days</FormLabel>
      
        
        <FormControlLabel
          value="Mon"
          control={<Checkbox />}
          label="Mon"
          labelPlacement="Start"
        />
        <FormControlLabel
          value="Tue"
          control={<Checkbox />}
          label="Tue"
          labelPlacement="Start"
        />
        <FormControlLabel
          value="Wed"
          control={<Checkbox />}
          label="Wed"
          labelPlacement="Start"
        />
       <FormControlLabel
          value="Thu"
          control={<Checkbox />}
          label="Thu"
          labelPlacement="Start"
        />
        <FormControlLabel
          value="Fri"
          control={<Checkbox />}
          label="Fri"
          labelPlacement="Start"
        />
        <FormControlLabel
          value="Sat"
          control={<Checkbox />}
          label="Sat"
          labelPlacement="Start"
        />
        <FormControlLabel
          value="Sun"
          control={<Checkbox />}
          label="Sun"
          labelPlacement="Start"
        />
      
      </Box>
      <Divider variant="middle" />
    </FormControl>
  </div>

  );
}