import './App.css';
import {Routes , Route } from "react-router-dom"; 
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
import {Link} from "react-router-dom"; 
import BookingDetails from './pages/bookingDetails';



function App() {
  return (
    <div className="App"> 
    <Box sx={{ml:40, width: 700 , px: 5,py:5,justifyContent: 'center'}}>
    <JoyTypography  TypographyProps='true'  component="div">
      Book Your Appointment
    </JoyTypography>
    </Box>
    <Divider/>
    <Link to="/"/>
    <Routes>  
      <Route path="/" element={<EntryPage/>} />  
      <Route path="/clinicpage" element={<ClinicPage/>} />  
      <Route path="/providerPage" element={<ProviderPage/>} /> 
      <Route path="/daywiseCalender" element={<DaywiseCalender/>} />  
      <Route path="/slot" element={<Slot/>} />
      <Route path="/slotSelection" element={<SlotSelection/>} /> 
      <Route path="/petPage" element={<PetPage/>} /> 
      <Route path="/confirmPage" element={<ConfirmPage/>} /> 
      <Route path="/bookingDetails" element={<BookingDetails/>} />   
  </Routes> 
  </div> 
  );
}

export default App;
