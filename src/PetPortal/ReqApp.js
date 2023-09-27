import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  Box,
  Paper,
  styled,
  Avatar,
  Fab,
  alpha,
  getContrastRatio,
  InputLabel,
  FormHelperText,
  Checkbox,
  Slide,
  Slider,
  Collapse,
  TextareaAutosize,
  Grid
} from "@mui/material";
import {
  blue,
  blueGrey,
  green,
  grey,
  purple,
  pink,
  teal,
} from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import {
  AddBoxRounded,
  BoltOutlined,
  BorderColorOutlined,
  BorderColorSharp,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Menubar from "./menubar";
import MainPortal from "./MainPortal";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const theme = createTheme({
  palette: {
    contrastThreshold: 4.9,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    subtitle1: {
      fontWeight: 800,
    },
  },
});

export default function ReqApp() {
  const [species, setSpecies] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [patName, setpatName] = React.useState("");
  const [patNameErr, setpatNameErr] = React.useState("");
  const [speciesErr, setspeciesErr] = React.useState("");
  const [breedErr, setbreedErr] = React.useState("");
  const [provider, setProvider] = React.useState("");
  const [providerErr, setProviderErr] = React.useState("");
  const [color, setColor] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [colorErr, setcolorErr] = React.useState("");
  const [sexErr, setsexErr] = React.useState("");
  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");
  const todayStartOfTheDay = today.startOf("day");
  const handleChange = (event) => {
    setSpecies(event.target.value);
  };
  const handleBreed = (event) => {
    setBreed(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (patName === "") {
      setpatNameErr("true");
    }
    if (species === "") {
      setspeciesErr("true");
    }
    if (breed === "") {
      setbreedErr("true");
    }
    if (provider == "") {
      setProviderErr("true");
    }
  };
  const handleProvider = (e) => {
    setProvider(e.target.value);
  };
  const datepickerStyle = { marginTop: "25px" };

  return (
    <>
        <Menubar />
        <Grid container>
        <MainPortal />
        <Grid xs={9} sx={{p:2}}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                //aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    Request For Appointment
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" sx={{ width: 1050 }}>
                  <Box
                    border={1}
                    borderRadius={1}
                    borderColor={grey[300]}
                    width={700}
                    height="auto"
                    sx={{ ml: 23, flexWrap: "wrap", my: 3 }}
                    justifyContent="center"
                  >
                    <Box
                      //variant="outlined"
                      border={3}
                      borderColor={teal[600]}
                      width={80}
                      height={80}
                      borderRadius="50%"
                      margin="auto"
                      sx={{ mt: 1 }}
                    >
                      <ChangeCircleIcon
                        sx={{
                          m: 3,
                          width: 35,
                          height: 35,
                          color: teal[600],
                          //justifyItems:50,
                        }}
                      />
                    </Box>
                    <Typography sx={{ mt: 2 }}>Book Appointment</Typography>
                    <Typography
                      sx={{ fontWeight: 10, fontSize: 15, color: grey[600] }}
                    >
                      All fields are required
                    </Typography>

                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <InputLabel
                        required
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2 }}
                      >
                        Patient Name
                      </InputLabel>
                      <FormControl sx={{ ml: 8 }} error={speciesErr === "true"}>
                        <Select
                          size="small"
                          labelId="select-species"
                          sx={{ width: 380 }}
                          value={species}
                          //variant="standard"
                          onChange={handleChange}
                          placeholder="Species"
                          // label="Species"
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={10}
                          >
                            Canine(Dog)
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={20}
                          >
                            Lizard
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={30}
                          >
                            Tortoise
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {speciesErr === "true"
                            ? "This field is required."
                            : ""}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "left",
                      }}
                    >
                      <InputLabel
                        required
                        sx={{ ml: 2 }}
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        id="select-species"
                      >
                        Clinic
                      </InputLabel>
                      <FormControl sx={{ ml: 8 }} error={speciesErr === "true"}>
                        <Select
                          size="small"
                          labelId="select-species"
                          sx={{ width: 380 }}
                          value="Test"
                          //variant="standard"
                          onChange={handleChange}
                          placeholder="Species"
                          // label="Species"
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={10}
                          >
                            Canine(Dog)
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={20}
                          >
                            Lizard
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={30}
                          >
                            Tortoise
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {speciesErr === "true"
                            ? "This field is required."
                            : ""}
                        </FormHelperText>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "left",
                      }}
                    >
                      <InputLabel
                        required
                        sx={{ ml: 2 }}
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        id="select-species"
                      >
                        Select Date
                      </InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                         
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                          //slots={{ field: SingleInputDateRangeField }}
                          slotProps=
                          {{ textField: 
                            { InputProps: {sx:{fontSize:'14px'}},
                            sx:{bgcolor:'Background',width:200,borderRadius:1,padding: 'initial',ml:8},
                            size:"small" } }}
                          />
                        </LocalizationProvider>
                     
                        <TimePicker
                         slotProps=
                         {{ textField: 
                           { InputProps: {sx:{fontSize:'14px'}},
                           sx:{bgcolor:'Background',width:150,borderRadius:1,padding: 'initial',ml:1},
                           size:"small" } }}
                          disablePast
                        />
                      </LocalizationProvider>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <InputLabel
                        required
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          height: 50,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2, flexBasis: "content" }}
                      >
                        Reason for Appointment
                      </InputLabel>
                      <TextareaAutosize
                        minLength={10}
                        maxLength={50}
                        style={{ marginLeft: 50, width: 300, height: 100 }}
                      />
                    </Box>
                    <Box
                      sx={{
                        // mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <InputLabel
                        required
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2, flexBasis: "content" }}
                      >
                        How should we contact you
                      </InputLabel>
                      <RadioGroup
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 17,
                            ml: 4,
                            my: 2,
                            fontWeight: "bold",
                          },
                        }}
                        size="small"
                        row
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 14,
                              fontWeight: "bold",
                            },
                          }}
                          value="Email"
                          control={<Radio />}
                          label="Email"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 14,
                              fontWeight: "bold",
                            },
                          }}
                          value="SMS"
                          control={<Radio />}
                          label="SMS"
                        />
                      </RadioGroup>
                    </Box>
                    <Box sx={{ my: 2 }}>
                      <Button
                        sx={{
                          width: 120,
                          borderRadius: "1px",
                          bgcolor: teal[600],
                          fontSize: 12,
                          fontWeight: "bold",
                          p: 1,
                        }}
                        variant="contained"
                        size="large"
                        type="submit"
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
    </>
  );
}
