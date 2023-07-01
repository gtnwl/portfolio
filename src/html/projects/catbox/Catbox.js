import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ImageSlider from "../../components/layout/ImageSlider";
import { LinkButton } from "../../components/button";

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
        <ImageSlider />
        <LinkButton
          to="http://gtnwl.dothome.co.kr/catbox/index.html"
          text="Go to CATBOX"
        />
      </Grid>
    </>
  );
};
export default Catbox;
