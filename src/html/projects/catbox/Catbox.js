import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { LinkButton } from "../../components/button";
import CompanyDescription from "../../components/layout/CompanyDescription";

const Catbox = () => {
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
            CATBOX
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.04.15 - 22.04.25
          </Typography>
        </Grid>
        <CompanyDescription />

        <LinkButton
          to="https://cat-box-6b041.web.app/"
          text="Go to CATBOX"
        />
      </Grid>
    </>
  );
};
export default Catbox;
