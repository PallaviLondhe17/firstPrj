import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/joy/Box';
import {ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import image from './istockphoto-1126645371-612x612.jpeg'
import Divider from '@mui/material/Divider';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import CardCover from '@mui/joy/CardCover';
import MaterialTypography, {typographyClasses as muiTypographyClasses,} from '@mui/material/Typography';
import JoyTypography, {typographyClasses as joyTyographyClasses,} from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/joy';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawer from './actions/drawerPage';
import {useNavigate} from "react-router-dom" 


const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
  
  
export default function Slot() {
    const current = new Date();
  let monthvar=current.getMonth();
  let yearvar=current.getFullYear();
  let d= new Date(current.getFullYear(), current.getMonth(), 0);
  let mon=new Date(current.getFullYear(), 0, 0)
  const locale = 'en';
  const [variant, setVariant] = React.useState('solid');
  let navigate = useNavigate() 
  return (
    <>
<Box sx={{ display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center' }}>
      <IconButton size="sm" sx={{ml:50,mt:5}} color="neutral" variant="soft" 
      onClick ={()=>{ navigate("/daywiseCalender")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
     <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
     <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
     </Stack>
     </Box>
     <Box 
     sx={{display: 'flex', mt:1,ml:81, alignItems: 'center' }}>
      <Item sx={{fontSize:20,fontWeight:'bold'}}>Select a Slot</Item>
    </Box>
    <Box 
     sx={{textDecoration:'underline' ,fontSize: 27, display: 'flex',ml:81, alignItems: 'center' }}>
      <Item><JoyTypography  sx={{fontSize:18,fontWeight:10}}>Akshay Kumar</JoyTypography></Item>
      </Box>
     <SwipeableDrawer/>
     <Box sx={{ mb:10,mt:5,ml: 55,display: 'flex', gap: 3, flexWrap: 'wrap',height:50}}>
     <Button
          variant="solid"
          size="sm"
          color="success"
          aria-label="Explore Bahamas Islands"
          sx={{fontWeight: 300 }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          WALK-IN APPOINTMENT BOOKING
        </Button>   
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{fontWeight: 300 }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          VIRTUAL APPOINTMENT BOOKING
        </Button> 
     </Box>  
    </>
  )
}