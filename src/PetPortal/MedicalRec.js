import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";

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
  Checkbox,
  Grid,
  ListItem,
  ListItemText,
  Container,
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
import {
  AddCircleOutline,
  EmailOutlined,
  Label,
  WrapText,
} from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PrintIcon from "@mui/icons-material/Print";
import List from "@mui/material/List";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";

const DivStyle = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

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
export default function MedicalRec() {
  let navigate = useNavigate();
  return (
    <>
     
        <Menubar />
        <Grid container>
        <MainPortal />
        
        <Grid xs={9} sx={{p:2}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0"}}
              >
                <Box sx={{ width: 700 }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      textAlign: "left",
                      width: 180,
                    }}
                  >
                    Orio
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: 1050 }}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: 18, textAlign: "left" }}
                  >
                    Patient Encounters
                  </Typography>

                  <Box
                    component="ul"
                    style={{ listStyle: "none" }}
                    display="flex"
                    // gap={2}
                  >
                    <Box
                      component="li"
                      // style={{ listStyle: "none" }}
                      border={1}
                      borderColor={grey[300]}
                      sx={{
                        width: 400,
                        height: 250,
                        borderTop: 4,
                        borderTopColor: green[400],
                        borderBottom: 4,
                        borderBottomColor: green[400],
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{
                          mt: 2,
                          justifyContent: "left",
                        }}
                      >
                        <Box
                          //variant="outlined"
                          border={3}
                          borderColor={teal[600]}
                          width={120}
                          height={120}
                          borderRadius="50%"
                          marginLeft={2}
                          sx={{ mt: 1 }}
                        >
                          <PetsRoundedIcon
                            sx={{
                              m: 1,
                              width: 100,
                              height: 100,
                              color: teal[600],
                              //justifyItems:50,
                            }}
                          />
                          <Chip
                            color="success"
                            size="small"
                            sx={{
                              my: 1,
                              fontSize: 13,
                              textTransform: "uppercase",
                              borderRadius: 1,
                            }}
                            label="active"
                          ></Chip>
                        </Box>

                        <Grid sx={{ ml: 3 }}>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Patient Name :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Orio{" "}
                            </Typography>
                          </Stack>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Species Name :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Lizard{" "}
                            </Typography>
                          </Stack>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Breed Name :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Can{" "}
                            </Typography>
                          </Stack>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Weight :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              7 lbs{" "}
                            </Typography>
                          </Stack>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Color :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              green{" "}
                            </Typography>
                          </Stack>
                          <Stack direction="row">
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Sex :
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 14 }}
                            >
                              Men{" "}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Stack>
                    </Box>

                    <Box
                      component="li"
                      // style={{ listStyle: "none" }}
                      border={1}
                      borderColor={grey[300]}
                      sx={{
                        width: 400,
                        height: 110,
                        borderTop: 4,
                        borderTopColor: green[400],
                        borderBottom: 4,
                        borderBottomColor: green[400],
                        marginLeft: 2,
                      }}
                    >
                      <Box
                        display="flex"
                        sx={{
                          bgcolor: teal[300],
                          width: 350,
                          height: 60,
                          margin: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            mt: 2,
                            ml: 1,
                          }}
                        >
                          Medical Record
                        </Typography>
                        <Chip
                          sx={{
                            borderRadius: 1,
                            bgcolor: "#fff",
                            color: red[700],
                            fontWeight: "bold",
                            mt: 2,
                            ml: 2,
                          }}
                          label="02 Nov 2023 15:00:01"
                        />
                      </Box>
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
