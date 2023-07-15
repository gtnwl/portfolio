import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CompanyDescription from "../../components/layout/CompanyDescription";

const Acsell = () => {
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
            ACSELL
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.10.27 - 23.01
          </Typography>
        </Grid>
        <CompanyDescription />
      </Grid>
    </>
  );
};
export default Acsell;
