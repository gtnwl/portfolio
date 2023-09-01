import React, { useState } from "react";
import "../resources/sass/common.scss";
import $ from "jquery";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, Typography } from "@mui/material";
import TodoForm from "./components/todoList/TodoForm";
import { MyModal } from "./components/layout";
import NewsApi from "./components/modal/NewsApi";

const MiniProjects = () => {
  const $container = $(".sub .container");
  const [openModal, setOpenModal] = useState(false);
  const [modalBody, setModalBody] = useState();

  const onClickShowModal = (component) => {
    setModalBody(component);
    setOpenModal(true);
  };
  const onClickHideModal = () => {
    setOpenModal(false);
  };
  console.log("MiniProjects ----->", onClickHideModal);
  console.log("MiniProjects -----> onClickShowModal", onClickShowModal);
  $container.addClass("subMovePage");
  return (
    <>
      <Grid className="contents index">
        <Card
          sx={{ backgroundColor: "transparent" }}
          onClick={() => onClickShowModal(<TodoForm />)}
        >
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
        <Card
          sx={{ backgroundColor: "transparent" }}
          onClick={() => onClickShowModal(<NewsApi />)}
        >
          <CardActionArea
            sx={{
              height: "340px",
              width: "340px",
              overflow: "hidden",
            }}
          >
            <Typography>newsApi</Typography>
          </CardActionArea>
        </Card>
      </Grid>
      <MyModal open={openModal} onClose={onClickHideModal}>
        {modalBody}
      </MyModal>
    </>
  );
};
export default MiniProjects;
