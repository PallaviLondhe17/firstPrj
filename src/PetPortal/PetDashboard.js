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
  Grid,
} from "@mui/material";
import {
  blue,
  blueGrey,
  green,
  grey,
  purple,
  pink,
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
export default function PetDashboard() {
  let navigate = useNavigate();
  return (
    <>
     
        <Menubar />
   
       <Grid container>
        
        <MainPortal />
        
        <Grid xs={9} sx={{p:2}}>
            <Accordion sx={{mb:2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    My Pets
                  </Typography>
                </Box>
                <Link to="/AddPatient">
                  <ThemeProvider theme={theme}>
                    <Button
                      sx={{ mr: 1, flexGrow: 0 }}
                      variant="contained"
                      size="medium"
                      color="success"
                      startIcon={<AddIcon />}
                      // onClick={() => {
                      // navigate("/AddPatient");
                      // }}
                    >
                      Add Patient
                    </Button>
                  </ThemeProvider>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex">
                  <Paper
                    component="div"
                    sx={{ m: 3, width: 300 }}
                    variant="outlined"
                    display="wrap"
                  >
                    <Box
                      component="div"
                      display="flex"
                      sx={{ m: 1, width: 300 }}
                    >
                      <PetsSharpIcon
                        sx={{ m: 2, width: 70, height: 70, color: green[700] }}
                      />
                      <Box component="div" sx={{ mt: 2, width: 100 }}>
                        <Typography
                          sx={{
                            textJustify: "center",
                            fontSize: 17,
                            fontWeight: 900,
                          }}
                        >
                          Test Pet
                        </Typography>
                        <Typography sx={{ fontSize: 13 }}>Lizard </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontSize: 13, color: grey["A400"] }}
                        >
                          7 lbs
                        </Typography>
                      </Box>
                      <Box sx={{ width: 50 }}>
                        <Avatar sx={{ ml: 5, mt: 2, bgcolor: "#26a69a" }}>
                          A
                        </Avatar>
                      </Box>
                    </Box>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <EditIcon
                        onClick={() => {
                          navigate("/ModifyPatient");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <CalendarMonthIcon
                        onClick={() => {
                          navigate("/ReqApp");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <MenuBookIcon />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <ChangeCircleIcon
                        onClick={() => {
                          navigate("/Refill");
                        }}
                      />
                    </Fab>
                  </Paper>

                  <Paper
                    component="div"
                    sx={{ m: 3, width: 300 }}
                    variant="outlined"
                    display="wrap"
                  >
                    <Box
                      component="div"
                      display="flex"
                      sx={{ m: 1, width: 300 }}
                    >
                      <PetsSharpIcon
                        sx={{ m: 2, width: 70, height: 70, color: green[700] }}
                      />
                      <Box component="div" sx={{ mt: 2, width: 100 }}>
                        <Typography
                          sx={{
                            textJustify: "center",
                            fontSize: 17,
                            fontWeight: 900,
                          }}
                        >
                          Remo
                        </Typography>
                        <Typography sx={{ fontSize: 13 }}>Lizard </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontSize: 13, color: grey["A400"] }}
                        >
                          9 lbs
                        </Typography>
                      </Box>
                      <Box sx={{ width: 50 }}>
                        <Avatar sx={{ ml: 5, mt: 2, bgcolor: "#26a69a" }}>
                          Z
                        </Avatar>
                      </Box>
                    </Box>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <EditIcon
                        onClick={() => {
                          navigate("/ModifyPatient");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <CalendarMonthIcon
                        onClick={() => {
                          navigate("/ReqApp");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <MenuBookIcon />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <ChangeCircleIcon
                        onClick={() => {
                          navigate("/Refill");
                        }}
                      />
                    </Fab>
                  </Paper>

                  <Paper
                    component="div"
                    sx={{ m: 3, width: 300 }}
                    variant="outlined"
                    display="wrap"
                  >
                    <Box
                      component="div"
                      display="flex"
                      sx={{ m: 1, width: 300 }}
                    >
                      <PetsSharpIcon
                        sx={{ m: 2, width: 70, height: 70, color: green[700] }}
                      />
                      <Box component="div" sx={{ mt: 2, width: 100 }}>
                        <Typography
                          sx={{
                            textJustify: "center",
                            fontSize: 17,
                            fontWeight: 900,
                          }}
                        >
                          Orio
                        </Typography>
                        <Typography sx={{ fontSize: 13 }}>Lizard </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontSize: 13, color: grey["A400"] }}
                        >
                          7.60 lbs
                        </Typography>
                      </Box>
                      <Box sx={{ width: 50 }}>
                        <Avatar sx={{ ml: 5, mt: 2, bgcolor: "#26a69a" }}>
                          y
                        </Avatar>
                      </Box>
                    </Box>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <EditIcon
                        onClick={() => {
                          navigate("/ModifyPatient");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <CalendarMonthIcon
                        onClick={() => {
                          navigate("/ReqApp");
                        }}
                      />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <MenuBookIcon />
                    </Fab>
                    <Fab
                      size="small"
                      sx={{ m: 2, color: "#26a69a", bgcolor: grey[50] }}
                    >
                      <ChangeCircleIcon
                        onClick={() => {
                          navigate("/Refill");
                        }}
                      />
                    </Fab>
                  </Paper>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{mb:2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0"}}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    My Appointments
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No Current Appointments</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{mb:2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0"}}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    Reminders
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex">
                  <Paper
                    component="div"
                    sx={{ m: 3, width: "fit-content" }}
                    variant="outlined"
                    display="wrap"
                  >
                    <Box
                      component="div"
                      // display="flex"
                      sx={{ m: 1, width: 300 }}
                    >
                      <PetsSharpIcon
                        sx={{
                          mt: 2,
                          width: 90,
                          height: 100,
                          color: green[700],
                        }}
                      />
                      <Box component="div" sx={{ mt: 1, width: 300 }}>
                        <Typography
                          sx={{
                            textJustify: "center",
                            fontSize: 17,
                            fontWeight: 900,
                            color: "#5c6bc0",
                          }}
                        >
                          Orio
                        </Typography>{" "}
                      </Box>
                      <Box sx={{ width: 300 }}>
                        <ThemeProvider theme={th}>
                          <Button
                            variant="contained"
                            color="green"
                            sx={{ fontWeight: 900, width: 260 }}
                            endIcon={<AddIcon />}
                          >
                            Next 45 Days
                          </Button>
                        </ThemeProvider>
                      </Box>
                      <Box
                        sx={{ width: 300, mt: 2, mb: 2, alignItems: "center" }}
                      >
                        <ThemeProvider theme={th}>
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{ fontWeight: 900, width: 260 }}
                            endIcon={<AddIcon />}
                          >
                            Active Reminders
                          </Button>
                        </ThemeProvider>
                      </Box>
                    </Box>
                  </Paper>

                  <Paper
                    component="div"
                    sx={{ m: 3, width: "fit-content" }}
                    variant="outlined"
                    display="wrap"
                  >
                    <Box
                      component="div"
                      // display="flex"
                      sx={{ m: 1, width: 300 }}
                    >
                      <PetsSharpIcon
                        sx={{
                          mt: 2,
                          width: 90,
                          height: 100,
                          color: green[700],
                        }}
                      />
                      <Box component="div" sx={{ mt: 1, width: 300 }}>
                        <Typography
                          sx={{
                            textJustify: "center",
                            fontSize: 17,
                            fontWeight: 900,
                            color: "#5c6bc0",
                          }}
                        >
                          Orio
                        </Typography>{" "}
                      </Box>
                      <Box sx={{ width: 300 }}>
                        <ThemeProvider theme={th}>
                          <Button
                            variant="contained"
                            color="green"
                            sx={{ fontWeight: 900, width: 260 }}
                            endIcon={<AddIcon />}
                          >
                            Next 45 Days
                          </Button>
                        </ThemeProvider>
                      </Box>
                      <Box
                        sx={{ width: 300, mt: 2, mb: 2, alignItems: "center" }}
                      >
                        <ThemeProvider theme={th}>
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{ fontWeight: 900, width: 260 }}
                            endIcon={<AddIcon />}
                          >
                            Active Reminders
                          </Button>
                        </ThemeProvider>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{mb:2}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    My Financial
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex">
                  <Paper
                    component="div"
                    display="wrap"
                    sx={{ width: 340, m: 1, backgroundColor: "#26a69a" }}
                  >
                    <Box display="flex">
                      <Box sx={{ textAlign: "left", ml: 2 }}>
                        <Typography
                          sx={{
                            mt: 2,
                            fontSize: 19,
                            color: "whitesmoke",
                            fontWeight: 900,
                          }}
                        >
                          1161.22
                        </Typography>
                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: 15,
                            color: "whitesmoke",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            mb: 2,
                          }}
                        >
                          Invoice Balance
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2, mb: 2, width: 150 }}>
                        <AccountBalanceWalletSharpIcon
                          size="large"
                          sx={{
                            width: 90,
                            height: 40,
                            color: "whitesmoke",
                            fontSize: 50,
                            ml: 10,
                          }}
                        />
                      </Box>
                    </Box>
                  </Paper>
                  <Paper
                    component="div"
                    display="wrap"
                    sx={{ width: 340, m: 1, backgroundColor: pink[400] }}
                  >
                    <Box display="flex">
                      <Box sx={{ textAlign: "left", ml: 2 }}>
                        <Typography
                          sx={{
                            mt: 2,
                            fontSize: 19,
                            color: "whitesmoke",
                            fontWeight: 900,
                            textTransform: "uppercase",
                          }}
                        >
                          All Invoices
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2, mb: 2, width: 150 }}>
                        <NewspaperSharpIcon
                          size="large"
                          sx={{
                            width: 90,
                            height: 40,
                            color: "whitesmoke",
                            fontSize: 50,
                            ml: 10,
                          }}
                        />
                      </Box>
                    </Box>
                  </Paper>
                  <Paper
                    component="div"
                    display="wrap"
                    sx={{ width: 340, m: 1, backgroundColor: blue[400] }}
                  >
                    <Box display="flex">
                      <Box sx={{ textAlign: "left", ml: 2 }}>
                        <Typography
                          sx={{
                            mt: 2,
                            fontSize: 15,
                            color: "whitesmoke",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            mb: 2,
                          }}
                        >
                          All Payments
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2, mb: 2, width: 150 }}>
                        <PaymentsSharpIcon
                          size="large"
                          sx={{
                            width: 90,
                            height: 40,
                            color: "whitesmoke",
                            fontSize: 50,
                            ml: 10,
                          }}
                        />
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </AccordionDetails>
            </Accordion>
          
        </Grid>
      </Grid>
    </>
  );
}
