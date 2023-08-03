import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet';
import CardCover from '@mui/joy/CardCover';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from  '@mui/material/Typography';
import {useNavigate} from "react-router-dom" 

const theme = createTheme({
  typography: {
    poster: {
      fontSize: '1.2rem',
      color: 'red',
      fontWeight:'bold'
    },
    h3: true,
  },
});

export default function EntryPage(props) {
  const [variant, setVariant] = React.useState('solid');
  const [show, setShow] = useState(false);
  let navigate = useNavigate() 
  return (
    <>
    <Sheet id='firstPage' variant="outlined" color="neutral" sx={{ p: 4 }} component="div">
        <Card  sx={{ml:30, width: 800 ,height: 350, px: 5,py:5,justifyContent: 'center'}}>
    <CardCover>
        <img
          src="https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif"
          srcSet="https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 15px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 10px)',
        }}
      />
      
        <CardContent>
        <ThemeProvider theme={theme}>
        <Typography variant="h6">
            Online Booking available for non-urgent medical needs including routine vaccinations & testing. For urgent medical needs such as: eye problems, bleeding, collapse, vomiting, diarrhea or anything you feel may be urgent or life-theatening Please Call
        <Typography variant="poster"><br/> Emergency clinic: 20 </Typography>
           
        </Typography>
        </ThemeProvider>
        </CardContent>
 
        <Button sx={{ m: 'auto' }} onClick ={()=>{ navigate("/clinicPage")}}  variant='contained'>
          Book Online Appointment
        </Button>
     
    </Card>
    
    </Sheet>
    </>
  )
}