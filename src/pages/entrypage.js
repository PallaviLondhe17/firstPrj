import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/joy/Box';
import Grid from '@mui/material/Grid';
import image from './istockphoto-1126645371-612x612.jpeg'
import Divider from '@mui/material/Divider';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import CardCover from '@mui/joy/CardCover';
import MaterialTypography, {typographyClasses as muiTypographyClasses,} from '@mui/material/Typography';
import JoyTypography, {typographyClasses as joyTyographyClasses,} from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import ClinicPage from './clinicpage';
import {useNavigate} from "react-router-dom" 

export default function EntryPage(props) {
  const [variant, setVariant] = React.useState('solid');
  const [show, setShow] = useState(false);
  let navigate = useNavigate() 
  return (
    <>
    <Sheet id='firstPage' variant="outlined" color="neutral" sx={{ p: 4 }} component="div">
        <Card  sx={{ml:40, width: 700 ,height: 350, px: 5,py:5,justifyContent: 'center'}}>
    <CardCover>
        <img
          src="https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif?w=-100"
          srcSet="https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif?w=-100"
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
        <JoyTypography fontSize="xl" fontWeight="lg" textColor="">
            Online Booking available for non-urgent medical needs including routine vaccinations & testing.
            For urgent medical needs such as: eye problems, bleeding, collapse, vomiting, diarrhea or
            anything you feel may be urgent or life-theatening Please Call
        <JoyTypography fontSize="xl" fontWeight="lg" textColor="#ff0000"> Emergency clinic: 20 </JoyTypography>
           
        </JoyTypography>
        </CardContent>
  
        <Button sx={{ m: 'auto' }} size="md" onClick ={()=>{ navigate("/clinicPage")}}  variant={variant} color="primary">
          Book Online Appointment
        </Button>
     
    </Card>
    
    </Sheet>
    </>
  )
}