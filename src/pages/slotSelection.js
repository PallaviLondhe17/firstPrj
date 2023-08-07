import * as React from 'react';
import {Paper, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom" 
import NativeSelect from '@mui/material/NativeSelect';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.palette.text.primary,
    maxWidth: 250,
  }));
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };   
export default function SlotSelection() {
    const current = new Date();
  let monthvar=current.getMonth();
  let yearvar=current.getFullYear();
  let d= new Date(current.getFullYear(), current.getMonth(), 0);
  let mon=new Date(current.getFullYear(), 0, 0)
  const locale = 'en';
  const [variant, setVariant] = React.useState('solid');
  const [dialog, setDialog] = React.useState(undefined);
  const handleOpen = () => setDialog(true);
  const handleClose = () => setDialog(false);

  let navigate = useNavigate() 
  return (
    <>
<Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
      <IconButton size="sm" sx={{ml:40,mt:5}} color="neutral" variant="soft"
      onClick ={()=>{ navigate("/slot")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack direction="row" sx={{width:900}}>
        <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
        </Stack>
        <Stack sx={{mt:5,width:500,border: '1px solid grey'}}> 
          <Typography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM</Typography>
        </Stack>
     </Stack>
 </Box>
     <Box sx={{mt:3,display: 'flex',ml:50,flexWrap: 'wrap'}}>
     <Box component='label'  sx={{mr:10,mt:1}}>
     <Typography sx={{fontSize:15}}>Type your Email/Phone number </Typography>
     </Box>
     <Box>
     <TextField required size='small' value='pallavi.londhe@sygina.com' type="search" id="search" placeholder='Search your Information' sx={{width: 300 }} />
     <Button
          variant="contained"
          size="small"
          sx={{height:40,fontWeight: 300 }}
          
      >Search</Button>
     </Box>
     </Box>
     <Box onClick ={()=>{ navigate("/petPage")}}
     sx={{ml:60,mt:5,width:400,border: '1px solid grey',textAlign:'left'}}>
     <Typography sx={{ml:3,mt:3,mb:3}}> Name : Pallavi Londhe<br/>Address : Mumbai,near rajiv bridge
     </Typography>
     </Box>
     <Box sx={{ mb:10,mt:5,ml: 55,display: 'flex', gap: 3, flexWrap: 'wrap',height:50}}>
     <Button
     disabled
     size="small"
     color="success"
     variant="contained"
     sx={{fontWeight: 300 }}
     onClick={() => {
      setDialog('plain');
    }}
   >register</Button>
     <Button
     
          size="small"
          color="success"
          variant="contained"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          WALK-IN APPOINTMENT BOOKING
        </Button>   
        <Button
          variant="contained"
          size="small"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          VIRTUAL APPOINTMENT BOOKING
        </Button> 
     </Box>  


     <BootstrapDialog open={dialog} onClose={handleClose}
          aria-labelledby="customized-dialog-title"
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant='h6' id="variant-modal-title" component="h6" >
            Add Quick Client Patient
          </Typography>
          </BootstrapDialogTitle>
          <DialogContent dividers>
        <Box sx={{width:600,mt:2}}>
          <Typography sx={{fontSize:16,fontWeight:30}} id="variant-modal-description" textColor="inherit">
            Client Details
          </Typography>
          <Box component='form' sx={{display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11,fontSize:10}} 
            placeholder="First Name" />
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}} 
            placeholder="Last Name" />
          </Box>
          <Box sx={{mt:2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}}
          /*
            {{
               "--Input-paddingInline": "10px",
               "--Input-radius": "3px",
               "--Input-minHeight": "37px",
               fontSize: 'var(--joy-fontSize-sm)',
               pr:11
            }}
            */
            placeholder="Address1" />
            <NativeSelect
            sx={{width:270}}
            defaultValue={30}
            type='search'
            inputProps={{
            name: 'country',
            id: 'uncontrolled-native',
            }}
            >
            <option value={10}>United State</option>
            <option value={20}>India</option>
            <option value={30}>Canada</option>
            </NativeSelect>
            </Box>
            <Box sx={{mt:2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}}
            /*{{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}*/
             placeholder="City" />
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}}
            /*{{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}*/
             placeholder="Postal Code" />
             </Box>
             <Box sx={{mt:2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}}
            /*{{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}*/
             placeholder="Phone Number" />
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11}}
            /*{{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}*/
             placeholder="Email Address" />
          </Box>
          <Typography sx={{fontSize:16,fontWeight:30}} id="variant-modal-description" textColor="inherit">
            Patient Details
          </Typography>
          <Box sx={{mt:2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11,width:200}}
          /*  {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:200
            }}*/
             placeholder="Patient Name" />
            <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11,width:70}}
           /* {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:70,

            }}*/
             placeholder="0.00" />
            <RadioGroup orientation="horizontal"
              sx={{ gap: 1, mt: 1 }} 
              defaultValue="soft" name="radio-buttons-group">
            <Radio value="KG" label="KG" variant="soft" />
            <Radio value="LB" label="LB" variant="soft" />
            <Radio value="OZ" label="OZ" variant="soft" />
            <Radio value="G" label="G" variant="soft" />
            </RadioGroup>
             </Box>
             <Box sx={{mt:2, display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
             <NativeSelect
             sx={{width:270}}
            defaultValue={30}
            inputProps={{
            name: 'Species',
            id: 'uncontrolled-native',
            }}
            >
            <option value={10}>Canine(Dog)</option>
            <option value={20}>Lizard</option>
            <option value={30}>Tortoise</option>
            </NativeSelect>
            <NativeSelect
            sx={{width:270}}
            defaultValue={30}
            inputProps={{
            name: 'Breed',
            id: 'uncontrolled-native',
            }}
            >
            <option value={10}>Alligator</option>
            <option value={20}>Alpine</option>
            <option value={30}>American</option>
            </NativeSelect>
             </Box>
             <TextField sx={{paddingInline:'10px',minHeight:'37px',pr:11,width:200}}
           /* {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:200,
             mt:2,pr:11
            }}*/
             placeholder="DOB" />
      </Box>
      
         </DialogContent>
         <DialogActions>
      <Button
      sx={{width:50}}
          variant="soft"
          size="small" 
        >
         close
        </Button> 

      <Button
      sx={{width:60, "--Input-radius": "1px"}}
          variant="contained"
          size="small" 
        >
         save
        </Button> 
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}