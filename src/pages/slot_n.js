import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet';
import { IconButton } from '@mui/joy';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/joy/styles';
import {useNavigate} from "react-router-dom" 
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
  
export default function Slot_n() {
    let navigate = useNavigate() 
    const current = new Date();
  let monthvar=current.getMonth();
  let yearvar=current.getFullYear();
  let d= new Date(current.getFullYear(), current.getMonth(), 0);
  let mon=new Date(current.getFullYear(), 0, 0)
  const locale = 'en';
 
  return (
    <>
<Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <IconButton size="sm" sx={{ml:50,mt:5}} color="neutral" variant="soft" 
      onClick ={()=>{ navigate("/daywiseCalender")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack direction="row" sx={{width:900}}>
        <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
        </Stack>
        <Stack sx={{mt:5,width:500,border: '1px solid grey'}}> 
          <Typography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM</Typography>
        </Stack>
     </Stack>
</Box>
      <Box sx={{ mb:10,mt:5,ml: 55,display: 'flex', gap: 3, flexWrap: 'wrap',height:50}}>
     <Button
          variant="contained"
          size="sm"
          color="success"
          aria-label="Explore Bahamas Islands"
          sx={{fontWeight: 300 }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          WALK-IN APPOINTMENT BOOKING
        </Button>   
        <Button
          variant="contained"
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