import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet';
import ArrowBackIosNewSharp from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp'
import { styled } from '@mui/joy/styles';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom" 
import datefile from "./actions/datefile.json"

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
    {datefile.data.date.map((dates,index)=>
    <Box 
      sx={{
        display: 'fixed',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 2,
          width: 100,
          height: 130,
          backgroundColor: '#A8A8A8',
          borderRadius: 'sm',
        },
      }}
      onClick ={()=>{ navigate("/slot")}}
    >
    <Paper sx={{gap:2}} elevation={3}>
     <Item1 sx={{bgcolor:'#0277BD',color:'#fff',fontWeight: 'bold',}}>{dates.day}</Item1> 
     <Item1 sx={{fontSize:27}}>{dates.date}</Item1> 
     <Item1 sx={{fontWeight:'soft',borderRadius: 'sm',}}>{dates.month}</Item1> 
     </Paper>
     </Box>
)}
      <ArrowForwardIosSharp sx={{ml:1}}/>

      
     
      </Box>
        <Button
          variant="contained"
          sx={{mt:20, fontWeight: 600 }}
          onClick ={()=>{ navigate("/providerPage")}}
        >
          Cancel
        </Button>    
    </Sheet>
    </>
  )
}
