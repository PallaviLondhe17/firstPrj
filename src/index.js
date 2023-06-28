import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultipleSelectPlaceholder from './staffList/staffList';
import SimpleContainer from './setting/setting';
import EntryPage from './pages/entrypage';
import ClinicPage from './pages/clinicpage';
import ProviderPage from './pages/providerPage';
import DaywiseCalender from './pages/daywiseCalender';
import MaterialTypography, {typographyClasses as muiTypographyClasses,} from '@mui/material/Typography';
import JoyTypography, {typographyClasses as joyTyographyClasses,} from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Slot from './pages/slot';
import SlotSelection from './pages/slotSelection';
import ConfirmPage from './pages/confirmPage';
import PetPage from './pages/petPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Box sx={{ml:70, width: 700 , px: 5,py:5,justifyContent: 'center'}}>
    <JoyTypography  TypographyProps='true'  component="div">
      Book Your Appointment
    </JoyTypography>
    </Box>
    <Divider/>
    <PetPage/>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
