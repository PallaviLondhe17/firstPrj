import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
  Box,
  Grid,
} from "@mui/material";
import { green, indigo, grey, blue } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";

const themes = createTheme({
  palette: {
    primary: {
      main: "#293a50",
    },
    secondary: indigo,
  },
});
export default function Menubar() {
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
  return ( 
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={themes}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              Wrap
              sx={{ fontWeight: 548,display: { xs: 'flex', sm: 'flex' },width:"fit-content"  }}
            >
              Animal Astro
            </Typography>
            <Box sx={{ flexGrow: 1}}>
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <IconButton size="large"> 
              <ChatIcon sx={{margin:"auto",paddingLeft:150,color:"#fff"}}/>
              </IconButton>
            
              <Tooltip title="Open settings">
              
                <IconButton size="large" onClick={handleOpenUserMenu}>
                  <Avatar
                    src="/broken-image.jpg"
                    sx={{ bgcolor: green[700],margin:"auto" }}
                  />
                </IconButton>
              </Tooltip>
              <Typography
                component="div"
                sx={{fontWeight: 500, mt: 2,mr:5 }}
              >
                Test
              </Typography>
            </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      </Box>
  
  );
}