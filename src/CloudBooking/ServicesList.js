import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase } from "@mui/material"
import * as React from "react"
import listOfstep from "./ListofJson/datafile.json"
import { ArrowBackTwoTone, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';
import { red,blue, grey } from "@mui/material/colors";
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
export default function ServicesList(){
    let navigate = useNavigate();
    return(
        <>
        <ThemeProvider theme={theme}>
        <Box display="flex" sx={{width:"100%", height: '35%',backgroundColor:"#f9d7bc"}}  gap={20}>  
            {listOfstep.steps.map((step,index)=>(
             <Box sx={{justifyContent:"center",justifyItems:"center",paddingInlineStart:20}}>
            <Typography className="fontCl"
              sx={{ 
                textShadow:"-4px 1px #252354;",
                color:"#f7be91",
                fontSize:`${step.stepCount===1? "60px":"50px"}`,
                fontWeight:"bold",
                borderRadius:"50%"
                }}>
             {step.stepCount}
            </Typography>
            <Typography className="fontCl" variant="caption" sx={{fontWeight:700}}>
                {step.stepDesc}
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
    <Link to="/ProviderList" style={{textDecoration:"none"}}>
    <Typography sx={{color:"#0f145b",fontWeight:700,fontSize:"1rem"}}>
        Next
    </Typography>
    </Link>
    <KeyboardArrowRight color="primary"/>
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
           Services
        </Typography>
        </Box>
    </Grid>
    <Box display="flex" columnGap={10}  sx={{justifyContent:"center"}}>
    <Fab color="info" sx={{my:"10%"}}><KeyboardArrowLeft/></Fab>
    <Box  display={"inline-flex"} gap={2}>
            {listOfstep.serviceJ.map((service,index)=>(
            <Paper component="card"  sx={{width:350,height:380,mt:5,bgcolor:"#fff8e4"}} elevation={3}>
                <Box component="header" sx={{bgcolor:"#fbd8c2",p:"8px 7px",height:"10%"}}>
                <Typography sx={{color:"#252354",fontWeight:700,fontSize:20}}>
                    {service.packageName}
                </Typography>
                </Box>
                <Box component="body" sx={{textAlign:"left",p:4,height:"50%"}}>
                    <Typography sx={{color:"#252354"}}>
                        Package Details:
                    </Typography>
                    <Box display="flex" sx={{marginTop:2}}>
                        <Box component={"li"}/>
                            <Typography sx={{color:"#252354"}}>{service.package_details}</Typography> 
                      
                     </Box>
                </Box> 
                <Box display="flex" sx={{height:"10%",ml:4,float:"left",gap:15}}>
                    <Typography sx={{textTransform:"uppercase",textAlign:"left",justifyContent:"left",justifyItems:"left"}}>aed {service.price}</Typography>
                    <Button variant="contained" color="secondary" size="small" sx={{borderRadius:5,color:"#fff",fontSize:"12px",justifyContent:"right",justifyItems:"right"}}>select</Button>
                </Box>  
            </Paper>
            ))}
        </Box>
        <Fab color="info" sx={{my:"10%"}}><KeyboardArrowRight sx={{}}/></Fab>
        </Box>  
    <Box  sx={{bgcolor:"#fbd8c2",mt:2,textAlign:"left",py:2}}>
        <Box sx={{ml:25,mt:3}}>
        <Typography variant="h6" sx={{color:"#252354",fontWeight:400}}>
            Reason for Visit (optional)
            </Typography>
            <InputBase  sx={{flex:1,
                width:450,height:50,
                borderRadius:10,bgcolor:"#fff",border:"none",mt:1}} />
       </Box>
    </Box> 
    <Button   
        variant="contained" 
        color="primary" 
        sx={{borderRadius:10,flex:1,my:3,px:5}}
        onClick={() => {
            navigate("/ProviderList");
          }}
    >Next</Button>
    </ThemeProvider>

   
</>
     
    )
}