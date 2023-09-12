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

export default function Refill() {
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
          <Box sx={{ mx: 2, flexBasis: "100%" }}>
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
                    Request For Refill
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
                    <Typography sx={{ mt: 2 }}>Refill Request</Typography>
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
                      <FormControl sx={{ ml: 4 }} error={speciesErr === "true"}>
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
                      <FormControl sx={{ ml: 4 }} error={speciesErr === "true"}>
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
                        Rx/Prescription
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 4 }}
                        inputProps={{
                          style: {
                            fontSize: 14,
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //paddingLeft: 5,
                            //paddingRight: 4,
                            color: "#383838",
                            marginLeft: 2,
                            width: 350,
                          },
                        }}
                        placeholder="Rx/Prescription"
                      />
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
                          textAlign: "left",
                        }}
                        sx={{ ml: 2 }}
                      >
                        Quantity
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 4 }}
                        inputProps={{
                          style: {
                            fontSize: 14,
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //paddingLeft: 5,
                            //paddingRight: 4,
                            color: "#383838",
                            marginLeft: 2,
                            width: 350,
                          },
                        }}
                        placeholder="Quantity"
                      />
                    </Box>
                    <Box sx={{ my: 2 }}>
                      <Button
                        sx={{
                          width: 80,
                          borderRadius: "1px",
                          bgcolor: teal[600],
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                        variant="contained"
                        size="medium"
                        type="submit"
                      >
                        Request
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      </Box>
    </>
  );
}
