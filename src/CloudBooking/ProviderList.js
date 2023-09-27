import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase } from "@mui/material"
import * as React from "react"
import listOfprovider from "./ListofJson/datafile.json"
import { ArrowBackTwoTone, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';
import { red,blue, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import providerImage from "./images/new_staff_avtar.png"
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
export default function ProviderList(){
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
                //color:"#f7be91",
                color: `${providers.stepCount===2? "#a61c00":"#f7be91"}`,
               // fontSize:`${providers.stepCount===2? "60px":"50px"}`,
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
    <Link to="/" style={{textDecoration:"none"}}>
    <Typography sx={{color:"#0f145b",fontWeight:700,fontSize:"1rem"}}>
        Back
    </Typography>
    </Link>
    <Divider  orientation="vertical" variant="middle" color="primary"  flexItem sx={{mx:2}}/>

    </Box>
    <Grid container fixed sx={{justifyContent:"center",justifyItems:"center"}}>        
        <Box 
        sx={{
            border:"3px solid #252354",
            boxShadow:"10px 10px #252354",
           // fontSize:30,
            fontWeight:"bold",
            width:"30%",
            p:"2px 2px",
            justifyContent:"center",
            justifyItems:"center",
            m:"auto" ,
            marginTop:"30px"   
            }}
        >
        <Typography className="fontCl"  sx={{textTransform:"uppercase",fontSize:30,m:5}} variant="h6">
           Providers
        </Typography>
        </Box>
    </Grid>
    <Button   
        variant="contained" 
        color="primary" 
        sx={{borderRadius:10,flex:1,my:3,px:5,fontWeight:700,py:1}}
        onClick={() => {
            navigate("/ProviderList");
          }}
    >proceed with any provider</Button>
    <Box display="flex" columnGap={10}  sx={{justifyContent:"center"}}>
    <Box component={"ul"} style={{ listStyle: "none" }} display={"inline-flex"} gap={2}>
            {listOfprovider.provider.map((providers,index)=>(
            <Paper component="li" sx={{width:350,height:"auto"}} elevation={3}>
                <img height="200px" 
                //src="https://modernvet.vetport.com/assets/images/new_staff_avtar.png"
                src={providerImage}
                  alt="text" style={{objectFit:"contain",width:"100%",textAlign:"center"}}
                />
                {/*<image sx={{bgcolor:"#f8f9fa"}}>
                <MapsHomeWorkRounded sx={{width:100,height:100,color:teal[700]}}/>
        </image>*/}
                <Box component="div" sx={{bgcolor:"#ffecb6",py:1}}>
                <Typography className="fontCl">
                    {providers.drName}
                </Typography>
                </Box>
                <Box>
               
        <Box sx={{bgcolor:"#fff8e4"}}>
        <Box sx={{p:2}}>
        <Typography className="fontCl"
        sx={{
            textTransform:"uppercase",
            fontSize:"23px",
            fontWeight:700,
            textAlign:"justify",
            color:grey[800],
            //fontFamily:"Poppins"
            }}>
                {/*locationlist.name*/}
        </Typography>
        <Button className="fontCl"
            variant="contained" 
            color="secondary" 
            sx={{my:1,width:"auto",ml:2,borderRadius:5,fontSize:12,color:"#fff"}}
            onClick={() => {
                navigate("/DateNtime");
              }}
        >book now</Button>
        </Box>
      </Box>   
                </Box>
            </Paper>
            ))}
        </Box>
        </Box>  
    </ThemeProvider>

   
</>
     
    )
}