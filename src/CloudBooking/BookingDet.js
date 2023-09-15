import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase, ButtonBase } from "@mui/material"
import * as React from "react"
import listOfJsonRef from "./ListofJson/datafile.json"
import { ArrowBackTwoTone, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

//const steps = listOfstep.steps
const theme = createTheme({
    palette: {
      primary: {
        main: "#a61c00",
      },
      secondary: {
        main: '#6fb09a',
      },
      info:{
        main:'#252354'
      }
    },
});
export default function BookingDet(){
    let navigate = useNavigate();
    return(
        <>
        <ThemeProvider theme={theme}>
        <Box display="flex" sx={{width:"100%", height: '35%',backgroundColor:"#f9d7bc"}}  gap={20}>  
            {listOfJsonRef.steps.map((providers,index)=>(
             <Box sx={{justifyContent:"center",justifyItems:"center",paddingInlineStart:20}}>
            <Typography className="fontCl"
              sx={{ 
                textShadow:"-4px 1px #252354;",
                color:"#f7be91",
                fontSize:"50px",
                fontWeight:"bold",
                borderRadius:"50%"
                }}>
             {providers.stepCount}
            </Typography>
            <Typography className="fontCl" variant="caption" sx={{fontWeight:700}}>
                {providers.stepDesc}
            </Typography>
            </Box> 
            ))}
        </Box>
        <Box display="flex"
     sx={{
        justifyContent:"center",
        justifyItems:"center",
        paddingTop:2,
        }}>
    <KeyboardArrowLeft sx={{color:"#0f145b"}} color="primary"/>
    <Link to="/PetInfo" style={{textDecoration:"none"}}>
    <Typography sx={{color:"#0f145b",fontWeight:700,fontSize:"1rem"}}>
        Back
    </Typography>
    </Link>
    <Divider  orientation="vertical" variant="middle" color="primary"  flexItem sx={{mx:2}}/>
    <Link to="/" style={{textDecoration:"none"}}>
    <Typography sx={{color:"#0f145b",fontWeight:700,fontSize:"1rem"}}>
        Next
    </Typography>
    </Link>
    <KeyboardArrowRight color="primary"/>
    </Box>
    <Grid container fixed sx={{justifyContent:"center",justifyItems:"center",mt:2}}>
        <Box sx={{bgcolor:"#e2e2e2", height:400,width:600}}>
            <Box sx={{height:70,bgcolor:"#a61c00"}}>
                <Typography variant="h6"
                     sx={{
                        textTransform:"uppercase",
                        color:"#fff",
                        fontWeight:700,
                        padding:"20px",
                        display:"flex",
                        flexWrap:"wrap"
                        }}>
                    booking details
                </Typography>
            </Box>
            <Box sx={{padding:"20px"}}>
                {listOfJsonRef.bookingDetJs.map((jsonRef,index)=>(
                    <Box display="flex" sx={{width:"100%"}}>
                        <Box sx={{textAlign:"left",width:"50%"}}>
                        <Typography sx={{fontSize:"18px",fontWeight:400,marginBottom:"0.5rem",color:"#252354"}}>
                            {jsonRef.label}
                        </Typography>
                        </Box>
                        <Box sx={{textAlign:"left",width:"50%"}}>
                        <Typography sx={{fontSize:"18px",fontWeight:400,marginBottom:"0.5rem",color:"#252354",}}>
                            {jsonRef.det}
                        </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:250}}
        >proceed to payment</Button>
        </Box>
    </Grid>
    </ThemeProvider>

   
</>
     
    )
}