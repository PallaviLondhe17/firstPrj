import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase, ButtonBase } from "@mui/material"
import * as React from "react"
import listOfprovider from "./ListofJson/datafile.json"
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
            {listOfprovider.steps.map((providers,index)=>(
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
    <Link to="/ProviderList" style={{textDecoration:"none"}}>
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
    <Grid container fixed sx={{justifyContent:"center",justifyItems:"center"}}>
            <Box sx={{bgcolor:"#fff8e4",width:"40%",height:200,p:1,m:3}}>
                <Box display="flex">
                    <Box sx={{justifyContent:"left",justifyItems:"left",mt:2,ml:1}}>
                        <Typography sx={{fontSize:23,color:"#6fb09a",fontWeight:700}}>
                            1 <br/>September 2023
                        </Typography>
                        <Divider variant="middle" flexItem sx={{border:3,color:"#a61c00",my:2}}/>
                        <Typography sx={{fontSize:23,color:"#6fb09a",fontWeight:"bold",textTransform:"uppercase"}}>
                            friday
                        </Typography>
                    </Box>
                    <Divider  orientation="vertical"  flexItem sx={{mx:2,border:3,color:"#6fb09a",height:200}}/>
                    <Box sx={{justifyContent:"center",justifyItems:"center",py:2,mx:14}}>  
                        <Typography sx={{fontSize:20,color:"#a61c00",textTransform:"uppercase"}}>
                            dr joao
                        </Typography>
                        <Divider variant="middle" flexItem sx={{mx:1,my:6,border:3,color:"#6fb09a",width:150}}/>
                        <Typography sx={{fontSize:20,color:"#a61c00"}}>
                        08:00 - 09:00
                        </Typography>
                    </Box>
                </Box>  
            </Box>
    </Grid>
    <Box>
    <Typography sx={{fontSize:20,color:"#252354"}}>
            If you are a client of Modern Vet input your details below:
     </Typography>
     </Box>
     <Box sx={{justifyContent:"center",alignItems:"center",pl:65,mt:2}}>
        <Paper
        component="form" elevation={0}
        sx={{bgcolor:"#fcf1ea",p: '3px 3px', display: 'flex', width: 550,borderRadius:10}}
        >
        <InputBase
            sx={{ 
                mt:1,
                pl:2,
                py:1,
                ml: 1, 
                flex: 1,
                bgcolor:"#fcf1ea", 
                color:"#6fb09a" ,
                fontWeight:700,
                width:400,
                borderRadius:10,
            }}
            placeholder="Type your Email / Phone Number"
            inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Type your Email / Phone Number" }}
            end
        />
        <Divider  orientation="vertical" />
        <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:150}}
        >search</Button>
        </Paper>
     
      </Box>
      <Box display="flex" sx={{ml:70,mt:2,gap:3}}>
        <Typography sx={{textTransform:"uppercase",fontSize:20,color:"#252354"}}>new client ?</Typography>
        <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:250}}
        >register here</Button>
      </Box>
    </ThemeProvider>

   
</>
     
    )
}