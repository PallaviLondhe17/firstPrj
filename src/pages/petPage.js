import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions, TextField } from '@mui/material';
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
import MaterialButton,{Button as muiButton}  from '@mui/material/Button';
import {Pets} from '@mui/icons-material';

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
   
export default function PetPage() {
    const current = new Date();
  let monthvar=current.getMonth();
  let yearvar=current.getFullYear();
  let d= new Date(current.getFullYear(), current.getMonth(), 0);
  let mon=new Date(current.getFullYear(), 0, 0)
  const locale = 'en';
  const [variant, setVariant] = React.useState('solid');

  return (
    <>
<Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
      <IconButton size="sm" sx={{ml:40,mt:5}} color="neutral" variant="soft">
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack direction="row" sx={{width:900}}>
        <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
        </Stack>
        <Stack sx={{mt:5,width:500,border: '1px solid grey'}}> 
          <MaterialTypography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM <br/>Client Name : Pallavi </MaterialTypography>
        </Stack>
     </Stack>
 </Box>
     <Box component='label' sx={{mt:3,display: 'flex',ml:80,flexWrap: 'wrap'}}>
     <MaterialTypography variant='h6'>Select Your Pet</MaterialTypography>
     </Box>
     <Box sx={{display:'flex',justifyContent:'center',ml:75,mt:5,mb:5,border:'1px solid grey',width:200,height:100}}>
      <Item sx={{mt:3}}><Pets/></Item><Item sx={{mt:3}}>Max</Item>
     </Box>
         <Box sx={{ mb:10,mt:5,ml: 80,display: 'flex', gap: 3, flexWrap: 'wrap',height:40}}>
        <MaterialButton
          variant="contained"
          size="small"
        >
         Add new pet
        </MaterialButton> 
     </Box>  
    </>
  )
}