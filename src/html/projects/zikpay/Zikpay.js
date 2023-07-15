import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LinkButton } from "../../components/button";
import CompanyDescription from "../../components/layout/CompanyDescription";

const Zikpay = () => {
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

        <CompanyDescription />

        <LinkButton to="https://staging.zikpay.com/" text="Go to ZIKPAY" />
      </Grid>
    </>
  );
};
export default Zikpay;
