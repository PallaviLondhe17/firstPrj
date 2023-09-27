import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase,SxProps, Chip } from "@mui/material"
import * as React from "react"
import listOfprovider from "./ListofJson/datafile.json"
import { ArrowBackTwoTone, FormatLineSpacingRounded, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { createTheme,ThemeProvider, styled, createMuiTheme  } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { DateCalendar, LocalizationProvider, MonthCalendar } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getMonthsInYear } from "@mui/x-date-pickers/internals/utils/date-utils"
import { DayCalendar } from "@mui/x-date-pickers/internals"
import { fontGrid } from "@mui/material/styles/cssUtils"

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



export default function DateNtime(){
    let navigate = useNavigate();
    //const calendarDatewise=new Date()
    //const yearvar=calendarDatewise.getFullYear
    //const monthvar=getMonthsInYear()
    
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
                color: `${providers.stepCount===3? "#a61c00":"#f7be91"}`,
               // fontSize:`${providers.stepCount===3? "60px":"50px"}`,
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
    <Link to="/PetInfo" style={{textDecoration:"none"}}>
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
           Date & Time
        </Typography>
        </Box>
    </Grid>
 
   
    <Box sx={{my:5}}>
  
    <Grid container sx={{justifyContent:"center",justifyItems:"center",mt:2}}>
        <Box sx={{bgcolor:"#fff8e4", height:"auto",width:800,fontSize:"1rem"}}>
            <Box sx={{height:70,bgcolor:"#a61c00"}} id="variant-modal-title">
                <Box display="flex">
                <Typography variant="h6" 
                     sx={{
                        textTransform:"uppercase",
                        color:"#fff",
                        fontWeight:700,
                        width:"50%",
                        padding:"20px",
                        display:"flex",
                        flexWrap:"wrap"
                        }}>
                   Modern vet...
                </Typography>
                <Typography variant="h6" 
                     sx={{
                        textTransform:"uppercase",
                        color:"#fff",
                        fontWeight:700,
                        width:"50%",
                        padding:"20px",
                        display:"flex",
                        flexWrap:"wrap"
                        }}>
                   dr joao
                </Typography>
                <Typography variant="h6" 
                     sx={{
                        textTransform:"uppercase",
                        color:"#fff",
                        fontWeight:700,
                        width:"50%",
                        padding:"20px",
                        display:"flex",
                        flexWrap:"wrap"
                        }}>
                   Time: <Chip label="10:00" sx={{bgcolor:"#fff",borderRadius:10,ml:1,color:"#a61c00"}}/>
                </Typography>
                </Box>
            </Box>
            <Grid container display={"contents"}  
            sx={{
                  height:"auto",
                  width:"auto%",
                  position:"relative",
                  margin:"15px auto"
                }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar disablePast 
                  showDaysOutsideCurrentMonth
              
              views={["day"]}
               sx={{display:"initial",
               bgcolor:"#fff8e4",
               height:"auto",
               ".MuiPickersDay-root":{
               fontSize:20,
               margin:3,
               maxWidth:"500px",
               height:"auto"
               },
               ".MuiDayCalendar-weekDayLabel":{
                fontSize:20,
                margin:3,
                fontWeight:700
               }

              }}
              
              />
              </LocalizationProvider>
            </Grid>
        </Box>
    </Grid>
       
   {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar 
    showDaysOutsideCurrentMonth
    slotProps={
      FormatLineSpacingRounded
    }
    sx={propstyle}
     /* sx={{
        bgcolor:"#fff8e4",
        height:900,
        width:700,
        fontSize: 16,
      }}
    /></LocalizationProvider>*/}
    </Box>
    </ThemeProvider>  

   
</>
     
    )
}