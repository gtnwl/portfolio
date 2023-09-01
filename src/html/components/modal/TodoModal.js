import React from "react";
import { MyModal } from "../layout";
import TodoForm from "../todoList/TodoForm";
import { Grid } from "@mui/material";

const TodoModal = ({ open }) => {
  console.log("TodoModal -----", open);
  return (
    <MyModal
      open={open}
      //onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TodoForm />
    </MyModal>
  );
};

export default TodoModal;
