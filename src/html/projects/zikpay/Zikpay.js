import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageSlider from "../../components/layout/ImageSlider";
import { LinkButton } from "../../components/button";

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
        <Grid>
          <Typography component="h6" variant="h6">
            용역 거래 결제 서비스로, 회원들 간에 결제 계약을 생성하고 결제
            조건에 따라 안전하게 거래 할 수 있도록 도와주는 서비스입니다.
          </Typography>
        </Grid>
        <ImageSlider />

        <LinkButton to="https://staging.zikpay.com/" text="Go to ZIKPAY" />
      </Grid>
    </>
  );
};
export default Zikpay;
