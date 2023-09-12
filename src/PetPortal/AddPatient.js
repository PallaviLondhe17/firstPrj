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

export default function AddPatient() {
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
            <Accordion defaultExpanded={true} >
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
                    Add Patient
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
                    height={800}
                    sx={{ ml: 23, flexWrap: "wrap" }}
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
                      <PetsRoundedIcon
                        sx={{
                          m: 2,
                          width: 35,
                          height: 35,
                          color: teal[600],
                          //justifyItems:50,
                        }}
                      />
                    </Box>
                    <Typography sx={{ mt: 2 }}>Add Patient for</Typography>
                    <Typography sx={{ fontSize: 14 }}>Test Pat</Typography>
                    <Typography
                      sx={{ fontWeight: 10, fontSize: 15, color: grey[600] }}
                    >
                      General Information
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
                      <TextField
                        sx={{ ml: 4 }}
                        size="small"
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
                        placeholder="Patient Name "
                      />
                    </Box>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <InputLabel
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2 }}
                      >
                        Age
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 4 }}
                        inputProps={{
                          style: {
                            fontSize: 14,
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //padding: 2,
                            //paddingRight: 4,
                            color: "#383838",
                            width: 10,
                            flexWrap: "wrap",
                          },
                        }}
                      />{" "}
                      <InputLabel
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 50,
                          textAlign: "left",
                        }}
                        sx={{ ml: 1 }}
                      >
                        Years
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 1 }}
                        inputProps={{
                          style: {
                            fontSize: "14px",
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //padding: 10,
                            //paddingRight: 4,
                            color: "#383838",
                            width: 10,
                            flexWrap: "wrap",
                          },
                        }}
                      />
                      <InputLabel
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 50,
                          textAlign: "left",
                        }}
                        sx={{ ml: 1 }}
                      >
                        Months
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 1 }}
                        inputProps={{
                          style: {
                            fontSize: 14,
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //paddingLeft: 5,
                            //paddingRight: 4,
                            color: "#383838",
                            width: 10,
                            flexWrap: "wrap",
                          },
                        }}
                      />
                      <InputLabel
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 50,
                          textAlign: "left",
                        }}
                        sx={{ ml: 1 }}
                      >
                        Weeks
                      </InputLabel>
                      <TextField
                        size="small"
                        sx={{ ml: 1 }}
                        inputProps={{
                          style: {
                            fontSize: 14,
                            fontWeight: "bold",
                            //backgroundColor: "#FFF",
                            //paddingLeft: 5,
                            //paddingRight: 4,
                            color: "#383838",
                            width: 10,
                            flexWrap: "wrap",
                          },
                        }}
                      />
                      <InputLabel
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 50,
                          textAlign: "left",
                        }}
                        sx={{ ml: 1 }}
                      >
                        Days
                      </InputLabel>
                    </Box>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        //gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: 14,
                            fontWeight: "bold",
                          },
                          ml: 25,
                          textAlign: "left",
                        }}
                        control={<Checkbox />}
                        label="DOB in Age"
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
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2 }}
                      >
                        Weight
                      </InputLabel>
                      <RadioGroup
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 17,
                            ml: 4,
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
                          value="KG"
                          control={<Radio />}
                          label="KG"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 14,
                              fontWeight: "bold",
                            },
                          }}
                          value="LB"
                          control={<Radio />}
                          label="LB"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 14,
                              fontWeight: "bold",
                            },
                          }}
                          value="OZ"
                          control={<Radio />}
                          label="OZ"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 14,
                              fontWeight: "bold",
                            },
                          }}
                          value="G"
                          control={<Radio />}
                          label="G"
                        />
                      </RadioGroup>
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
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        sx={{ ml: 2 }}
                      >
                        Identification Markings
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
                        placeholder="Identification Markings"
                      />
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
                        Species
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
                        id="select-breed"
                      >
                        Breed
                      </InputLabel>
                      <FormControl sx={{ ml: 4 }} error={breedErr === "true"}>
                        <Select
                          size="small"
                          labelId="select-breed"
                          sx={{ width: 380 }}
                          value={breed}
                          //variant="standard"
                          onChange={handleChange}
                          placeholder="Brees"
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
                          {breedErr === "true" ? "This field is required." : ""}
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
                        id="select-sex"
                      >
                        Sex
                      </InputLabel>
                      <FormControl sx={{ ml: 4 }} error={sexErr === "true"}>
                        <Select
                          size="small"
                          labelId="select-sex"
                          sx={{ width: 380 }}
                          value={sex}
                          //variant="standard"
                          onChange={handleChange}
                          placeholder="Sex"
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
                          {sexErr === "true" ? "This field is required." : ""}
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
                        id="select-color"
                      >
                        Color
                      </InputLabel>
                      <FormControl sx={{ ml: 4 }} error={colorErr === "true"}>
                        <Select
                          size="small"
                          labelId="select-color"
                          sx={{ width: 380 }}
                          value={color}
                          //variant="standard"
                          onChange={handleChange}
                          placeholder="Color"
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
                          {colorErr === "true" ? "This field is required." : ""}
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
                        sx={{ ml: 2 }}
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          width: 160,
                          textAlign: "left",
                        }}
                        id="select-provider"
                      >
                        Preferred Provider
                      </InputLabel>
                      <FormControl sx={{ ml: 4 }}>
                        <Select
                          sx={{ width: 380 }}
                          size="small"
                          labelId="select-provider"
                          value={provider}
                          // variant="standard"
                          onChange={handleProvider}
                          placeholder="Select Preferred Provider"
                          //label="Provider"
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
                            Dr. Cynthia Aswad
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={20}
                          >
                            Dr. Keni
                          </MenuItem>
                          <MenuItem
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                            value={30}
                          >
                            Dr. Shubham Kuar
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {providerErr === "true"
                            ? "This field is required."
                            : ""}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        sx={{
                          width: 60,
                          borderRadius: "1px",
                          bgcolor: teal[600],
                        }}
                        variant="contained"
                        size="small"
                        type="submit"
                      >
                        save
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
