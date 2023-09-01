import React, { useCallback, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import contentData from "./todoContent.json";
import { MyModal } from "../layout";
//todoList 전체를 감싸는 영역
const TodoForm = () => {
  const todoData = contentData.data;
  const [todos, setTodos] = useState(todoData);

  const nextIndex = useRef(3);
  const onInsert = useCallback((content) => {
    const todo = {
      index: nextIndex.current,
      content,
      checkBox: false,
    };

    if (content === "") {
      alert("글을 작성해주세요.");
      return;
    }
    setTodos((todos) => todos.concat(todo));
    nextIndex.current++;
  }, []);
  const onRemove = useCallback((index) => {
    setTodos((todos) => todos.filter((todo) => todo.index !== index));
  }, []);

  const onToggle = useCallback(
    (index) => {
      setTodos(
        todos.map((todo) =>
          todo.index === index ? { ...todo, checkBox: !todo.checkBox } : todo
        )
      );
    },
    [todos]
  );

  return (
    <Grid container sx={{ overflow: "auto" }}>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </Grid>
  );
};

export default TodoForm;
