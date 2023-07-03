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
import {useNavigate} from "react-router-dom" 




const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
  
  
export default function SlotSelection() {
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
<Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
      <IconButton size="sm" sx={{ml:40,mt:5}} color="neutral" variant="soft"
      onClick ={()=>{ navigate("/slot")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack direction="row" sx={{width:900}}>
        <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
        </Stack>
        <Stack sx={{mt:5,width:500,border: '1px solid grey'}}> 
          <MaterialTypography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM</MaterialTypography>
        </Stack>
     </Stack>
 </Box>
     <Box sx={{mt:3,display: 'flex',ml:50,flexWrap: 'wrap'}}>
     <Box component='label'  sx={{mr:10,mt:1}}>
     <MaterialTypography sx={{fontSize:15}}>Type your Email/Phone number </MaterialTypography>
     </Box>
     <Box>
     <TextField required size='small' value='pallavi.londhe@sygina.com' type="search" id="search" placeholder='Search your Information' sx={{width: 300 }} />
     <MaterialButton
          variant="contained"
          size="small"
          sx={{height:40,fontWeight: 300 }}
          onClick ={()=>{ navigate("/petPage")}}
      >Search</MaterialButton>
     </Box>
     </Box>
     <Box sx={{ mb:10,mt:5,ml: 55,display: 'flex', gap: 3, flexWrap: 'wrap',height:50}}>
     <MaterialButton
     
          size="small"
          color="success"
          variant="contained"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          WALK-IN APPOINTMENT BOOKING
        </MaterialButton>   
        <MaterialButton
          variant="contained"
          size="small"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          VIRTUAL APPOINTMENT BOOKING
        </MaterialButton> 
     </Box>  
    </>
  )
}