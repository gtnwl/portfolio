import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { LinkButton } from "../../components/button";
import CompanyDescription from "../../components/layout/CompanyDescription";

const Sangjo = () => {
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
            전국공무원상조서비스
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.08.01 - 22.08.19
          </Typography>
        </Grid>
        <CompanyDescription />

        <LinkButton
          to="http://gtnwl.dothome.co.kr/suji_porl/html/p04.html"
          text="Go to SANGJO"
        />
      </Grid>
    </>
  );
};
export default Sangjo;
