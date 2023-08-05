import React from "react";
import { Grid } from "@mui/material";
import TodoListItem from "./TodoListItem";

//입력 된 리스트를 감싼는 영역
const TodoList = ({ todos }) => {
  return (
    <Grid>
      <TodoListItem todos={todos} />
    </Grid>
  );
};

export default TodoList;
