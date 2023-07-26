import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { success } from "../module/Alert";

const BoardForm = () => {
  const [texts, setTexts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(0);

  const onRemove = (id) => {
    const nextTexts = texts.filter((item) => item.id !== id);
    setTexts(nextTexts);
  };

  const textList = texts.map((item) => (
    <Grid
      container
      alignItems="center"
      key={item.id}
      onClick={() => onRemove(item.id)}
    >
      <Typography>{item.text}</Typography>
      <Button onClick={() => onRemove(item.id)}>삭제</Button>
    </Grid>
  ));

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextTextList = texts.concat({
      id: nextId,
      text: inputText,
    });
    if (inputText === "") {
      success({
        title: "댓글을 작성해주세요.",
      });

      return;
    }
    setNextId(nextId + 1);
    setTexts(nextTextList);
    setInputText("");
  };

  return (
    <Grid container>
      <Grid container flexWrap="nowrap" sx={{ gap: "20px" }}>
        <TextField
          label="댓글을 작성해주세요."
          fullWidth
          variant="standard"
          value={inputText}
          onChange={onChange}
        />

        <Button onClick={onClick} variant="outlined">
          작성
        </Button>

        {textList.length > 0 && (
          <Grid container sx={{ border: "solid 1px red" }}>
            {textList}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default BoardForm;
