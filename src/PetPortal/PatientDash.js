import Accordion from "@mui/material/Accordion";
import { MobileDatePicker as MuiDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import Calendar from '@mui/icons-material/Event';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
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
  Divider,
  Alert,
  AlertTitle,
  Grid,
  Chip,
} from "@mui/material";
import {
  blue,
  blueGrey,
  green,
  grey,
  purple,
  teal,
  red,
} from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import AddPatient from "./AddPatient";
import { Link, useNavigate } from "react-router-dom";
import Menubar from "./menubar";
import MainPortal from "./MainPortal";
import { AddCircleOutline, EmailOutlined } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import { DatePicker } from "@mui/x-date-pickers";

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

function createData(patientname,stat,weight,birthdate,species,breed,sex,color,pp,taxable,microchip) {
  return { patientname,stat,weight,birthdate,species,breed,sex,color,pp,taxable,microchip };
}

function createA(name,status,follow,providerd){
    return{name,status,follow,providerd}
}

const rows = [
  createData("Orio", <Chip sx={{borderRadius:1,fontSize:"12px"}} color="success" size="small" label="ACTIVE"/>,"7.60 lbs","05/02/2017","Lizard","","","","Surbhi",<Chip sx={{borderRadius:1,fontSize:"12px"}} size="small" color="success" label="YES"/>,"19468999656"),
];

const rowtwo=[
    createA(<Grid><Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Medical Record</Typography>
    <Typography sx={{color:"gray",fontSize:"12px"}}><Calendar sx={{fontSize:"12px"}}/> Feb 02 2021 15:21</Typography></Grid>,
    <Chip label="OPEN" color="success" size="small" sx={{borderRadius:1,fontSize:"12px"}}/>,
    <Grid><Typography sx={{fontSize:"12px",color:red[700]}}>Off</Typography></Grid>,<Grid><Typography sx={{fontSize:"12px",fontWeight:"bold"}}>*Dr. Cynthia Aswad</Typography></Grid>)
]
const rowsone = [
  createData(
    <Box display="flex">
      <EmailIcon sx={{ color: teal[700] }} />
      <Alert sx={{ ml: 1, width: 750 }} icon={false}>
        <AlertTitle sx={{ fontSize: 12, color: "black" }}>
          test has an appointment for Aug 30 2023 at 07:30. Notes:
          $$appointmentnotes$$Call $$clinicphone$$ if you need to change or
          update.
        </AlertTitle>
      </Alert>
    </Box>,
    "22:49 30/Aug/23"
  ),
  createData(
    <Box display="flex">
      <EmailIcon sx={{ color: teal[700] }} />
      <Alert sx={{ ml: 1, width: 750 }} icon={false}>
        <AlertTitle sx={{ fontSize: 12, color: "black" }}>
          test has an appointment for Sep 05 2023 at 07:30. Notes:
          $$appointmentnotes$$Call $$clinicphone$$ if you need to change or
          update.
        </AlertTitle>
      </Alert>
    </Box>,
    "10:24 05/Sep/23"
  ),
];

const greenBase = "#4CAF50";
const greenMain = alpha(greenBase, 9);
const greenSecond = "#8bc34a";
const greenSecMain = alpha(greenSecond, 9);
const th = createTheme({
  palette: {
    green: {
      main: greenMain,
      light: alpha(greenBase, 6),
      dark: alpha(greenBase, 10),
      contrastText: getContrastRatio(greenMain, "#fff") > 1 ? "#fff" : "#111",
      contrastThreshold: 20,
    },
    secondary: {
      main: greenSecMain,
      contrastText: "#fff",
    },
  },
});
export default function PatientDash() {
  let navigate = useNavigate();
  return (
    <>
      <Box width="auto" height="auto">
        <Menubar />
      </Box>
      <Box display={"flex"}>
        <MainPortal />

        <div>
          <Box sx={{ mx: 2, flexBasis: "content" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                 <Grid sx={{ width: 770 }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:210 }}
                  >
                    Patient
                  </Typography>
                </Grid>
                {/*    space for clinic select and date */}
              </AccordionSummary>
              <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Patient Name
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Status
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Weight
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Birthdate
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Species
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Breed
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Sex
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Color
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Preferred Provider
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Taxable
                          </TableCell>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            Microchip ID
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.patientname}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            
                            <TableCell scope="row">{row.patientname}</TableCell>
                            <TableCell scope="row">{row.stat}</TableCell>
                            <TableCell scope="row">{row.weight}</TableCell>
                            <TableCell  scope="row">{row.birthdate}</TableCell>
                            <TableCell scope="row">{row.species}</TableCell>
                            <TableCell scope="row">{row.breed}</TableCell>
                            <TableCell scope="row">{row.sex}</TableCell>
                            <TableCell  scope="row">{row.color}</TableCell>
                            <TableCell  scope="row">{row.pp}</TableCell>
                            <TableCell  scope="row">{row.taxable}</TableCell>
                            <TableCell  scope="row">{row.microchip}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Box sx={{width:1050,mt:2}} display="flex" gap={2}>
            <Accordion sx={{width:1050/2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Grid sx={{ width:"auto" }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:"auto" }}
                  >Medical Records</Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Follow
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Provider
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowtwo.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                        <TableCell  scope="row">{row.name}</TableCell>
                        <TableCell  scope="row">{row.status}</TableCell>
                        <TableCell  scope="row">{row.follow}</TableCell>
                        <TableCell  scope="row">{row.providerd}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{width:1083/2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1acontent"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Grid sx={{ width:"auto" }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:"auto" }}
                  >
                    Appointment
                  </Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Messages
                        </TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsone.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
           </Box>
           <Box sx={{width:1050,mt:2}} display="flex" gap={2}>
            <Accordion sx={{width:1050/2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Grid sx={{ width:"auto" }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:"auto" }}
                  >Boarding</Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Follow
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Provider
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowtwo.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                        <TableCell  scope="row">{row.name}</TableCell>
                        <TableCell  scope="row">{row.status}</TableCell>
                        <TableCell  scope="row">{row.follow}</TableCell>
                        <TableCell  scope="row">{row.providerd}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{width:1083/2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1acontent"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Grid sx={{ width:"auto" }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:"auto" }}
                  >
                    Reminders
                  </Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Messages
                        </TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsone.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
           </Box>

            <Accordion sx={{width:770}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0", mt: 2 }}
              >
                <Grid sx={{ width: 770 }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      fontWeight: 400,
                      textAlign: "left",
                      width: 180,
                    }}
                  >
                    Reminders
                  </Typography>
                  <AddCircleOutline sx={{ color: "white", ml: 1 }} />

                  <FormControl sx={{ ml: 5 }}>
                    <Select
                      size="small"
                      labelId="select-species"
                      sx={{ width: 250, bgcolor: "white" }}
                      value="10"
                      //variant="standard"
                      //onChange={handleChange}
                      placeholder="Animal Astro"
                      // label="Species"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      <MenuItem
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                        value={true}
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
                  </FormControl>
                  <Grid md={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateRangePicker
                      slots={{ field: SingleInputDateRangeField }}
                      slotProps=
                      {{ textField: 
                        { InputProps: {sx:{fontSize:'14px'}},
                        sx:{bgcolor:'Background',width:230,borderRadius:1,padding: 'initial',ml:3},
                        size:"small" } }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  //variant="outlined"
                  border={3}
                  borderColor={red[400]}
                  width={80}
                  height={80}
                  borderRadius="50%"
                  margin="auto"
                  sx={{ mt: 1 }}
                >
                  <EmailIcon
                    sx={{
                      m: 2.5,
                      width: 35,
                      height: 35,
                      color: red[400],
                      //justifyItems:50,
                    }}
                  />
                </Box>
                <Typography sx={{ my: 1, fontWeight: "bold" }}>
                  No Messages
                </Typography>
                <Divider />
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      </Box>
    </>
  );
}
