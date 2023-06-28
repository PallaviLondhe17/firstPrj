import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import FormControlLabelPosition from './formControltheme';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ScheduleForm from './scheduleForm';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  
  const ariaLabel = { 'aria-label': 'description' };
  

  const card_head=(
     <Typography gutterBottom variant="h5" component="div">
    Add New Schedule For Doctor
    </Typography>
  )

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <form>
      <Container  disableGutters="true">
      <Paper elevation={0} CardHeader sx={{display:'flex'}} disableGutters />
     <Item><div> {card_head}</div></Item>
        
          <Divider variant="middle" />
          <Item>
          <Paper elevation={0} CardHeader sx={{display:'flex'}}/>
          <ScheduleForm/> 
          </Item> 
      </Container>
      </form>
   
    </React.Fragment>
  );
}