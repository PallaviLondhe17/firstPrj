import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { IconButton, Paper } from '@mui/material';
import {useNavigate} from "react-router-dom" 
import { AddBoxOutlined } from '@mui/icons-material';
/*
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  maxWidth: 250,
}));
*/
const Item = styled(Paper)(({ theme }) => ({
 // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 4,
  maxWidth: 250,
}));
export default function ProviderPage() {
  const [variant, setVariant] = React.useState('solid');
  let navigate = useNavigate() 

  return (
    <>  
    <Box 
     sx={{  ml:40,mt:4,borderRadius:2,
      backgroundImage: "url('https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif')",
       backgroundRepeat: "no-repeat", height: '450px', width: '850px' }} >
        <br/>
      <Box sx={{ display: 'flex', gap: 25, flexWrap: 'wrap', alignItems: 'center',ml:2,mt:2 }}>
      <IconButton size="sm" color="neutral" variant="soft" 
      onClick ={()=>{ navigate("/clinicpage")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton>
  
        <Typography variant='h6' sx={{ml:10,fontWeight:30}}>
           Select Provider
        </Typography>
 
      </Box>
       
    <Box style={{listStyle:'none'}} component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
    onClick ={()=>{ navigate("/daywiseCalender")}}
    >
      <Item sx={{my: 1,mx: 1,p: 2,}}>
      <Stack  spacing={2} direction="row" alignItems="center">
        <Stack><Avatar variant="solid" sx={{borderColor: 'background.body' }}/></Stack>
        <Stack sx={{ minWidth: 0 }}><Typography noWrap>Ravi Kumar</Typography></Stack> 
      </Stack>
      </Item> 
    </Box>
    <Box style={{listStyle:'none'}} component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
    onClick ={()=>{ navigate("/daywiseCalender")}}
    >
      <Item sx={{my: 1,mx: 1,p: 2,}}>
      <Stack  spacing={2} direction="row" alignItems="center">
        <Stack><Avatar variant="solid" sx={{borderColor: 'background.body' }}/></Stack>
        <Stack sx={{ minWidth: 0 }}><Typography noWrap>Raina Burwo</Typography></Stack> 
      </Stack>
      </Item> 
    </Box>
    <Box style={{listStyle:'none'}} component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
    onClick ={()=>{ navigate("/daywiseCalender")}}
    >
      <Item sx={{my: 1,mx: 1,p: 2,}}>
      <Stack  spacing={2} direction="row" alignItems="center">
        <Stack><Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRRQ82JeTe00BupmYV_0wZnGCfzCcCgJN_527tfZQEXt1BvLlDdL6b6iKrxVJIU7NtuE&usqp=CAUg"/></Stack>
        <Stack sx={{ minWidth: 0 }}><Typography noWrap>Akshay Kumar</Typography></Stack> 
      </Stack>
      </Item> 
    </Box>
     <Button
          variant="contained"
          sx={{ ml: 'auto',mt:5, fontWeight: 600 }}
          onClick ={()=>{ navigate("/clinicpage")}}
        >
          Cancel
        </Button>
  </Box>
    </>
  )
}