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
    <>
      <Paper
        sx={{
          width: "100%",
          maxWidth: 300,
          ml: 3,
          //mt: 3,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <nav aria-label="main mailbox folders">
          <Box sx={{ mt: 3 }}>
            <img
              width="170px"
              src="data:image/jpeg;base64,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"
            />
          </Box>
          <List sx={{ display: "flex" }}>
            <ListItem>
              <Fab
                sx={{ ml: 3 }}
                onClick={handleClick}
                size="small"
                variant="extended"
              >
                {" "}
                <LocationOnIcon />
                <KeyboardArrowDownIcon />
              </Fab>
              <Fab sx={{ ml: 2 }} size="small">
                <PhoneIcon />
              </Fab>
              <Fab sx={{ ml: 2 }} size="small">
                <MailIcon />
              </Fab>
              <Fab sx={{ ml: 2 }} size="small">
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
                  navigate("/");
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
          <ListItem>
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: green[900], ml: 2 }}>
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
          <ListItem>
            <Box sx={{ display: "flex" }}>
              <Avatar sx={{ bgcolor: green[900], ml: 2 }}>
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
    </>
  );
}
