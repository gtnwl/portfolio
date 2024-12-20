import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer, StyledTextarea, StyledLabel } from "./ContactForm";
import { Box, Button, Grid, Input, InputLabel } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x234y6m",
        "template_xk67ark",
        form.current,
        "Q2UD0-G7rsDX8oNrK"
      )
      .then(
        (result) => {
          alert("메일이 성공적으로 전송되었습니다.");
          console.log(result.text);
        },
        (error) => {
          alert("메일 전송에 실패하였습니다.");
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <Grid container sx={{ gap: "20px" }}>
        <Grid
          container
          sx={{
            gap: "40px",
            "& > * ": {
              flex: "1",
            },
          }}
        >
          <Grid container sx={{ gap: "20px", maxHeight: "205px" }}>
            <StyledLabel>
              <InputLabel htmlFor="title">제목</InputLabel>
              <Input id="title" type="text" name="title" required />
            </StyledLabel>
            <StyledLabel>
              <InputLabel htmlFor="user_name">소속</InputLabel>
              <Input id="user_name" type="text" name="user_name" required />
            </StyledLabel>
            <StyledLabel>
              <InputLabel htmlFor="email">Email 주소</InputLabel>
              <Input id="email" type="email" name="email" required />
            </StyledLabel>
          </Grid>
          <StyledLabel>
            <InputLabel htmlFor="message">보내실 내용</InputLabel>
            {/* <TextField id="message" type="text" name="message" required /> */}
            <Box sx={{ position: "relative" }}>
              <StyledTextarea
                id="message"
                type="text"
                name="message"
                required
              />
            </Box>
          </StyledLabel>
        </Grid>
        <Button
          type="submit"
          value="Send"
          required
          sx={{ width: "200px", margin: "0px auto", fontSize: "18px" }}
        >
          보내기
        </Button>
      </Grid>
    </FormContainer>
  );
};
export default Contact;
