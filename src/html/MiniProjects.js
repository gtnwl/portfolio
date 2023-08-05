import React from "react";
import "../resources/sass/common.scss";
import $ from "jquery";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import TodoForm from "./components/todoList/TodoForm";
import TodoInsert from "./components/todoList/TodoInsert";
import TodoList from "./components/todoList/TodoList";

const MiniProjects = () => {
  const $container = $(".sub .container");
  $container.addClass("subMovePage");
  return (
    <>
      <Grid
        className="contents index"
        id="index2"
        flexDirection="column"
        sx={{ display: "flex", gap: "50px" }}
      >
        <Grid
          container
          justifyContent="center"
          sx={{ gap: "20px" }}
          className="aoao"
        >
          <TodoForm />
        </Grid>
      </Grid>
    </>
  );
};
export default MiniProjects;
