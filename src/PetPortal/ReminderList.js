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
  Grid,
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
import TabPanel from "./TabPanel";

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

export default function ReminderList() {
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
      <Box>
        <Menubar />
      </Box>
      <Box display={"flex"}>
        <MainPortal />

        <div>
          <Grid container sx={{ml:2,width:"100%"}} display="grid">
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
                    Reminder List
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <TabPanel/>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </div>
      </Box>
    </>
  );
}
