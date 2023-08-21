import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import datafile from "./datafile.json";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const drawerWidth = 40;
const drawerBleeding = 20;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ListDrawer() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(-1);
  const convertT = (val) => {
    var tt = parseFloat(val).toFixed(2);
    var t = tt.replace(".", ":");
    var time_part_array = t.split(":");
    var ampm = "AM";
    if (time_part_array[0] >= 12) {
      ampm = "PM";
    }
    if (time_part_array[0] > 12) {
      time_part_array[0] = time_part_array[0] - 12;
    }
    var formatted_time =
      time_part_array[0] + ":" + time_part_array[1] + " " + ampm;

    return formatted_time;
  };

  return (
    <>
      {datafile.slots.map((slot, index) => (
        <Box
          component="li"
          style={{ listStyle: "none" }}
          sx={{ width: 400, ml: 65, display: "flex" }}
          key={slot.start_time}
        >
          <Button
            key={slot.start_time}
            disabled={open === index ? true : false}
            sx={{ pt: 2, pb: 2, mt: 1, width: open === index ? 200 : 400 }}
            variant={open === index ? "contained" : "outlined"}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {convertT(slot.start_time)}
          </Button>
          <Collapse
            in={open === index}
            orientation="horizontal"
            timeout="auto"
            unmountOnExit
          >
            <Button
              sx={{ ml: 1, pt: 2, pb: 2, mt: 1, width: 200 }}
              onClick={() => {
                navigate("/slot_n");
              }}
              variant="contained"
            >
              Confirm
            </Button>
          </Collapse>
        </Box>
      ))}
    </>
  );
}

export default ListDrawer;
