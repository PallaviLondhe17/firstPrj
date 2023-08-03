import * as React from 'react';
import {CardActionArea, CardActions, TextField } from '@mui/material';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Sheet from '@mui/joy/Sheet';
import { IconButton } from '@mui/joy';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/material/Typography';
import { TaskSharp } from '@mui/icons-material';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom" 

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
  let navigate = useNavigate() 
  return (
    <>
<Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
      <IconButton size="sm" sx={{ml:40,mt:5}} color="neutral" variant="soft"
      onClick ={()=>{ navigate("/petPage")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Box  
      sx={{width:350,ml:10,alignItems: 'center'}}
      >          <Typography sx={{ml:10,mt:3,fontSize:20,fontWeight:'regular'}}>Confirm The Booking Details</Typography>
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
     <Button size='small' color='error' variant='contained'
     onClick ={()=>{ navigate("/")}}
     >Cancel</Button>
     <Button size='small' color='success' variant='contained'
     onClick ={()=>{ navigate("/bookingDetails")}}>
      confirm</Button>
     </Box>
     </Box>  
    </>
  )
}