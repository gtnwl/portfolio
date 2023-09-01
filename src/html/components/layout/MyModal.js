import { Button, Grid, Modal } from "@mui/material";
import React from "react";

const MyModal = ({ children, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
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
          padding: "40px",
        }}
      >
        {children}
        <Button
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            color: (theme) => theme.palette.grey[500],
          }}
        >
          닫기
        </Button>
      </Grid>
    </Modal>
  );
};

export default MyModal;
