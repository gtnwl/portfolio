import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import mainData from "../../mainData.json";

const Bandi = () => {
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
            BANDI
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.06.14 - 22.06.23
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Bandi;
