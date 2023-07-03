import * as React from 'react';
import { useState } from 'react';
import CardContent from '@mui/joy/CardContent';
import MaterialTypography, {typographyClasses as muiTypographyClasses,} from '@mui/material/Typography';
import JoyTypography, {typographyClasses as joyTyographyClasses,} from '@mui/joy/Typography';import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardCover from '@mui/joy/CardCover';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import { AddBox } from '@mui/icons-material';
import {useNavigate} from "react-router-dom" 

export default function ClinicPage() {
  const [variant, setVariant] = React.useState('solid');
  let navigate = useNavigate() 
  return (
    <>
    <Sheet variant="outlined" color="neutral" sx={{ p: 4 }} component="div">
    
    <div>         
    <Card  sx={{ml:40, width: 700 ,justifyContent: 'center',flexWrap: 'wrap'}}>
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
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100px)',
        }}
      />
      <CardContent>
        
      <MaterialTypography sx={{mb:1}}> Select Clinic</MaterialTypography>
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >

    <Card onClick ={()=>{ navigate("/providerPage")}} component="li" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
     <CardOverflow>
     <Avatar variant="solid" sx={{ p: 0.5,ml:15, border: '2px solid', borderColor: 'background.body' }}/>
      </CardOverflow>
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <JoyTypography fontSize="xl" fontWeight="lg">Animal astro</JoyTypography>
        <JoyTypography level="body3" fontWeight="md">2727  
        Indore Madya Pradesh  
        Phone :-7676767676
        abhishek.yadav@harnstech.com 
        </JoyTypography>        
      </CardContent>
      <CardOverflow>      
      </CardOverflow>
     </Card>
{/*            */}

<Card  onClick ={()=>{ navigate("/providerPage")}} component="li" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
     <CardOverflow>
     <Avatar variant="solid"  sx={{ p: 0.5,ml:15, border: '2px solid', borderColor: 'background.body' }} />   
      <CardContent>     
        <JoyTypography  fontSize="xl" fontWeight="lg">Pet Health Care Clinic
        </JoyTypography>
        <JoyTypography level="body3" fontWeight="md">gsdfgh Umm Suqeim, Al Wasl Road , Villa #793 t
        adsdfsfad Tamil Nadu  
        Phone :- 226244821
        tech@vetport.com 
        </JoyTypography> 
      </CardContent>
      </CardOverflow>     
      </Card>
        </Box>
        </CardContent>
      </Card>
    </div>
    
  </Sheet>
    </>
  )
}