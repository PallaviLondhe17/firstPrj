import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from  '@mui/material/Typography';
import {useNavigate} from "react-router-dom" 
import { Box, Paper } from '@mui/material';

export default function EntryPage(props) {
  const [variant, setVariant] = React.useState('solid');
  const [show, setShow] = useState(false);
  let navigate = useNavigate() 
  return (
    <>
   
     <Box 
     sx={{  ml:40,mt:4,borderRadius:2,
      backgroundImage: "url('https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif')",
       backgroundRepeat: "no-repeat", height: '350px', width: '850px' }} ><br/>
        <Typography variant="h6">
            Online Booking available for non-urgent medical needs including routine vaccinations & testing. For urgent medical needs such as: eye problems, bleeding, collapse, vomiting, diarrhea or anything you feel may be urgent or life-theatening Please Call</Typography>
        <Typography variant="h6" color='red'><br/> Emergency clinic: 20 </Typography>
        <Button sx={{ mt: 10 }} onClick ={()=>{ navigate("/clinicPage")}}  variant='contained'>
          Book Online Appointment
        </Button> 
        </Box>
        
    </>
  )
}