import React from "react";
import { Typography, Box } from "@mui/material";

const SubTitleBox = ({ title }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSizez: "64px",
          letterSpacing: "2px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SubTitleBox;
