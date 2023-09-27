import { Box, Paper, Typography,Grid, Divider,Button, List, BottomNavigationAction, BottomNavigation, Fab, TextField, InputBase, ButtonBase, InputAdornment } from "@mui/material"
import * as React from "react"
import listOfJsonRef from "./ListofJson/datafile.json"
import { ArrowBackTwoTone, CalendarMonthSharp, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { createTheme,ThemeProvider, styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: "auto",
    bgcolor: "background.paper",
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  
  
export default function PetInfo(){
    let navigate = useNavigate();
    const [openmodal,setOpenmodal]=React.useState(false)
    const handleOpen = () => setOpenmodal(true);
    const handleClose = () => setOpenmodal(false);  
    const [country, setCountry] = React.useState('');
    const [openPetmodal,setOpenPetmodal]=React.useState(false);
    const handleOpenPetmodal=()=>setOpenPetmodal(true);
   const  handlePetClose=()=>setOpenPetmodal(false)
    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    
    return(
        <>
        <ThemeProvider theme={theme}>
        <Box display="flex" sx={{width:"100%", height: '35%',backgroundColor:"#f9d7bc"}}  gap={20}>  
            {listOfJsonRef.steps.map((providers,index)=>(
             <Box sx={{justifyContent:"center",justifyItems:"center",paddingInlineStart:20}}>
            <Typography className="fontCl"
              sx={{ 
                textShadow:"-4px 1px #252354;",
                //color:"#f7be91",
                color: `${providers.stepCount===4? "#a61c00":"#f7be91"}`,
               // fontSize:`${providers.stepCount===4? "60px":"50px"}`,
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
    <Link to="/BookingDet" style={{textDecoration:"none"}}>
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
           // end
        />
        <Divider  orientation="vertical" />
        <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:150}}
        >search</Button>
        </Paper>
     
      </Box>
      <Box display="flex" sx={{ml:70,mt:2,gap:3}}>
        <Typography sx={{textTransform:"uppercase",fontSize:20,color:"#252354"}}>new client ?</Typography>
        <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:250}} onClick={handleOpen}>register here</Button>
      </Box>
    <Modal
        open={openmodal}
        onClose={handleClose}
        aria-labelledby="variant-modal-title"
        aria-describedby="variant-modal-description"  
      >
    
        <Grid container sx={{justifyContent:"center",justifyItems:"center",mt:2}}>
        <Box sx={{bgcolor:"#e2e2e2", height:"auto",width:800,fontSize:"1rem"}}>
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
                    client details
                </Typography>
                <Divider  orientation="vertical" variant="middle" flexItem sx={{border:3,color:"#fff"}}/>
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
                    patient /pet details
                </Typography>
                </Box>
            </Box>
            <Box sx={{padding:"20px"}} id="variant-modal-description">
                    <Box display="flex" sx={{width:800}}>
                        <Box sx={{textAlign:"left",width:"50%"}}>
                            <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="First Name"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"First Name" }}
                            />
                            <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Last Name"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Last Name" }}
                            />
                            <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Address"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Address" }}
                            />
                            <FormControl sx={{ m: 1, minWidth: "90%"}} size="small">
                                <Select
                                //labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={country}
                                //label="Age"
                                onChange={handleChange}
                                border="none !important"
                              
                                sx={{
                                    borderRadius:10,
                                    backgroundColor:"#fcf1ea",
                                    boxShadow:"none",
                                    border:"hidden",
                                    pl:2,
                                    py:1,
                                }} 
                                >
                                <MenuItem sx={{borderRadius:10}} value={10}>UAE</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: "90%"}} size="small">
                                <Select
                                
                                //labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={country}
                                //label="Age"
                                onChange={handleChange}
                                border="none !important"
                                sx={{
                                    borderRadius:10,
                                    backgroundColor:"#fcf1ea",
                                    boxShadow:"none",
                                    border:"hidden",
                                    pl:2,
                                    py:1,
                                    
                                }}
                                >
                                <MenuItem sx={{borderRadius:10}} value={10}>Dubai</MenuItem>
                                </Select>
                            </FormControl>
                            <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="City"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"City" }}
                            />
                            <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Postal Code"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Postal Code" }}
                            />
                             <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Phone Number"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Phone Number" }}
                            />
                             <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Email Address"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Email Address" }}
                            />
                        </Box>
                        <Box sx={{textAlign:"left",width:"50%"}}>
                        <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"90%",
                                borderRadius:10,
                                 }}
                                placeholder="Patient Name"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Patient Name" }}
                            />
                            <Box display="flex" sx={{width:"90%"}}>
                             <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"10%",
                                borderRadius:10,
                                 }}
                                placeholder="Weight"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Weight" }}
                            />
                            <RadioGroup
                            sx={{
                                "& .MuiSvgIcon-root": {
                                fontSize: 17,
                                ml: 1,
                                py:1,
                                width:"100%"
                                },
                            }}
                            size="small"
                            row
                            name="radio-buttons-group"
                            >
                            <FormControlLabel
                                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                                value="KG"
                                control={<Radio />}
                                label="KG"
                            />
                            <FormControlLabel
                                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                                value="LB"
                                control={<Radio />}
                                label="LB"
                            />
                            <FormControlLabel
                                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                                value="OZ"
                                control={<Radio />}
                                label="OZ"
                            />
                            <FormControlLabel
                                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                                value="G"
                                control={<Radio />}
                                label="G"
                            />
                            </RadioGroup>
                            </Box>
                            <FormControl sx={{ m: 1, minWidth: "90%"}} size="small">
                                <Select
                                //labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={country}
                                //label="Age"
                                onChange={handleChange}
                                border="none !important"
                            
                                sx={{py:1,
                                    borderRadius:10,
                                    backgroundColor:"#fcf1ea",
                                    boxShadow:"none",
                                    border:"hidden"
                                }} 
                                >
                                <MenuItem sx={{borderRadius:10}} value={10}>Select Sepcies</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>Canine</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>Test</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>1234</MenuItem>
                               
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: "90%",py:1}} size="small">
                                <Select
                                //labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={country}
                                //label="Age"
                                onChange={handleChange}
                                border="none !important"
                              
                                sx={{
                                    borderRadius:10,
                                    backgroundColor:"#fcf1ea",
                                    boxShadow:"none",
                                    border:"hidden"
                                }} 
                                >
                                <MenuItem sx={{borderRadius:10}} value={10}>Select Breed</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>Lizard</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>Horse</MenuItem>
                                <MenuItem sx={{borderRadius:10}} value={10}>Cat</MenuItem>

                                </Select>
                            </FormControl>
                            <InputBase
                                sx={{ 
                                    mt:1,
                                    pl:2,
                                    py:1,
                                    ml: 1, 
                                    flex: 1,
                                    bgcolor:"#fcf1ea", 
                                   // color:"#" ,
                                    fontWeight:700,
                                    width:"90%",
                                    borderRadius:10,
                                }}
                                //placeholder="Type your Email / Phone Number"
                                inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"dd/mm/yyyy" }}
                                endAdornment={
                                    <InputAdornment position="end">
                                      <CalendarMonthSharp size={20} sx={{mr:1}} />
                                    </InputAdornment>
                                  }
                            />

                           {/*} <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            label="dd/mm/yyyy"
                            sx={{
                                    width:"90%",
                                    m:1,
                                    py:1,
                                    bgcolor:"#fcf1ea",
                                    borderRadius:10,
                                    boxShadow:"none",
                                    blockOverflow:"ellipsis"
                                }}
                            renderInput={(props) => (
                                <InputBase
                                sx={{ 
                                mt:1,
                                pl:2,
                                py:1,
                                ml: 1, 
                                flex: 1,
                                bgcolor:"#fcf1ea", 
                                //color:"#6fb09a" ,
                                fontWeight:700,
                                width:"10%",
                                borderRadius:10,
                                 }}
                            />
                            )}
                            //slotProps={{ textField: { size: "small"}}}
                            />
                                </LocalizationProvider>*/}
                            <Box display="flex" sx={{mt:20,ml:5,gap:2}}
                           > 
                            <Button variant="contained" color="primary" sx={{borderRadius:10,color:"#fff",width:150}}
                            onClick={handleClose}
                            >close</Button>
                            <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:150}}
                            >Register</Button>
                            </Box>
                        </Box>
                    </Box>
               
            </Box>
            
        </Box>
    </Grid>   
      </Modal>
<Grid conatiner sx={{mt:2}}>
      <Typography sx={{fontSize:22,color:"#252354"}}>
        Select Your Pet
      </Typography>
      <Link to="/BookingDet">
     <Typography sx={{textTransform:"uppercase",color:"#fff",bgcolor:"#252354",p:3,width:200,justifyItems:"center",ml:85,fontWeight:"bold",fontSize:20}}>orio</Typography>
     </Link>
    <Button variant="contained" color="primary"  sx={{borderRadius:10,fontWeight:700,m:2,pl:5,pr:5,fontSize:16}} onClick={handleOpenPetmodal}>add new pet</Button> 
    <Modal
        open={openPetmodal}
        onClose={handlePetClose}
        aria-labelledby="variant-modal-title"
        aria-describedby="variant-modal-description"  
      >
        
        <Grid container sx={{justifyContent:"center",justifyItems:"center",mt:2}}>
        <Box sx={{bgcolor:"#e2e2e2", height:"auto",width:700,fontSize:"1rem",justifyContent:"center",justifyItems:"center",my:2}}>
            <Box sx={{height:70,bgcolor:"#a61c00"}} id="variant-modal-title">
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
                   add pet
                </Typography>
            </Box>
                <Grid conatiner sx={{alignItems:"center",justifyContent:"center",mt:2}}>
                <InputBase
                    sx={{ 
                    mt:1,
                    pl:2,
                    py:1,
                    ml: "20%", 
                    flex: 1,
                    bgcolor:"#fcf1ea", 
                    //color:"#6fb09a" ,
                    fontWeight:700,
                    width:"60%",
                    borderRadius:10,
                        }}
                    placeholder="Patient Name"
                    inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Patient Name" }}
                />
                <Box display="flex" sx={{width:"60%",ml:"20%"}}>
                    <InputBase
                    sx={{ 
                    mt:1,
                    pl:2,
                    py:1,
                    //ml: 3, 
                    flex: 1,
                    bgcolor:"#fcf1ea", 
                    //color:"#6fb09a" ,
                    fontWeight:700,
                    width:"100%",
                    borderRadius:10,
                        }}
                    placeholder="Weight"
                    inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"Weight" }}
                />
                <RadioGroup
                sx={{
                    "& .MuiSvgIcon-root": {
                    fontSize: 17,
                    ml: 1,
                    py:1,
                    //width:"20%"
                    },
                }}
                size="small"
                row
                name="radio-buttons-group"
                >
                <FormControlLabel
                    sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                    value="KG"
                    control={<Radio />}
                    label="KG"
                />
                <FormControlLabel
                    sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                    value="LB"
                    control={<Radio />}
                    label="LB"
                />
                <FormControlLabel
                    sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                    value="OZ"
                    control={<Radio />}
                    label="OZ"
                />
                <FormControlLabel
                    sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                    value="G"
                    control={<Radio />}
                    label="G"
                />
                </RadioGroup>
                </Box>
                <FormControl sx={{ ml: "20%",mt:1, minWidth: "60%"}} size="medium">
                    <Select
                    //labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={country}
                    //label="Age"
                    onChange={handleChange}
                    border="none !important"
                            
                    sx={{//py:1,
                        borderRadius:10,
                        backgroundColor:"#fcf1ea",
                        boxShadow:"none",
                        border:"hidden"
                    }} 
                    >
                    <MenuItem sx={{borderRadius:10}} value={10}>Select Sepcies</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>Canine</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>Test</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>1234</MenuItem>
                               
                    </Select>
                </FormControl>
                <FormControl sx={{ ml:"20%",mt: 1, minWidth: "60%"}} size="medium">
                    <Select
                    //labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={country}
                    //label="Age"
                    onChange={handleChange}
                    border="none !important"
                              
                    sx={{
                        borderRadius:10,
                        backgroundColor:"#fcf1ea",
                        boxShadow:"none",
                        border:"hidden"
                    }} 
                    >
                    <MenuItem sx={{borderRadius:10}} value={10}>Select Breed</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>Lizard</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>Horse</MenuItem>
                    <MenuItem sx={{borderRadius:10}} value={10}>Cat</MenuItem>

                    </Select>
                </FormControl>
                <InputBase
                    sx={{ 
                        mt:1,
                        pl:2,
                        py:1,
                        ml: "20%", 
                        flex: 1,
                        bgcolor:"#fcf1ea", 
                        // color:"#" ,
                        fontWeight:700,
                        width:"60%",
                        borderRadius:10,
                    }}
                    //placeholder="Type your Email / Phone Number"
                    inputProps={{ 'aria-label': 'search by your E-mail/Phone',placeholder:"dd/mm/yyyy" }}
                    endAdornment={
                        <InputAdornment position="end">
                            <CalendarMonthSharp size={20} sx={{mr:1}} />
                        </InputAdornment>
                        }
                />   
                <Box display="flex" sx={{mt:3,ml:"20%",gap:2,mb:8,width:"60%",justifyContent:"center",alignItems:"center"}}
                           > 
                            <Button variant="contained" color="primary" sx={{borderRadius:10,color:"#fff",width:150,fontWeight:"bold"}}
                            onClick={handlePetClose}
                            >close</Button>
                            <Button variant="contained" color="secondary" sx={{borderRadius:10,color:"#fff",width:200,fontWeight:"bold"}}
                            >Save Changes</Button>
                            </Box>       
                </Grid>
            </Box>
       </Grid>
    </Modal>
    </Grid>
     </ThemeProvider>
</>
     
    )
}