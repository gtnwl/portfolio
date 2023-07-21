import React from "react";
import "../resources/sass/common.scss";
import { Grid } from "@mui/material";
import { BoardForm } from "./components/layout";

const NoticeBoard = () => {
  // const $container = $(".sub .container");
  // $container.addClass("subMovePage");
  return (
    <Grid container p={5} sx={{ gap: "50px" }}>
      <BoardForm />
    </Grid>
  );
};
export default NoticeBoard;
