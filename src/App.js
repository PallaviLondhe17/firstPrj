import './App.css';
import {Routes , Route } from "react-router-dom"; 
import EntryPage from './pages/entrypage';
import ClinicPage from './pages/clinicpage';
import ProviderPage from './pages/providerPage';
import DaywiseCalender from './pages/daywiseCalender';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Divider from '@mui/material/Divider';
import Slot from './pages/slot';
import SlotSelection from './pages/slotSelection';
import ConfirmPage from './pages/confirmPage';
import PetPage from './pages/petPage';
import {Link} from "react-router-dom"; 
import BookingDetails from './pages/bookingDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slot_n from './pages/slot_n';

const theme = createTheme({
  typography: {
    poster: {
      fontSize: '1.2rem',
      color: 'red',
      fontWeight:'bold'
    },
    h3: true,
    h5:{fontSize: '2rem'
    ,fontWeight:'bold'
    }
  },
});


function App() {
  return (
    <div className="App"> 
    <Box sx={{ml:40, width: 700 , px: 5,py:5,justifyContent: 'center'}}>
    <Typography  variant='h5'  component="div">
      Book Your Appointment
    </Typography>
    </Box>
    <Divider/>
    <Link to="/"/>
    <Routes>  
      <Route path="/" element={<EntryPage/>} />  
      <Route path="/clinicpage" element={<ClinicPage/>} />  
      <Route path="/providerPage" element={<ProviderPage/>} /> 
      <Route path="/daywiseCalender" element={<DaywiseCalender/>} />  
      <Route path="/slot" element={<Slot/>} />
      <Route path="/slot_n" element={<Slot_n/>} />
      <Route path="/slotSelection" element={<SlotSelection/>} /> 
      <Route path="/petPage" element={<PetPage/>} /> 
      <Route path="/confirmPage" element={<ConfirmPage/>} /> 
      <Route path="/bookingDetails" element={<BookingDetails/>} />   
  </Routes> 
  </div> 
  );
}

export default App;
