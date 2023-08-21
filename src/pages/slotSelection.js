import * as React from "react";
import { Paper, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.palette.text.primary,
  maxWidth: 250,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 550,
  bgcolor: "background.paper",
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function SlotSelection() {
  const current = new Date();
  let d = new Date(current.getFullYear(), current.getMonth(), 0);
  const locale = "en";
  const [dialog, setDialog] = React.useState(false);
  const [country, setCountry] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [searchValue,setSearchValue]=React.useState("")
  const handleOpen = () => setDialog(true);
  const handleClose = () => setDialog(false);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleBreed = (event) => {
    setBreed(event.target.value);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleSearch=(event)=>{
    setSearchValue(event.target.value);
  }
  let navigate = useNavigate();
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
            navigate("/slot");
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
              Akshay Kumar <br /> Timing : 9:00 AM to 9:30 AM
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mt: 3, display: "flex", ml: 50, flexWrap: "wrap" }}>
        <Box component="label" sx={{ mr: 10, mt: 1 }}>
          <Typography sx={{ fontSize: 15 }}>
            Type your Email/Phone number{" "}
          </Typography>
        </Box>
        <Box>
          <TextField
            required
            size="small"
            required
            value={searchValue}
            type="search"
            id="search"
            placeholder="Search your Information"
            sx={{ width: 300 }}
            onChange={handleSearch}
          />
          <Button
            variant="contained"
            size="small"
            sx={{ height: 40, fontWeight: 300 }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box
        onClick={() => {
          navigate("/petPage");
        }}
        sx={{
          ml: 60,
          mt: 5,
          width: 400,
          border: "1px solid grey",
          textAlign: "left",
        }}
      >
        <Typography sx={{ ml: 3, mt: 3, mb: 3 }}>
          {" "}
          Name : Pallavi Londhe
          <br />
          Address : Mumbai,near rajiv bridge
        </Typography>
      </Box>
      <Box
        sx={{
          mb: 10,
          mt: 5,
          ml: 55,
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          height: 50,
        }}
      >
        <Button
          //disabled
          size="small"
          color="success"
          variant="contained"
          sx={{ fontWeight: 300 }}
          onClick={handleOpen}
        >
          register
        </Button>
        <Button
          size="small"
          color="success"
          variant="contained"
          sx={{ fontWeight: 300, display: "none" }}
          onClick={() => {
            navigate("/slotSelection");
          }}
        >
          WALK-IN APPOINTMENT BOOKING
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ fontWeight: 300, display: "none" }}
          onClick={() => {
            navigate("/slotSelection");
          }}
        >
          VIRTUAL APPOINTMENT BOOKING
        </Button>
      </Box>
      <Modal
        open={dialog}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" id="modal-modal-title" component="h6">
            Add Quick Client Patient
          </Typography>
          <Divider />

          <br />
          <Typography
            sx={{ fontSize: 16, fontWeight: 30 }}
            id="modal-modal-description"
            textColor="inherit"
          >
            Client Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 250,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="First Name"
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 250,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Last Name"
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Address1"
            />

            <FormControl>
              <InputLabel style={{ fontSize: "12px" }} id="select-country">
                Country
              </InputLabel>
              <Select
                size="small"
                labelId="select-country"
                sx={{ width: 240 }}
                value={country}
                variant="standard"
                onChange={handleChange}
                label="country"
                style={{ fontSize: "12px" }}
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  United State
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  India
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  Canada
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="City"
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Postal Code"
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Phone Number"
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 210,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Email Address"
            />
          </Box>
          <br />
          <Typography
            sx={{ fontSize: 16, fontWeight: 30 }}
            id="variant-modal-description"
            textColor="inherit"
          >
            Patient Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 100,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="Patient Name"
            />
            <TextField
              size="small"
              inputProps={{
                style: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  width: 70,
                  //paddingLeft: 5,
                  //paddingRight: 4,
                  color: "#383838",
                },
              }}
              placeholder="0.00"
            />
            <RadioGroup
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 16,
                  ml: 1,
                },
              }}
              size="small"
              row
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                value="KG"
                control={<Radio />}
                label="KG"
              />
              <FormControlLabel
                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                value="LB"
                control={<Radio />}
                label="LB"
              />
              <FormControlLabel
                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                value="OZ"
                control={<Radio />}
                label="OZ"
              />
              <FormControlLabel
                sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                value="G"
                control={<Radio />}
                label="G"
              />
            </RadioGroup>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 3 }}>
            <FormControl>
              <InputLabel style={{ fontSize: "14px" }} id="select-species">
                Species
              </InputLabel>
              <Select
                size="small"
                labelId="select-species"
                sx={{ width: 250 }}
                value={species}
                variant="standard"
                onChange={handleSpecies}
                label="species"
                style={{ fontSize: "12px" }}
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  Canine(Dog)
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  Lizard
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  Tortoise
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel style={{ fontSize: "14px" }} id="select-breed">
                Breed
              </InputLabel>
              <Select
                size="small"
                labelId="select-breed"
                sx={{ width: 250 }}
                value={breed}
                variant="standard"
                onChange={handleBreed}
                label="breed"
                style={{ fontSize: "12px" }}
              >
                <MenuItem style={{ fontSize: "12px" }} value={10}>
                  Alligator
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={20}>
                  Alpine
                </MenuItem>
                <MenuItem style={{ fontSize: "12px" }} value={30}>
                  American
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="DOB"
              slotProps={{
                textField: { size: "small" },
                "& .MuiDateField-root": { fontSize: 12 },
              }}
            />
          </LocalizationProvider>

          <Box sx={{ gap: 4, mt: 5, ml: 40, display: "flex" }}>
            <Button
              sx={{ width: 50 }}
              variant="soft"
              size="small"
              onClick={handleClose}
            >
              close
            </Button>

            <Button sx={{ width: 60 }} variant="contained" size="small">
              save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
