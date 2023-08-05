import React from "react";
import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
//입력된 리스트 영역
const TodoListItem = ({ todos }) => {
  console.log(todos);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <List sx={{ width: "100%" }}>
      {todos.map((item) => {
        return (
          <ListItem
            key={item.index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid container alignItems="center" sx={{ maxWidth: "80%" }}>
              {/* defaultChecked */}
              <Checkbox {...label} color="success" />
              <Typography component="p" sx={{ margin: "0px auto 0px 0px" }}>
                {item.content}
              </Typography>
            </Grid>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoListItem;
