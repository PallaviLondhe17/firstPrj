import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Button, colors} from "@mui/material";
import { red,blue, grey } from "@mui/material/colors";
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';
import frontimage from './images/online_booking_cover.jpeg'

const theme = createTheme({
    palette: {
      primary: {
        main: "#a61c00",
      },
      secondary: {
        main: '#6fb09a',
      },
    },
});
export default function InitialPage() {
  let navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
   <Box 
   sx={{justifyContent:"center",justifyItems:"center",width:"100%"}}
    display={"flex"} 
   
   // justifyContent={"center"} 
   // justifyItems={"center"}
    margin={"10%"}
   // flexBasis={0}
    //flexGrow={1}
    width={"80%"}
    sx={{bgcolor:"#fdddc6"}}
    >
      <Box>
      <img
      //src="https://www.vetport.com/main/img/online_booking_cover.jpg"
      src={frontimage}  height={"100%"}/>
      </Box>
      <Box sx={{width:"auto",height:"auto",mx:3,mt:10,justifyItems:"center"}}>
        <Typography 
        sx={{
            textTransform:"uppercase",
            fontSize:"23px",
            fontWeight:700,
            textAlign:"center",
            color:grey[800]
            }}>
                book your appointment
        </Typography>
        
        <Typography sx={{textAlign:"justify",color:grey[800]}}><p>Online Booking available for non-urgent medical needs including routine vaccinations & testing.   </p> <p>
For urgent medical needs such as: eye problems, bleeding, collapse, vomiting, diarrhea or anything you feel may be urgent or life-theatening, Please Call Emergency clinic: 80082
</p>
        </Typography>
        
        <Button 
            variant="contained" 
            color="primary" 
            sx={{my:1,width:400}}
            onClick={() => {
                navigate("/LocationList");
              }}
        >book online appointment</Button><br/>
        <Button 
            variant="contained" 
            color="secondary" 
            sx={{mt:1,width:400}}
            onClick={() => {
                navigate("/RescheApp");
              }}
        >reschedule/cancel appointment</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
