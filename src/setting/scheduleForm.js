import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { type } from "@testing-library/user-event/dist/type";
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));  
  
export default function ScheduleForm(){
    return(
        
        <div className="form">
        <Grid>
            <Item>
                <FormLabel root>Clinic Shcedule for</FormLabel></Item>
        </Grid>
        </div>
       
    )
}