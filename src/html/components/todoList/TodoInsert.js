import React, { useCallback, useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { FormContainer } from "../contact/ContactForm";

//todoList 입력하는 영역
const TodoInsert = ({ todos, onInsert }) => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState();
  const nextId = useRef(3);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  // const onInsert = useCallback(
  //   (content) => {
  //     const todo = {
  //       id: nextId.current,
  //       content,
  //       checkBox: false,
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current++;
  //   },
  //   [todos]
  // );
  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <Grid container flexWrap="nowrap" sx={{ gap: "20px" }}>
      <TextField
        label="오늘의 할 일을 작성해주세요."
        fullWidth
        variant="standard"
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <Button
        onClick={onClick}
        type="submit"
        variant="outlined"
        sx={{ height: "45px" }}
      >
        작성
      </Button>
    </Grid>
  );
};

export default TodoInsert;
