import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageSlider from "../../components/layout/ImageSlider";
import { LinkButton } from "../../components/button";

const Copyright = () => {
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
            저작권비즈니스지원센터
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.08.01 ~ 22.08.19
          </Typography>
        </Grid>
        <ImageSlider />
        <LinkButton
          to="http://gtnwl.dothome.co.kr/suji_porl/html/p03_01.html"
          text="Go to COPYRIGHT"
        />
      </Grid>
    </>
  );
};
export default Copyright;
