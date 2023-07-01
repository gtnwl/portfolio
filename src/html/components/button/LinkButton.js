import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Grid from "@mui/material/Grid";

const LinkButton = ({ to, text }) => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    sx={{ minWidth: "200px", height: "50px" }}
  >
    <S.Link to={to} target="_blank">
      {text}
    </S.Link>
  </Grid>
);

LinkButton.propTypes = {
  /** Route Path */
  to: PropTypes.string.isRequired,
  /** Text */
  text: PropTypes.string.isRequired,
};

export default LinkButton;
