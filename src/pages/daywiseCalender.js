import * as React from 'react';
import { useState,useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/joy/Typography';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import CardCover from '@mui/joy/CardCover';
import Avatar from '@mui/joy/Avatar';
import ArrowBackIosNewSharp from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp'
import Card from '@mui/joy/Card';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/joy/styles';
import { Paragraph } from 'theme-ui';
import { IconButton } from '@mui/joy';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import { MonthCalendar, renderDateViewCalendar } from '@mui/x-date-pickers';
import {useNavigate} from "react-router-dom" 



const Item1 = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.primary,
  maxWidth: 250,
}));
const Arrowicon = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  maxWidth: 5,
}));

export default function DaywiseCalender() {
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
    <Sheet color="neutral" sx={{ p: 4}} >    
    <Box sx={{justifyContent: 'center'}}>
        <Typography component="div">
           Select a Day Of <Box sx={{textDecoration:'underline'}}> Akshay Kumar</Box>
        </Typography>
    </Box>
    <Box
    sx={{display:'flex',flexWrap:'wrap',mt:5,ml:30,width:900,alignItems:'center'}}
    >
    <ArrowBackIosNewSharp />
    <Box 
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 1,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
    <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
     </Box>
     <Box 
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()+1}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
     </Box>
     <Box  
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <Box  
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <Box  
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <Box  
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <ArrowForwardIosSharp sx={{ml:1}}/>
      <Box  
      sx={{
        display: 'none',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 4,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <Box  
      sx={{
        display: 'none',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
      <Box  
      sx={{
        display: 'none',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 5,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
     <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{`${current.toLocaleDateString(locale, { weekday: 'long' })}`}</Item1> 
     <Item1 sx={{fontSize:27}}>{`${current.getDate()}`}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`}</Item1> 
     </Paper>
      </Box>
     
      </Box>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{mt:20, fontWeight: 600 }}
          onClick ={()=>{ navigate("/providerPage")}}
        >
          Cancel
        </Button>    
    </Sheet>
    </>
  )
}
