import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography,Box,Paper, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function SimpleAccordion(){
return(
   
      <Grid container>
         <Grid  xs={8}>
     
            <Accordion sx={{p:1}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#5c6bc0", mt: 2 }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 400, textAlign: "left" }}
                  >
                    My Appointments
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No Current Appointments</Typography>
              </AccordionDetails>
            </Accordion>
          
           </Grid>
           <Grid xs={4}>
         
            <Paper>
                <Typography>Hello</Typography>
            </Paper>
            
            </Grid>
            </Grid>
           
)
}   