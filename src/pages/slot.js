import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom" 
import ListDrawer from './actions/listdata';
import { Paper } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
   
export default function Slot_s() {
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
      <Item><Typography  sx={{fontSize:18,fontWeight:10}}>Akshay Kumar</Typography></Item>
      </Box>
     <ListDrawer/>
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