import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
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
  ButtonBase,
} from "@mui/material";
import {
  blue,
  teal,
  green,
  grey,
  purple,
  pink,
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
export default function PaymentHistory() {
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
                sx={{ backgroundColor: "#5c6bc0" }}
              >
                <Grid display="flex" sx={{ width: "auto" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      textAlign: "left",
                      mr: 10,
                    }}
                  >
                    Payment History
                  </Typography>
                  <Grid md={2} sx={{ width: 200 }}>
                    <FormControl sx={{ mr: 4 }}>
                      <Select
                        size="small"
                        labelId="select-species"
                        sx={{ width: 300, bgcolor: "white" }}
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
                  </Grid>
                  <Grid md={2}>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: 14,
                          fontWeight: "bold",
                        },
                        ml: 25,
                        textAlign: "left",
                        width: 300,
                        color: "#fff",
                      }}
                      control={
                        <Checkbox
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Show Only Equine Invoice"
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: 1050 }}>
                  <Box
                    component="ul"
                    style={{ listStyle: "none" }}
                    display="flex"
                    gap={2}
                  >
                    <Box
                      component="li"
                      style={{ listStyle: "none" }}
                      // border={2}
                      borderRadius={6}
                      sx={{ width: 350, height: 200, bgcolor: grey[100] }}
                    >
                      <Box
                        display="flex"
                        gap={10}
                        sx={{
                          width: 350,
                          height: 50,
                          bgcolor: teal[300],
                          borderBottom: 2,
                          borderBottomColor: grey[200],
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 18,
                            my: 2,
                            textAlign: "left",
                            ml: 2,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          Invoice # 12345
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 14,
                            my: 2,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          22 June 2023
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <Box
                          item
                          xs
                          sx={{
                            width: 200,
                            mt: 1,
                            ml: 2,
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 24,
                              textTransform: "uppercase",
                              //fontWeight:"bold",

                              color: green[600],
                            }}
                          >
                            AED 175.00
                          </Typography>

                          <Box
                            component={Button}
                            border={2}
                            borderColor={blue[300]}
                            sx={{ mt: 1, width: 150, alignItems: "left" }}
                          >
                            {" "}
                            Receipt # 4487
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            width: 150,
                            mt: 1,
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            Received
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 19,
                              fontWeight: 500,
                            }}
                          >
                            AED 175.0
                          </Typography>
                          <Typography
                            sx={{
                              mt: 3,
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            MyTest
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      component="li"
                      style={{ listStyle: "none" }}
                      // border={2}
                      borderRadius={6}
                      sx={{ width: 350, height: 200, bgcolor: grey[100] }}
                    >
                      <Box
                        display="flex"
                        gap={10}
                        sx={{
                          width: 350,
                          height: 50,
                          bgcolor: teal[300],
                          borderBottom: 2,
                          borderBottomColor: grey[200],
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 18,
                            my: 2,
                            textAlign: "left",
                            ml: 2,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          Invoice # 12345
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 14,
                            my: 2,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          22 June 2023
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <Box
                          item
                          xs
                          sx={{
                            width: 200,
                            mt: 1,
                            ml: 2,
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 24,
                              textTransform: "uppercase",
                              //fontWeight:"bold",

                              color: green[600],
                            }}
                          >
                            AED 175.00
                          </Typography>

                          <Box
                            component={Button}
                            border={2}
                            borderColor={blue[300]}
                            sx={{ mt: 1, width: 150, alignItems: "left" }}
                          >
                            {" "}
                            Receipt # 4487
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            width: 150,
                            mt: 1,
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            Received
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 19,
                              fontWeight: 500,
                            }}
                          >
                            AED 175.0
                          </Typography>
                          <Typography
                            sx={{
                              mt: 3,
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            MyTest
                          </Typography>
                        </Box>
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
