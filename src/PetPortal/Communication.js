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

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Invoice_215", "00:24 05/Sep/23 Invoice_215"),
  createData("Invoice_215", " 00:24 05/Sep/23 Invoice_215"),
  createData("Invoice_215", " 00:24 05/Sep/23 Invoice_215"),
  createData("Invoice_215", " 00:24 05/Sep/23 Invoice_215"),
  createData("Invoice_215", " 00:24 05/Sep/23 Invoice_215"),
];
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
export default function Communication() {
  let navigate = useNavigate();
  return (
    <>
      <Box>
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
                    Emails
                  </Typography>
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
                {/*    space for clinic select and date */}
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ height: 400, width: 1050 }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold" }}>
                            MailBox
                          </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
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
                  <Box display="flex">
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      sx={{ my: 2, mr: 100 }}
                    >
                      Previous{" "}
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      sx={{ my: 2, ml: 10 }}
                    >
                      Next{" "}
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0", mt: 2 }}
              >
                <Grid sx={{ width: 770 }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left",width:210 }}
                  >
                    SMS Communication
                  </Typography>
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
            <Accordion>
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
                    Client Communication
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
