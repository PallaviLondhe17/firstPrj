import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box, Button, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';

const theme = createTheme({
    components:{
        MuiPaper:{
            styleOverrides:{
                backgroundColor:"transparent"
            }
        }
    }
});
export default function RescheApp() {
  return (
    <Grid container justifyContent={"center"} marginTop={10} display={"-ms-inline-flexbox"} fluid>
   
    <Paper
      component="form"
      sx={{ p: '20px 20px', display: 'flex', alignItems: 'center', width: 800,borderRadius:10,bgcolor:green["A100"]}}
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search by your E-mail/Phone"
        inputProps={{ 'aria-label': 'search by your E-mail/Phone' }}
      />
     
      <Divider  orientation="vertical" />
      <Box
         
        sx={{
            textTransform:"uppercase",
            justifyContent:"center",
            justifyItems:"center",
            width:200,
           // color:"#fff"
        }}
            ><Typography>Search</Typography>
   </Box>
    </Paper>
    </Grid>
  );
}