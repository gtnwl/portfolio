import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ImageSlider from "../../components/layout/ImageSlider";
import { LinkButton } from "../../components/button";

const Babathe = () => {
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
            BABATHE.COM
          </Typography>
          <Typography component="h6" variant="h6">
            작업 기간 : 22.06.14 - 22.06.23
          </Typography>
        </Grid>
        <ImageSlider />
        <LinkButton
          to="https://pc.babathe.com/main?gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRPmSo8bZxYDsuYE5rPiO51JelppTFqU5AqG2at6Es38hK1Zxiilz4EaAkJOEALw_wcB"
          text="Go to BABATHE.COM"
        />
      </Grid>
    </>
  );
};
export default Babathe;
