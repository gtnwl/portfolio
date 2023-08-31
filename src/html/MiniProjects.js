import React, { useState } from "react";
import "../resources/sass/common.scss";
import $ from "jquery";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActionArea, Modal, Typography } from "@mui/material";
import TodoForm from "./components/todoList/TodoForm";

const MiniProjects = () => {
  const $container = $(".sub .container");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  $container.addClass("subMovePage");
  return (
    <>
      {/* <Grid
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
      </Grid> */}
      <Grid className="contents index">
        <Card sx={{ backgroundColor: "transparent" }} onClick={handleOpen}>
          <CardActionArea
            sx={{
              height: "340px",
              width: "340px",
              overflow: "hidden",
            }}
          >
            <Typography>todoList</Typography>
          </CardActionArea>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid
            className="modalBg"
            sx={{
              position: "relative",
              left: "50%",
              top: "50%",
              transform: " translate(-50%,-50%)",
              maxWidth: "500px",
            }}
          >
            <TodoForm />
            <Button
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "relative",
                width: "100%",
                color: (theme) => theme.palette.grey[500],
              }}
            >
              닫기
            </Button>
          </Grid>
        </Modal>
      </Grid>
    </>
  );
};
export default MiniProjects;
