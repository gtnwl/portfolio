import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import mainData from "../../mainData.json";
import { useNavigate } from "react-router-dom";

const Zikpay = () => {
  let navigate = useNavigate();
  const projectsData = mainData.data;
  debugger;
  const moveToSubPage = () => {
    navigate("/" + projectsData);
    console.log(projectsData);
  };

  return (
    <>
      <Grid container p={5} id="index1" sx={{ gap: "50px" }}>
        <Grid
          container
          item
          xs={12}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Typography component="h2" variant="div" sx={{ fontSize: "64px" }}>
            ZIKPAY
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.10.27 - 23.01
          </Typography>
        </Grid>
        {/* <Button
          variant="outlined"
          onClick={() => {
            // moveToSubPage(card.localName);
          }}
        >
          이전
        </Button>
        <Button variant="outlined">다음</Button> */}
      </Grid>
    </>
  );
};
export default Zikpay;
