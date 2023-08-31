import React from "react";
import { Grid, List } from "@mui/material";
import TodoListItem from "./TodoListItem";

//입력 된 리스트를 감싼는 영역
const TodoList = ({ todos, index, onRemove, onToggle }) => {
  return (
    <Grid
      sx={{
        overflow: "auto",
        width: "100%",
        padding: "65px 20px 20px 20px",
      }}
    >
      <List>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.index}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </List>
    </Grid>
  );
};

export default TodoList;
