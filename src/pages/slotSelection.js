import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/joy/Box';
import {ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import image from './istockphoto-1126645371-612x612.jpeg'
import Divider from '@mui/material/Divider';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import CardCover from '@mui/joy/CardCover';
import MaterialTypography, {typographyClasses as muiTypographyClasses,} from '@mui/material/Typography';
import JoyTypography, {typographyClasses as joyTyographyClasses,} from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/joy';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawer from './actions/drawerPage';
import MaterialButton,{Button as muiButton}  from '@mui/material/Button';
import {useNavigate} from "react-router-dom" 
import Input from '@mui/joy/Input';
import NativeSelect from '@mui/material/NativeSelect';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';




const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.primary,
    maxWidth: 250,
  }));
  
  
export default function SlotSelection() {
    const current = new Date();
  let monthvar=current.getMonth();
  let yearvar=current.getFullYear();
  let d= new Date(current.getFullYear(), current.getMonth(), 0);
  let mon=new Date(current.getFullYear(), 0, 0)
  const locale = 'en';
  const [variant, setVariant] = React.useState('solid');
  const [dialog, setDialog] = React.useState(undefined);

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
          <MaterialTypography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM</MaterialTypography>
        </Stack>
     </Stack>
 </Box>
     <Box sx={{mt:3,display: 'flex',ml:50,flexWrap: 'wrap'}}>
     <Box component='label'  sx={{mr:10,mt:1}}>
     <MaterialTypography sx={{fontSize:15}}>Type your Email/Phone number </MaterialTypography>
     </Box>
     <Box>
     <TextField required size='small' value='pallavi.londhe@sygina.com' type="search" id="search" placeholder='Search your Information' sx={{width: 300 }} />
     <MaterialButton
          variant="contained"
          size="small"
          sx={{height:40,fontWeight: 300 }}
          
      >Search</MaterialButton>
     </Box>
     </Box>
     <Box onClick ={()=>{ navigate("/petPage")}}
     sx={{ml:60,mt:5,width:400,border: '1px solid grey',textAlign:'left'}}>
     <MaterialTypography sx={{ml:3,mt:3,mb:3}}> Name : Pallavi Londhe<br/>Address : Mumbai,near rajiv bridge
     </MaterialTypography>
     </Box>
     <Box sx={{ mb:10,mt:5,ml: 55,display: 'flex', gap: 3, flexWrap: 'wrap',height:50}}>
     <MaterialButton
     disabled
     size="small"
     color="success"
     variant="contained"
     sx={{fontWeight: 300 }}
     onClick={() => {
      setDialog('plain');
    }}
   >register</MaterialButton>
     <MaterialButton
     
          size="small"
          color="success"
          variant="contained"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          WALK-IN APPOINTMENT BOOKING
        </MaterialButton>   
        <MaterialButton
          variant="contained"
          size="small"
          sx={{fontWeight: 300,display:'none' }}
          onClick ={()=>{ navigate("/slotSelection")}}
        >
          VIRTUAL APPOINTMENT BOOKING
        </MaterialButton> 
     </Box>  


     <Modal open={!!dialog} onClose={() => setDialog(undefined)}>
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
          variant={dialog}
        >
          <ModalClose />
          <JoyTypography level='h2' id="variant-modal-title" component="h2" level="inherit">
            Add Quick Client Patient
          </JoyTypography>
         <divider/>
        <Box sx={{width:570,mt:3}}>
          <JoyTypography level='h2' id="variant-modal-description" textColor="inherit">
            Client Details
          </JoyTypography>
          <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             inputSizeSmall:'small',
             pr:11
            }} placeholder="First Name" />
            <Input sx=
            {{
               "--Input-paddingInline": "10px",
               "--Input-radius": "3px",
               "--Input-minHeight": "37px",
               fontSize: 'var(--joy-fontSize-sm)',
               pr:11
            }} placeholder="Last Name" />
          </Box>
          <Box sx={{mt:2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Input sx=
            {{
               "--Input-paddingInline": "10px",
               "--Input-radius": "3px",
               "--Input-minHeight": "37px",
               fontSize: 'var(--joy-fontSize-sm)',
               pr:11
            }}
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
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}
             placeholder="City" />
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}
             placeholder="Postal Code" />
             </Box>
             <Box sx={{mt:2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}
             placeholder="Phone Number" />
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             pr:11
            }}
             placeholder="Email Address" />
          </Box>
          <JoyTypography level='h2' id="variant-modal-description" textColor="inherit">
            Patient Details
          </JoyTypography>
          <Box sx={{mt:2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:200
            }}
             placeholder="Patient Name" />
            <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:70,

            }}
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
             <Input sx=
            {{ "--Input-paddingInline": "10px",
             "--Input-radius": "3px",
             "--Input-minHeight": "37px",
             fontSize: 'var(--joy-fontSize-sm)',
             width:200,
             mt:2,pr:11
            }}
             placeholder="DOB" />
      </Box>
      <Box
      sx={{gap:4,mt:5,ml:50,display:'flex'}}
      >
      <MaterialButton
      sx={{width:50}}
          variant="soft"
          size="small" 
        >
         close
        </MaterialButton> 
      <MaterialButton
      sx={{width:60, "--Input-radius": "1px"}}
          variant="contained"
          size="small" 
        >
         save
        </MaterialButton> 
      </Box>
        </ModalDialog>
      </Modal>
    </>
  )
}