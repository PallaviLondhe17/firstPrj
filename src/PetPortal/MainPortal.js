import * as React from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  createTheme,
  ThemeProvider,
  Avatar,
  Tooltip,
  Fab,
  Collapse,
  Grid
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DraftsIcon from "@mui/icons-material/Drafts";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { green, indigo, grey, blue } from "@mui/material/colors";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import ChatIcon from "@mui/icons-material/Chat";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import AlarmSharpIcon from "@mui/icons-material/AlarmSharp";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menubar from "./menubar";
import PetDashboard from "./PetDashboard";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PaymentHistory from "./PaymentHistory";
import clinicIcon from "./images/harns.jpg"

const themes = createTheme({
  palette: {
    primary: {
      main: "#293a50",
    },
    secondary: indigo,
  },
});

export default function MainPortal() {
  let navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListEvent = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Grid xs={3}>
      <Paper
        sx={{
         // width: "25%",
         // maxWidth: 300,
          ml: 3,
          //mt: 3,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <nav aria-label="main mailbox folders">
          <Box sx={{ mt: 2 }}>
            <img
              width="170px"
              src={clinicIcon}
            />
          </Box>
          <List sx={{ display: "flex" }}>
            <ListItem sx={{ gap: 3, justifyContent:"center",justifyItems:"center" }}>
              <Fab
                //sx={{ ml: 3 }}
                onClick={handleClick}
                size="small"
                variant="extended"
              >
                {" "}
                <LocationOnIcon />
                <KeyboardArrowDownIcon />
              </Fab>
              <Fab  size="small">
                <PhoneIcon />
              </Fab>
              <Fab size="small">
                <MailIcon />
              </Fab>
              <Fab size="small">
                <CalendarMonthIcon />
              </Fab>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              disablePadding
              style={{ backgroundColor: "#293a50", color: "#fff" }}
            >
              <ListItemButton
                onClick={() => {
                  navigate("/PetDashboard");
                }}
              >
                <ListItemIcon>
                  <DashboardSharpIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/Communication");
                }}
              >
                <ListItemIcon>
                  <ChatBubbleIcon />
                </ListItemIcon>
                <ListItemText primary="Communications" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/InvoicePage");
                }}
              >
                <ListItemIcon>
                  <ReceiptLongIcon />
                </ListItemIcon>
                <ListItemText primary="Invoices" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/PaymentHistory");
                }}
              >
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                <ListItemText primary="Payments" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/RequestMain");
                }}
              >
                <ListItemIcon>
                  <EditNoteSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Requests" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              style={{ backgroundColor: "#293a50", color: "#fff" }}
            >
              <ListItemButton onClick={() => {
                  navigate("/PatientDash");
                }}>
                <ListItemIcon>
                  <PetsSharpIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="Orio" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/MedicalRec");
                }}
              >
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Medical Records" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                  navigate("/ReminderList");
                }}>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={(event) => handleListEvent(event, 4)}>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="View Appointments" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/ReqApp");
                }}
              >
                <ListItemIcon>
                  <ChangeCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Request for Refill" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <List>
          <ListItem sx={{ml:1}}>
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: green[900] }}>
                <HouseSharpIcon />
              </Avatar>
              <Box sx={{ ml: 1, textAlign: "center" }}>
                <Typography variant="body1" sx={{}}>
                  Animal Astro
                </Typography>
                <Typography variant="caption" color="grey">
                  gsdfgh,Umm Suqeim, Al Wasl Road , Villa #793,Tamil
                  Nadu,adsdfsfad 856245
                </Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem sx={{ml:1}}>
            <Box sx={{ display: "flex"}}>
              <Avatar sx={{ bgcolor: green[900], }}>
                <AlarmSharpIcon />
              </Avatar>
            </Box>
            <Box sx={{ ml: 7, textAlign: "center" }}>
              <Typography variant="caption" />
              Tue
              <br />
              <Typography variant="caption" color="grey">
                7:30 - 21:00
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
}
