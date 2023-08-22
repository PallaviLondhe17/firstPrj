import * as React from "react";
import { Alert, Paper, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FormHelperText from '@mui/material/FormHelperText';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.palette.text.primary,
  maxWidth: 250,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function SlotSelection() {
  const current = new Date();
  let d = new Date(current.getFullYear(), current.getMonth(), 0);
  const locale = "en";
  const [dialog, setDialog] = React.useState(false);
  const [country, setCountry] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [searchValue,setSearchValue]=React.useState("")
  const [warnMsg,setwarnMsg]=React.useState("")
  const [disp,setDisp]=React.useState("none")
  const [er,setEr]=React.useState("false")
  const [man,setMan]=React.useState("false")
  const [addr,setAddr]=React.useState("")
  const [email,setEmail]=React.useState("")
  const [lastName,setLastName]=React.useState("")
  const [firstName,setFirstName]=React.useState("")
  const [patName,setPatName]=React.useState("")
  const [phNo,setPhNo]=React.useState("")
  const [postCode,setPostCode]=React.useState("")
  const [valErr,setValErr]=React.useState("")
  const [cityVal,setCity]=React.useState("")

  const [firstnameErr,setfirstnameErr]=React.useState("")
  const [lastNameErr,setlastNameErr]=React.useState("")
  const [emailErr,setemailErr]=React.useState("")
  const [addrErr,setaddrErr]=React.useState("")
  const [patNameErr,setpatNameErr]=React.useState("")
  const [cityErr,setcityErr]=React.useState("")
  const [postalErr,setpostalErr]=React.useState("")
  const [phErr,setphErr]=React.useState("")
  const [countryErr,setcountryErr]=React.useState("")
  const [speciesErr,setspeciesErr]=React.useState("")
  const handleOpen = () => setDialog(true);
  const handleClose = () => {
    setDialog(false);
    setfirstnameErr("")
    setlastNameErr("")
    setaddrErr("")
    setemailErr("")
    setpatNameErr("")
    setphErr("")
    setspeciesErr("")
    setcityErr("")
    setcountryErr("")
    setpostalErr("")
  }
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleBreed = (event) => {
    setBreed(event.target.value);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };
  
  const handleSearch=(event)=>{
    if(searchValue.trim().length===0){
      setwarnMsg("Please enter correct email id!"); 
    }else{
      setwarnMsg("");
    }
  }
  const handleVal=(event)=>{
    setSearchValue(event.target.value)
  }
  const handleSerBtn=()=>{
    if(searchValue===""){
      setwarnMsg("Please enter email id!"); 
      setMan("true")
      setDisp("block")
      setEr("true")
    }else{
      setwarnMsg("");
      setDisp("none")
      setEr("false")
      setMan("false")
    }
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(firstName===""){
      setfirstnameErr("true")
    } if (lastName==="") {
      setlastNameErr("true")
    } if (addr==="") {
      setaddrErr("true")
    } if (cityVal==="") {
      setcityErr("true")
    } if (postCode==="") {
      setpostalErr("true")
    } if (phNo==="") {
      setphErr("true")
    } if (email==="") {
      setemailErr("true")
    }if (patName==="") {
      setpatNameErr("true")
    }if (country===""){
      setcountryErr("true")
    }if (species===""){
      setspeciesErr("true")
    }
  }
  
  let navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <IconButton
          size="sm"
          sx={{ ml: 40, mt: 5 }}
          color="neutral"
          variant="soft"
          onClick={() => {
            navigate("/slot");
          }}
        >
          <ArrowLeftOutlinedIcon />
        </IconButton>
        <Stack direction="row" sx={{ width: 900 }}>
          <Stack sx={{ mt: 5, bgcolor: "#0277BD", width: 80 }}>
            <Item
              sx={{ bgcolor: "#0277BD", color: "#fff", fontSize: 27 }}
            >{`${current.getDate()}`}</Item>
            <Item
              sx={{
                bgcolor: "#0277BD",
                color: "#fff",
                fontWeight: "soft",
                borderRadius: "sm",
              }}
            >
              {`${current.toLocaleDateString(locale, { month: "long" })}` +
                ` ` +
                `${d.getFullYear()}`}
            </Item>
          </Stack>
          <Stack sx={{ mt: 5, width: 500, border: "1px solid grey" }}>
            <Typography sx={{ ml: 3, mt: 3 }}>
              Akshay Kumar <br /> Timing : 9:00 AM to 9:30 AM
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mt: 3, display: "flex", ml: 50, flexWrap: "wrap" }}>
        <Box component="label" sx={{ mr: 10, mt: 1 }}>
          <Typography sx={{ fontSize: 15 }}>
            Type your Email/Phone number{" "}
          </Typography>
        </Box>
        <Box>
          <TextField
            required={man==="true"}
            error={er==="true"}
            size="small"
            value={searchValue}
            type="search"
            id="search"
            placeholder="Search your Information"
            sx={{ width: 300}}
            onKeyUp={(e)=>handleSearch(e)}
            helperText={warnMsg}
            onChange={handleVal}
          />
          <Button
            variant="contained"
            size="small"
            sx={{ height: 40, fontWeight: 300 }}
            onClick={handleSerBtn}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box style={{display:'none'}}
        onClick={() => {
          navigate("/petPage");
        }}
        sx={{
          ml: 60,
          mt: 5,
          width: 400,
          border: "1px solid grey",
          textAlign: "left",
        }}
      >
        <Typography sx={{ ml: 3, mt: 3, mb: 3 }} >
          {" "}
          Name : Pallavi Londhe
          <br />
          Address : Mumbai,near rajiv bridge
        </Typography>
      </Box>
      
        <Alert style={{display:`${disp}`}}  severity="error" size='large'  sx={{textAlign:'center',pl:30,pr:30,pt:3,pb:5,fontSize:30,ml:40,mr:40,mt:5}}>
            No Data Found !
        </Alert>
        <Button
        style={{display:`${disp}`}}
          //disabled
          size="medium"
         //color="info"
          variant="contained"
          sx={{ fontWeight: 300,ml:80,mt:2}}
          onClick={handleOpen}
        >
          register
        </Button>
        
        <Button
          size="small"
          color="success"
          variant="contained"
          sx={{ fontWeight: 300, display: "none" }}
          onClick={() => {
            navigate("/slotSelection");
          }}
        >
          WALK-IN APPOINTMENT BOOKING
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ fontWeight: 300, display: "none" }}
          onClick={() => {
            navigate("/slotSelection");
          }}
        >
          VIRTUAL APPOINTMENT BOOKING
        </Button>
      <Modal
        open={dialog}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography variant="h6" id="modal-modal-title" component="h6">
            Add Quick Client Patient
          </Typography>
          <Divider />

          <br />
          <Typography
            sx={{ fontSize: 16, fontWeight: 30 }}
            id="modal-modal-description"
            textColor="inherit"
          >
            Client Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 250,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="First Name"
              onChange={e=>setFirstName(e.target.value)}
              value={firstName}
              error={firstnameErr==="true"}
              helperText={firstnameErr==="true"? "This field is required." : ""}
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 250,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Last Name"
              onChange={e=>setLastName(e.target.value)}
              error={lastNameErr==="true"}
              helperText={lastNameErr==="true"? "This field is required." :""}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Address1"
              onChange={e=>setAddr(e.target.value)}
              error={addrErr==="true"}
              helperText={addrErr==="true"? "This field is required." : ""}
            />

            <FormControl error={countryErr==="true"}>
              <InputLabel style={{ fontSize: "12px" }} id="select-country">
                Country
              </InputLabel>
              <Select
                size="small"
                labelId="select-country"
                sx={{ width: 240 }}
                value={country}
                variant="standard"
                onChange={handleChange}
                label="country"
                style={{ fontSize: "12px" }}
               
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  United State
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  India
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  Canada
                </MenuItem>
              </Select>
              <FormHelperText>{countryErr==="true" ? "This field is required." : ""}</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="City"
              onChange={e=>setCity(e.target.value)}
              error={cityErr==="true"}
              helperText={cityErr==="true" ? "This field is required." : ""}
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Postal Code"
              onChange={e=>setPostCode(e.target.value)}
              error={postalErr==="true"}
              helperText={postalErr==="true" ? "This field is required." : ""}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Phone Number"
              onChange={e=>setPhNo(e.target.value)}
              error={phErr==="true"}
              helperText={phErr==="true" ? "This field is required." : ""}
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Email Address"
              onChange={e=>setEmail(e.target.value)}
              error={emailErr==="true"}
              helperText={emailErr==="true"? "This field is required." : ""}
            />
          </Box>
          <br />
          <Typography
            sx={{ fontSize: 16, fontWeight: 30 }}
            id="variant-modal-description"
            textColor="inherit"
          >
            Patient Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 100,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Patient Name"
              onChange={e=>setPatName(e.target.value)}
              error={patNameErr==="true"}
              helperText={patNameErr==="true"? "This field is required." : ""}
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 70,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="0.00"
            />
            <RadioGroup
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 16,
                  ml: 1,
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
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <FormControl error={speciesErr==="true"}>
              <InputLabel style={{ fontSize: "14px" }} id="select-species">
                Species
              </InputLabel>
              <Select
                size="small"
                labelId="select-species"
                sx={{ width: 250 }}
                value={species}
                variant="standard"
                onChange={handleSpecies}
                label="species"
                style={{ fontSize: "12px" }}
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  Canine(Dog)
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  Lizard
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  Tortoise
                </MenuItem>
              </Select>
              <FormHelperText>{speciesErr==="true"? "This field is required" : ""}</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel style={{ fontSize: "14px" }} id="select-breed">
                Breed
              </InputLabel>
              <Select
                size="small"
                labelId="select-breed"
                sx={{ width: 250 }}
                value={breed}
                variant="standard"
                onChange={handleBreed}
                label="breed"
                style={{ fontSize: "12px" }}
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  Alligator
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  Alpine
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  American
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="DOB"
              slotProps={{
                textField: { size: "small" },
                "& .MuiDateField-root": { fontSize: 12 },
              }}
            />
          </LocalizationProvider>

          <Box sx={{ gap: 4, mt: 5, ml: 40, display: "flex" }}>
            <Button
              sx={{ width: 50 }}
              variant="soft"
              size="small"
              onClick={handleClose}
            >
              close
            </Button>

            <Button sx={{ width: 60 }} variant="contained" size="small" value="Submit" type="submit">
              save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
