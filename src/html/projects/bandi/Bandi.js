import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { LinkButton } from "../../components/button";
import CompanyDescription from "../../components/layout/CompanyDescription";

const Bandi = () => {
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
        <CompanyDescription />

        <LinkButton
          to="http://gtnwl.dothome.co.kr/bandi/mobile/index.php"
          text="Go to BANDI"
        />
      </Grid>
    </>
  );
};
export default Bandi;
