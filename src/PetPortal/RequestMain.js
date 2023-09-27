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
  Refresh,
  UploadFile,
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
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 500 : 900],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function RequestMain() {
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

  return (
    <>
      
        <Menubar />
        <Grid container>
        <MainPortal />

        <Grid xs={9} sx={{p:2}}>
            <Accordion defaultExpanded={true} sx={{mb:2}}>
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
                    Appointment Request
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ width: 1050 }} aria-label="simple table">
                    <TableHead>
                      <TableRow
                        sx={{
                          fontWeight: "bold",
                          bgcolor: green[400],
                        }}
                      >
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          #
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Patient Name
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Clinic
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Date
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Time
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Reason
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Contact
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true} sx={{mb:2}}> 
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
                    Refill Request
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ width: 1050 }} aria-label="simple table">
                    <TableHead>
                      <TableRow
                        sx={{
                          fontWeight: "bold",
                          bgcolor: green[400],
                        }}
                      >
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          #
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Patient Name
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Clinic
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Date of Request
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Prescription
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Quantity
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
    </>
  );
}
