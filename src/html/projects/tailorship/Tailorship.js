import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import mainData from "../../mainData.json";
const Tailorship = () => {
  const projectsData = mainData.data;

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
        {/* <Button variant="outlined">이전</Button>
        <Button variant="outlined">다음</Button> */}
      </Grid>
    </>
  );
};
export default Tailorship;
