import * as React from "react";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import { Divider, Grid, Paper,Button } from "@mui/material";
import { HomeOutlined, MapsHomeWorkRounded } from "@mui/icons-material";
import { red,blue, teal,green,grey } from "@mui/material/colors";
import { createTheme,ThemeProvider, styled  } from '@mui/material/styles';
import listOfLocation from "./ListofJson/datafile.json"
import Services from "./ServicesList";
import InitialPage from "./InitialPage";
import clinicImage from "./images/clinic_icon.png"


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


export default function LocationList() {
  let navigate = useNavigate();
  return (
   <>
   <ThemeProvider theme={theme}>
      <Grid container fixed sx={{justifyContent:"center",justifyItems:"center"}}>        
        <Box 
        sx={{
            border:"3px solid #252354",
            boxShadow:"10px 10px #252354",
           // fontSize:30,
            fontWeight:"bold",
            width:"35%",
            p:"11px 10px",
            justifyContent:"center",
            justifyItems:"center",
            m:"auto" ,
            marginTop:"30px"   
            }}
        >
        <Typography className="fontCl"  sx={{textTransform:"uppercase",fontSize:30,m:5}} variant="h6">
           Locations
        </Typography>
        </Box>
    </Grid>
        <Box component={"ul"} style={{ listStyle: "none" }} display={"inline-flex"} gap={2}>
            {listOfLocation.locations.map((locationlist,index)=>(
            <Paper component="li" sx={{width:350,height:"auto"}} elevation={3}>
                <img height="200px" 
                //src="https://modernvet.vetport.com/assets/images/clinic_icon.png"
                src={clinicImage}
                  alt="text" style={{objectFit:"contain",width:"100%",textAlign:"center"}}
                />
                {/*<image sx={{bgcolor:"#f8f9fa"}}>
                <MapsHomeWorkRounded sx={{width:100,height:100,color:teal[700]}}/>
        </image>*/}
                <Box component="div" sx={{bgcolor:"#ffecb6",py:1}}>
                <Typography className="fontCl">
                    Opening Hours {locationlist.opening_time}
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
                {locationlist.name}
        </Typography>
        
        <Typography className="fontCl"  dangerouslySetInnerHTML={{__html:locationlist["address"]}}  sx={{textAlign:"justify",color:grey[800],py:2}}>
       
        </Typography>
        
        <Button className="fontCl"
            variant="contained" 
            color="primary" 
            sx={{my:1,width:"auto",borderRadius:5,fontSize:12}}
            onClick={() => {
                navigate("/ServicesList");
              }}
        >book now</Button>
        <Button className="fontCl"
            variant="contained" 
            color="secondary" 
            sx={{my:1,width:"auto",ml:2,borderRadius:5,fontSize:12}}
        >view details</Button>
        </Box>
      </Box>   
                </Box>
            </Paper>
            ))}
        </Box>
        </ThemeProvider>
        <Link to="/" style={{textDecoration:"none"}}>
        <Typography variant="h6" 
        >Back</Typography>
        </Link>
        </>
        
    
      

  );
}
