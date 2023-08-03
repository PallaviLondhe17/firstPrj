import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet';
import CardCover from '@mui/joy/CardCover';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { IconButton } from '@mui/joy';
import InputLabel from '@mui/material/InputLabel';
import {useNavigate} from "react-router-dom" 

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  maxWidth: 250,
}));

const Pre = styled(InputLabel)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.secondary,
  m:10,
}));

const Arrowicon = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  maxWidth: 5,
}));
export default function ProviderPage() {
  const [variant, setVariant] = React.useState('solid');
  let navigate = useNavigate() 

  return (
    <>  
    <Sheet variant="outlined" color="neutral" sx={{ p: 4 }} component="div">    
    <div >         
    <Card  sx={{ml:40, width: 700 , px: 5,py:5,justifyContent: 'center'}}>
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
      <Box sx={{ display: 'flex', gap: 25, flexWrap: 'wrap', alignItems: 'center' }}>
      <IconButton size="sm" color="neutral" variant="soft" 
      onClick ={()=>{ navigate("/clinicpage")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton>
      <Pre>
        <Typography variant='h6'>
           Select Provider
        </Typography>
        </Pre>
      </Box>
       
    <Box component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
    onClick ={()=>{ navigate("/daywiseCalender")}}
    >
      <Item sx={{my: 1,mx: 1,p: 2,}}>
      <Stack  spacing={2} direction="row" alignItems="center">
        <Stack><Avatar variant="solid" sx={{borderColor: 'background.body' }}/></Stack>
        <Stack sx={{ minWidth: 0 }}><Typography noWrap>Ravi Kumar</Typography></Stack> 
      </Stack>
      </Item> 
    </Box>
    <Box component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
    onClick ={()=>{ navigate("/daywiseCalender")}}
    >
      <Item sx={{my: 1,mx: 1,p: 2,}}>
      <Stack  spacing={2} direction="row" alignItems="center">
        <Stack><Avatar variant="solid" sx={{borderColor: 'background.body' }}/></Stack>
        <Stack sx={{ minWidth: 0 }}><Typography noWrap>Raina Burwo</Typography></Stack> 
      </Stack>
      </Item> 
    </Box>
    <Box component="li" sx={{ flexGrow: 2, overflow: 'hidden', px: 1 }}
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
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick ={()=>{ navigate("/clinicpage")}}
        >
          Cancel
        </Button>
    </Card>
    </div>
    
    </Sheet>
    </>
  )
}