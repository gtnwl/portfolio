import styled from "@emotion/styled";
import { Grid, TextareaAutosize } from "@mui/material";

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  & label {
    font-size: 18px;
  }
  & * {
    width: 100%;
  }
  & legend {
    display: none;
  }
`;

export const StyledLabel = styled(Grid)`
  &:hover {
    & label {
      font-weight: bold;
    }
  }
`;

export const StyledTextarea = styled(TextareaAutosize)`
  max-width: 500px;
  min-width: 200px;
  height: 205px !important;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 4px !important;
  border: 1px solid !important;
  box-sizing: border-box;

  &:hover {
    border: 2px solid !important;
  }

  &:focus {
    border: 2px solid #1976d2 !important;
  }
  &:focus-visible {
    outline: 0;
  }
`;
