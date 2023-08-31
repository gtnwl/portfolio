import React from "react";
import { Grid, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
//입력된 리스트 영역
const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { content, index } = todo;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid container alignItems="center" sx={{ maxWidth: "80%" }}>
        {/* defaultChecked */}
        <Checkbox {...label} color="success" />
        <Typography component="p" sx={{ margin: "0px auto 0px 0px" }}>
          {content}
        </Typography>
      </Grid>
      <IconButton onClick={() => onRemove(index)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoListItem;
