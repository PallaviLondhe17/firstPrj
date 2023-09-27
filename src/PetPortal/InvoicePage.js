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
} from "@mui/material";
import {
  blue,
  blueGrey,
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
export default function InvoicePage() {
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
                <Box sx={{ width: 700 }} display="flex">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      textAlign: "left",
                      width: 180,
                    }}
                  >
                    Invoices
                  </Typography>
                  <FormControl sx={{ ml: 17 }}>
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
                  <Box sx={{ ml: 30 }}>
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
                  </Box>
                </Box>
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
                      border={1}
                      borderColor={grey[300]}
                      sx={{
                        width: 300,
                        height: 250,
                        borderLeft: 4,
                        borderLeftColor: green[400],
                      }}
                    >
                      <Grid item xs={20} container sx={{ mt: 2 }}>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 17,
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 2,
                            }}
                          >
                            inv_213245
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography
                            display="flex"
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 5,
                            }}
                          >
                            Tax:
                          </Typography>{" "}
                          <Typography sx={{ fontSize: 13 }}>0.00</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              textAlign: "left",
                              alignContent: "left",
                              ml: 2,
                            }}
                          >
                            Invoice
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography
                            sx={{ fontSize: 13, fontWeight: "bold", ml: 5 }}
                          >
                            Discount/Coupon:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            12121.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              textAlign: "left",
                              ml: 2,
                            }}
                          >
                            <PictureAsPdfIcon sx={{ color: blue[400] }} />
                            <PrintIcon sx={{ color: blue[400] }} />
                          </Typography>
                        </Grid>
                        <Grid item xs={5} display="flex">
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 5,
                            }}
                          >
                            Net Total:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            0.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 16,
                              textTransform: "uppercase",
                              textAlign: "left",
                              fontWeight: "bold",
                              ml: 2,
                            }}
                          >
                            AED :121234.00
                          </Typography>
                        </Grid>
                        <Grid item xs={5} display="flex">
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              ml: 5,
                            }}
                          >
                            Balance:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            0.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt: 3 }} />
                      <Box component="div" display="flex">
                        <Typography
                          sx={{
                            fontSize: 13,
                            my: 1,
                            textAlign: "left",
                            ml: 2,
                            fontWeight: "bold",
                          }}
                        >
                          Date: 30 Aug 2023 14:00:40
                        </Typography>
                        <Chip
                          color="success"
                          size="small"
                          sx={{
                            fontSize: 13,
                            ml: 6,
                            my: 1,
                            textTransform: "uppercase",
                            borderRadius: 1,
                          }}
                          label="paid"
                        ></Chip>
                      </Box>
                    </Box>

                    <Box
                      component="li"
                      style={{ listStyle: "none" }}
                      border={1}
                      borderColor={grey[300]}
                      sx={{
                        width: 300,
                        height: 250,
                        borderLeft: 4,
                        borderLeftColor: red[400],
                      }}
                    >
                      <Grid item xs={20} container sx={{ mt: 2 }}>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 17,
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 2,
                            }}
                          >
                            inv_213245
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography
                            display="flex"
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 5,
                            }}
                          >
                            Tax:
                          </Typography>{" "}
                          <Typography sx={{ fontSize: 13 }}>0.00</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              textAlign: "left",
                              alignContent: "left",
                              ml: 2,
                            }}
                          >
                            Invoice
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography
                            sx={{ fontSize: 13, fontWeight: "bold", ml: 5 }}
                          >
                            Discount/Coupon:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            12121.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              textAlign: "left",
                              ml: 2,
                            }}
                          >
                            <PictureAsPdfIcon sx={{ color: blue[400] }} />
                            <PrintIcon sx={{ color: blue[400] }} />
                          </Typography>
                        </Grid>
                        <Grid item xs={5} display="flex">
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              textAlign: "left",
                              ml: 5,
                            }}
                          >
                            Net Total:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            1044.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={20} container>
                        <Grid item xs={5}>
                          <Typography
                            sx={{
                              fontSize: 16,
                              textTransform: "uppercase",
                              textAlign: "left",
                              fontWeight: "bold",
                              ml: 2,
                            }}
                          >
                            AED :121234.00
                          </Typography>
                        </Grid>
                        <Grid item xs={5} display="flex">
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: "bold",
                              ml: 5,
                            }}
                          >
                            Balance:
                          </Typography>
                          <Typography sx={{ ml: 1, fontSize: 13 }}>
                            1044.00
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt: 3 }} />
                      <Box component="div" display="flex">
                        <Typography
                          sx={{
                            fontSize: 13,
                            my: 1,
                            textAlign: "left",
                            ml: 2,
                            fontWeight: "bold",
                          }}
                        >
                          Date: 30 Aug 2023 14:00:40
                        </Typography>
                        <Chip
                          color="warning"
                          size="small"
                          sx={{
                            fontSize: 13,
                            ml: 6,
                            mr: 1,
                            my: 1,
                            textTransform: "uppercase",
                            borderRadius: 1,
                          }}
                          label="pending"
                        ></Chip>
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
