import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import mainData from "../../mainData.json";

const Tobemall = () => {
  const projectsData = mainData.data;

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
            TOBEMALL
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.05.30 - 22.07.05
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Tobemall;
