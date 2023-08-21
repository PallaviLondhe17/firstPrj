import * as React from "react";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import { Paper } from "@mui/material";

export default function ClinicPage() {
  const [variant, setVariant] = React.useState("solid");
  let navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          ml: 40,
          mt: 4,
          borderRadius: 2,
          backgroundImage:
            "url('https://pikwizard.com/pw/medium/3ab42cd53b045a4f24b1187856600adb.avif')",
          backgroundRepeat: "no-repeat",
          height: "350px",
          width: "850px",
        }}
      >
        <br />
        <Typography sx={{ mb: 3 }} variant="h6">
          {" "}
          Select Clinic
        </Typography>
        <Box
          component="ul"
          style={{ listStyle: "none" }}
          sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
        >
          <Paper
            onClick={() => {
              navigate("/providerPage");
            }}
            component="li"
            sx={{ ml: 2, width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <Avatar
              sx={{
                mt: 2,
                p: 0.5,
                bgcolor: deepOrange[500],
                ml: 15,
                border: "2px solid",
                borderColor: "background.body",
              }}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQb8k9XvPb1UQSXNGrfK-r7BuhVFiptQaGifH1NpjUzoZxGxwvklpsNDRO0-Mz0SrPMrY&usqp=CAU"
            ></Avatar>
            <Box sx={{ justifyContent: "flex-end" }}>
              <Typography sx={{ fontSize: 16 }}>Animal astro</Typography>
              <Typography variant="caption">
                2727 Indore Madya Pradesh Phone :-7676767676
                abhishek.yadav@harnstech.com
              </Typography>
            </Box>
          </Paper>

          <Paper
            onClick={() => {
              navigate("/providerPage");
            }}
            component="li"
            sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
          >
            <Avatar
              alt="Akshay Kumar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQb8k9XvPb1UQSXNGrfK-r7BuhVFiptQaGifH1NpjUzoZxGxwvklpsNDRO0-Mz0SrPMrY&usqp=CAU"
              sx={{
                bgcolor: deepOrange[500],
                p: 0.5,
                ml: 15,
                mt: 2,
                border: "2px solid",
                borderColor: "background.body",
              }}
            />
            <Box>
              <Typography sx={{ fontSize: 16 }}>
                Pet Health Care Clinic
              </Typography>
              <Typography variant="caption">
                gsdfgh Umm Suqeim, Al Wasl Road , Villa #793 t adsdfsfad Tamil
                Nadu Phone :- 226244821 tech@vetport.com
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
