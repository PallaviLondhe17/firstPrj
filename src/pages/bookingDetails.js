import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/material/Typography';
import { FileCopySharp,Person3Sharp,TaskSharp,PersonSharp,ScheduleSharp,AlarmOnSharp,LocalHospital } from '@mui/icons-material';
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
  
export default function BookingDetails() {
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
    <Box  sx={{width:350,ml:60,alignItems: 'center'}}>
        <Typography sx={{ml:10,mt:3,fontSize:20,fontWeight:'regular'}}>Booking Details</Typography>
    </Box>
     <Box sx={{mt:3,ml:55,width:500,border:'1px solid grey'}}>
        <Box  component='ul'
         sx={{display: 'fixed'}}>
             <Item sx={{mt:1}}><FileCopySharp/></Item><Item sx={{ml:1,mt:1}}>
             <Typography>Booking Details </Typography></Item>
        </Box>
     <Box component='li' sx={{display:'flex'}}>
     <Item><Person3Sharp/></Item>
     <Item>Dr. Name</Item>
     <Item sx={{flexGrow: 1,ml:30,textAlign:'right'}}>Akshay Kumar</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><LocalHospital/></Item>
     <Item>clinic Name</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>Animal astro</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><AlarmOnSharp/></Item>
     <Item>Appointment Date</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>30 June 2023</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><ScheduleSharp/></Item>
     <Item>Time</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>9:00 AM to 9:30 AM</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><PersonSharp/></Item>
     <Item>Client</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>Pallavi Londhe</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><TaskSharp/></Item>
     <Item>Patient</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>Max</Item>
    </Box>
    <Box component='li' sx={{display:'flex'}}>
     <Item><TaskSharp/></Item>
     <Item>Reason for Visit</Item>
     <Item sx={{textAlign:'right',flexGrow: 1,ml:20}}>routine checkup</Item>
    </Box>  
    
     <Divider/>
    <Box sx={{mt:1,ml:25,mb:1,display:'flex'}} >
     <MaterialButton size='small' color='error' variant='contained'
     onClick ={()=>{ navigate("/")}}>Done</MaterialButton>
     </Box>
 </Box>  
    </>
  )
}