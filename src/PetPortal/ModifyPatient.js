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

export default function ModifyPatient() {
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
                    Modify Patient - Test Pet
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" sx={{ width: 1050, bgcolor: green[400] }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "19px",
                      my: 2,
                      ml: 3,
                      color: "white",
                    }}
                  >
                    General Information
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                    }}
                  >
                    Patient Name :{" "}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      fontWeight: "bold",
                      width: 100,
                      textAlign: "left",
                    }}
                  >
                    Test pet
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 15,
                      width: 50,
                      textAlign: "left",
                    }}
                  >
                    Age :
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      fontWeight: "bold",
                      width: 50,
                      textAlign: "left",
                    }}
                  >
                    6 y
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 21,
                      width: 100,
                      textAlign: "left",
                    }}
                  >
                    Weight :
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      fontWeight: "bold",
                      width: 50,
                      textAlign: "left",
                    }}
                  >
                    7 lbs
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Identification Markings :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                    }}
                  >
                    {" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                    }}
                  >
                    Species :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Lizard{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 4,
                      width: 100,
                      textAlign: "left",
                    }}
                  >
                    Breed :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      width: 100,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Canine{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                    }}
                  >
                    Sex :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 1,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 4,
                      width: 100,
                      textAlign: "left",
                    }}
                  >
                    Color :{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 200,
                      textAlign: "left",
                    }}
                  >
                    Preferred Provider :{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: green[400], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "19px",
                      my: 2,
                      ml: 3,
                      color: "white",
                    }}
                  >
                    Patient's Photo
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Box sx={{ mx: 6 }}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        my: 2,
                        ml: 3,
                        width: 200,
                        textAlign: "left",
                      }}
                    >
                      Head
                    </Typography>
                    <Box sx={{ mt: 3, width: 200 }}>
                      <BorderLinearProgress variant="determinate" value={3} />
                    </Box>
                    <Button color="inherit" size="small">
                      Cancel
                    </Button>
                    <Button
                      sx={{ my: 2, mx: 1 }}
                      size="small"
                      component="label"
                      variant="contained"
                      startIcon={<UploadFile />}
                      href="#file-upload"
                    >
                      Browse
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                  <Box sx={{ mx: 6 }}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        my: 2,
                        ml: 3,
                        width: 200,
                        textAlign: "left",
                      }}
                    >
                      Left
                    </Typography>
                    <Box sx={{ flexGrow: 1, mt: 3, width: 200 }}>
                      <BorderLinearProgress variant="determinate" value={3} />
                    </Box>
                    <Button color="inherit" size="small">
                      Cancel
                    </Button>
                    <Button
                      sx={{ my: 2, mx: 1 }}
                      size="small"
                      component="label"
                      variant="contained"
                      startIcon={<UploadFile />}
                      href="#file-upload"
                    >
                      Browse
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                  <Box sx={{ mx: 6 }}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        my: 2,
                        ml: 3,
                        width: 200,
                        textAlign: "left",
                      }}
                    >
                      Right
                    </Typography>
                    <Box sx={{ flexGrow: 1, mt: 3, width: 200 }}>
                      <BorderLinearProgress variant="determinate" value={3} />
                    </Box>
                    <Button color="inherit" size="small">
                      Cancel
                    </Button>
                    <Button
                      sx={{ my: 2, mx: 1 }}
                      size="small"
                      component="label"
                      variant="contained"
                      startIcon={<UploadFile />}
                      href="#file-upload"
                    >
                      Browse
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: green[400], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "19px",
                      my: 2,
                      ml: 3,
                      color: "white",
                    }}
                  >
                    Additional Information
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Taxable :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Yes{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Microchip Id :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    878976{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Rabies Tag Id :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Yes{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Tattoo Id :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    878976{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Animal Control Number :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Yes{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Tag for Patient Group/Category :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    878976{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Remark :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Yes{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Alert :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    878976{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: 1050, bgcolor: grey[200], mt: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 250,
                      textAlign: "left",
                    }}
                  >
                    Status :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      my: 2,
                      ml: 3,
                      width: 150,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Yes{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      borderRadius: 2,
                      fontSize: "12px",
                      my: 2,
                      ml: 3,
                      width: 100,
                      textAlign: "left",
                    }}
                  >
                    Active{" "}
                  </Button>
                </Box>
                <Button
                  endIcon={<Refresh />}
                  variant="contained"
                  sx={{ bgcolor: teal[800], my: 2, mr: 150 }}
                >
                  Update
                </Button>
              </AccordionDetails>
            </Accordion>
          </Grid>
       
      </Grid>
    </>
  );
}
