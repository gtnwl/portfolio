import React, { useCallback, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import contentData from "./todoContent.json";
//todoList 전체를 감싸는 영역
const TodoForm = () => {
  const todoData = contentData.data;
  const [todos, setTodos] = useState(todoData);
  const nextId = useRef(3);
  const onInsert = useCallback(
    (content) => {
      const todo = {
        id: nextId.current,
        content,
        checkBox: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );
  return (
    <Grid container>
      <TodoInsert onInsert={onInsert} todos={todos} />
      <TodoList todos={todos} />
    </Grid>
  );
};

export default TodoForm;
