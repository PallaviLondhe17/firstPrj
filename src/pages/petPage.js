import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Divider, IconButton } from "@mui/material";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Pets } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.palette.text.primary,
  maxWidth: 400,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function PetPage() {
  const current = new Date();
  let monthvar = current.getMonth();
  let yearvar = current.getFullYear();
  let d = new Date(current.getFullYear(), current.getMonth(), 0);
  let mon = new Date(current.getFullYear(), 0, 0);
  const locale = "en";
  const [variant, setVariant] = React.useState("solid");
  const [dialog, setDialog] = React.useState(false);
  const [species, setSpecies] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const handleOpen = () => setDialog(true);
  const handleClose = () => setDialog(false);
  let navigate = useNavigate();
  const handleChange = (event) => {
    setSpecies(event.target.value);
  };
  const handleBreed = (event) => {
    setBreed(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <IconButton
          size="sm"
          sx={{ ml: 40, mt: 5 }}
          color="neutral"
          variant="soft"
          onClick={() => {
            navigate("/slotSelection");
          }}
        >
          <ArrowLeftOutlinedIcon />
        </IconButton>
        <Stack direction="row" sx={{ width: 900 }}>
          <Stack sx={{ mt: 5, bgcolor: "#0277BD", width: 80 }}>
            <Item
              sx={{ bgcolor: "#0277BD", color: "#fff", fontSize: 27 }}
            >{`${current.getDate()}`}</Item>
            <Item
              sx={{
                bgcolor: "#0277BD",
                color: "#fff",
                fontWeight: "soft",
                borderRadius: "sm",
              }}
            >
              {`${current.toLocaleDateString(locale, { month: "long" })}` +
                ` ` +
                `${d.getFullYear()}`}
            </Item>
          </Stack>
          <Stack sx={{ mt: 5, width: 500, border: "1px solid grey" }}>
            <Typography sx={{ ml: 3, mt: 3 }}>
              Akshay Kumar <br /> Timing : 9:00 AM to 9:30 AM <br />
              Client Name : Pallavi{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        component="label"
        sx={{ mt: 3, display: "flex", ml: 80, flexWrap: "wrap" }}
      >
        <Typography variant="h6">Select Your Pet</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          ml: 75,
          mt: 5,
          mb: 5,
          border: "1px solid grey",
          width: 200,
          height: 100,
        }}
        onClick={() => {
          navigate("/confirmPage");
        }}
      >
        <Item sx={{ mt: 3 }}>
          <Pets />
        </Item>
        <Item sx={{ mt: 3 }}>Max</Item>
      </Box>
      <Box
        sx={{
          mb: 10,
          mt: 5,
          ml: 80,
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          height: 40,
        }}
      >
        <Button variant="contained" size="small" onClick={handleOpen}>
          Add new pet
        </Button>
      </Box>
      <Modal
        open={dialog}
        onClose={handleClose}
        aria-labelledby="variant-modal-title"
        aria-describedby="variant-modal-description"
      >
        <Box sx={style}>
          <Typography id="variant-modal-title" component="h2">
            Add Quick Client Patient
          </Typography>
          <Divider />
          <Box sx={{ width: 600, mt: 3 }}>
            <Typography
              sx={{ fontSize: 17, fontWeight: 50 }}
              id="variant-modal-description"
            >
              Patient Details
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 2,
                "& .MuiTextField-root": { width: "20ch" },
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <TextField
                size="small"
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: "#FFF",
                    //paddingLeft: 5,
                    //paddingRight: 4,
                    color: "#383838",
                  },
                }}
                placeholder="Patient Name"
              />
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: "#FFF",
                    //paddingLeft: 5,
                    //paddingRight: 4,
                    color: "#383838",
                  },
                }}
                size="small"
                placeholder="0.00"
              />
              <RadioGroup
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 17,
                    ml: 1,
                  },
                }}
                size="small"
                row
                name="radio-buttons-group"
              >
                <FormControlLabel
                  sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
                  value="KG"
                  control={<Radio />}
                  label="KG"
                />
                <FormControlLabel
                  sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
                  value="LB"
                  control={<Radio />}
                  label="LB"
                />
                <FormControlLabel
                  sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
                  value="OZ"
                  control={<Radio />}
                  label="OZ"
                />
                <FormControlLabel
                  sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
                  value="G"
                  control={<Radio />}
                  label="G"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                gap: 7,
                flexWrap: "wrap",
                width: 600,
              }}
            >
              <FormControl>
                <InputLabel style={{ fontSize: "14px" }} id="select-species">
                  Species
                </InputLabel>
                <Select
                  size="small"
                  labelId="select-species"
                  sx={{ width: 270 }}
                  value={species}
                  variant="standard"
                  onChange={handleChange}
                  label="Species"
                  style={{ fontSize: "14px" }}
                >
                  <MenuItem style={{ fontSize: "14px" }} value={10}>
                    Canine(Dog)
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={20}>
                    Lizard
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={30}>
                    Tortoise
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel style={{ fontSize: "14px" }} id="select-breed">
                  Breed
                </InputLabel>
                <Select
                  labelId="select-breed"
                  sx={{ width: 270 }}
                  size="small"
                  variant="standard"
                  value={breed}
                  onChange={handleBreed}
                  style={{ fontSize: "14px" }}
                >
                  <MenuItem style={{ fontSize: "14px" }} value={10}>
                    Alligator
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={20}>
                    Alpine
                  </MenuItem>
                  <MenuItem style={{ fontSize: "14px" }} value={30}>
                    American
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mt: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="DOB"
                  slotProps={{ textField: { size: "small" } }}
                />
              </LocalizationProvider>
            </Box>
          </Box>

          <Box sx={{ gap: 4, mt: 5, ml: 50, display: "flex" }}>
            <Button
              sx={{ width: 50 }}
              variant="soft"
              size="small"
              onClick={handleClose}
            >
              close
            </Button>
            <Button
              sx={{ width: 60, borderRadius: "1px" }}
              variant="contained"
              size="small"
            >
              save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
