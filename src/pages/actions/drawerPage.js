import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CssBaseline from '@mui/material/CssBaseline';
import { Global } from '@emotion/react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Skeleton from '@mui/material/Skeleton';

const drawerBleeding = 20;


function SwipeableEdgeDrawer(props) {
const [open, setOpen] = React.useState(false);
const toggleDrawer = (newOpen) => () => {
setOpen(newOpen);
};
return(
    <>
    <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
    >
    <Box component="button"
    variant="outlned"
    sx={{ display:'flex',justifyContent:'center',bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >9:00 AM
    </Box>
    <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      />
    <Skeleton variant="rounded" width={200}/>
    </Global>

    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >9:15 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >9:30 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >9:45 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >10:00 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >10:15 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >10:30 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >10:45 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >11:00 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >11:15 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >11:30 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >11:45 AM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >12:00 PM
    </Box>
    <Box component="button"
    variant="outlned"
    sx={{ bgcolor: 'background.paper',color: 'text.primary', fontSize: 15,pt: 5,ml:65,mt:1, width: 400,borderColor:'primary.main',borderRadius: '5px'}}
    onClick={toggleDrawer(true)}
    >12:15 PM
    </Box>
    </>
    )
}
export default SwipeableEdgeDrawer;