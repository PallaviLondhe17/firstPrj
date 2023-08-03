import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/joy';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/material/Typography';
import MaterialButton,{Button as muiButton}  from '@mui/material/Button';
import {Pets} from '@mui/icons-material';
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
   
export default function PetPage() {
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
       onClick ={()=>{ navigate("/slotSelection")}}>
        <ArrowLeftOutlinedIcon/>
      </IconButton> 
      <Stack direction="row" sx={{width:900}}>
        <Stack sx={{mt:5,bgcolor:'#0277BD',width:80}}> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff',fontSize:27}}>{`${current.getDate()}`}</Item> 
          <Item sx={{bgcolor:'#0277BD',color:'#fff', fontWeight:'soft',borderRadius: 'sm',}}>{`${current.toLocaleDateString(locale, { month: 'long' })}`+` `+`${d.getFullYear()}`}</Item> 
        </Stack>
        <Stack sx={{mt:5,width:500,border: '1px solid grey'}}> 
          <Typography sx={{ml:3,mt:3}}>Akshay Kumar <br/> Timing : 9:00 AM to 9:30 AM <br/>Client Name : Pallavi </Typography>
        </Stack>
     </Stack>
 </Box>
     <Box component='label' sx={{mt:3,display: 'flex',ml:80,flexWrap: 'wrap'}}>
     <Typography variant='h6'>Select Your Pet</Typography>
     </Box>
     <Box 
     sx={{display:'flex',justifyContent:'center',ml:75,mt:5,mb:5,border:'1px solid grey',width:200,height:100}}
     onClick ={()=>{ navigate("/confirmPage")}}>
      <Item sx={{mt:3}}><Pets/></Item><Item sx={{mt:3}}>Max</Item>
     </Box>
         <Box sx={{ mb:10,mt:5,ml: 80,display: 'flex', gap: 3, flexWrap: 'wrap',height:40}}>
        <MaterialButton
          variant="contained"
          size="small"
          onClick={() => {
            setDialog('plain');
          }}
        >
         Add new pet
        </MaterialButton> 
     </Box>  
     <Modal open={!!dialog} onClose={() => setDialog(undefined)}>
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
          variant={dialog}
        >
          <ModalClose />
          <Typography id="variant-modal-title" component="h2">
            Add Quick Client Patient
          </Typography>
         <divider/>
        <Box sx={{width:570,mt:3}}>
          <Typography  id="variant-modal-description">
            Patient Details
          </Typography>
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