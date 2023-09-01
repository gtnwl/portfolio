import React, { useCallback, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

//todoList 입력하는 영역
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Grid
      container
      flexWrap="nowrap"
      className="modalHeader"
      sx={{
        gap: "20px",
        position: "sticky",
        zIndex: "999",
        opacity: 1,
      }}
    >
      <TextField
        label="오늘의 할 일을 작성해주세요."
        fullWidth
        variant="standard"
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <Button
        onClick={onSubmit}
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
