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
import Slot_n from './pages/slot_n';
import MainPortal from './PetPortal/MainPortal';
import AddPatient from './PetPortal/AddPatient';
import PetDashboard from './PetPortal/PetDashboard';
import Refill from './PetPortal/Refill';
import ReqApp from './PetPortal/ReqApp';
import ModifyPatient from './PetPortal/ModifyPatient';
import Communication from './PetPortal/Communication';
import InvoicePage from './PetPortal/InvoicePage';
import PaymentHistory from './PetPortal/PaymentHistory';
import RequestMain from './PetPortal/RequestMain';
import MedicalRec from './PetPortal/MedicalRec';
import PatientDash from './PetPortal/PatientDash';
import ReminderList from './PetPortal/ReminderList';

function App() {
  return (
    <div className="App"> 
    <Routes> 
      <Route path="/" element={<PetDashboard/>} /> 
      <Route path="/AddPatient" element={<AddPatient/>} /> 
      <Route path="/Refill" element={<Refill/>} /> 
      <Route path="/ReqApp" element={<ReqApp/>} /> 
      <Route path="/ModifyPatient" element={<ModifyPatient/>} /> 
      <Route path="/Communication" element={<Communication/>} /> 
      <Route path="/InvoicePage" element={<InvoicePage/>} /> 
      <Route path="/PaymentHistory" element={<PaymentHistory/>} /> 
      <Route path="/RequestMain" element={<RequestMain/>} /> 
      <Route path="/MedicalRec" element={<MedicalRec/>} />
      <Route path="/PatientDash" element={<PatientDash/>} /> 
      <Route path="/ReminderList" element={<ReminderList/>} /> 
{/*

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
*/}
  </Routes> 
  </div> 
  );
}

export default App;
