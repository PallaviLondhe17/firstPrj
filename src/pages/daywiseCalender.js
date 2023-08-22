import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosNewSharp from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharp from "@mui/icons-material/ArrowForwardIosSharp";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import datefile from "./actions/datefile.json";
import { StepButton,Step, SliderThumb } from '@mui/material';

const Item1 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.palette.text.primary,
  maxWidth: 250,
}));
const Arrowicon = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  maxWidth: 5,
}));

export default function DaywiseCalender() {
  const current = new Date();
  let monthvar = current.getMonth();
  let yearvar = current.getFullYear();
  let d = new Date(current.getFullYear(), current.getMonth(), 0);
  let mon = new Date(current.getFullYear(), 0, 0);
  const locale = "en";
  const [variant, setVariant] = React.useState("solid");
  let navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps=datefile.data
  const maxSteps = 4

  const handleNext = () => {
    alert("Hello")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    alert("Hie")
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Box color="neutral" sx={{ p: 4 }}>
        <Box sx={{ justifyContent: "center" }}>
          <Typography component="div">
            Select a Day Of{" "}
            <Box sx={{ textDecoration: "underline" }}> Akshay Kumar</Box>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: 5,
            ml: 30,
            width: 900,
            alignItems: "center",
          }}
        >
         <Step>
         <KeyboardArrowLeft  onClick={handleNext}/>
        </Step> 
          {datefile.data.date.map((dates, index) => (
            <Box 
              sx={{
                display: "fixed",
                flexWrap: "wrap",
                "& > :not(style)": {
                  ml: 2,
                  width: 100,
                  height: 130,
                  backgroundColor: "#A8A8A8",
                  borderRadius: "sm",
                },
              }}
              onClick={() => {
                navigate("/slot");
              }}
            >
              <Paper sx={{ gap: 2 }} elevation={3}>
                <Item1
                  sx={{ bgcolor: "#0277BD", color: "#fff", fontWeight: "bold" }}
                >
                  {dates.day}
                </Item1>
                <Item1 sx={{ fontSize: 27 }}>{dates.date}</Item1>
                <Item1 sx={{ fontWeight: "soft", borderRadius: "sm" }}>
                  {dates.month}
                </Item1>
              </Paper>
            </Box>
          ))}
        <Step>
        <KeyboardArrowRight sx={{ml:2}} onClick={handleBack} />
        </Step>
        
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 20, fontWeight: 600 }}
          onClick={() => {
            navigate("/providerPage");
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}