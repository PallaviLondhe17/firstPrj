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
import { grey } from '@mui/material/colors';
import { TaskSharp } from '@mui/icons-material';
import MaterialButton,{Button as muiButton}  from '@mui/material/Button';




const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
  
  
export default function ConfirmPage() {
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
      <Box  
      sx={{width:350,ml:10,alignItems: 'center'}}
      >          <MaterialTypography sx={{ml:10,mt:3,fontSize:20,fontWeight:'regular'}}>Confirm The Booking Details</MaterialTypography>
     </Box>
 </Box>
     <Box sx={{mt:3,ml:60,width:500,border:'1px solid grey'}}>
        <Box sx={{display: 'fixed'}}>
     <Item sx={{mt:1}}><TaskSharp/></Item><Item sx={{ml:1,mt:1}}>Reason for Visit :</Item>
     <Item sx={{display:'flex',ml:3}}><TextField/></Item>
     </Box>
     <Divider/>
    <Box sx={{mt:1,ml:10,mb:1,display:'flex'}} 
    gap={20}
    >
     <MaterialButton size='small' color='error' variant='contained'>Cancel</MaterialButton>
     <MaterialButton size='small' color='success' variant='contained'>confirm</MaterialButton>
     </Box>
     </Box>  
    </>
  )
}