import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageSlider from "../../components/layout/ImageSlider";
import { LinkButton } from "../../components/button";
const Tailorship = () => {
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
            TAILORSHIP
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.08.25 - 22.09.02
          </Typography>
        </Grid>
        <ImageSlider />
        <LinkButton
          to="http://gtnwl.dothome.co.kr/suji_porl/html/p05.html"
          text="Go to TAILORSHIP"
        />
      </Grid>
    </>
  );
};
export default Tailorship;
