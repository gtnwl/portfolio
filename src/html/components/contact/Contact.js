import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer } from "./ContactForm";
import { Button, Input, InputLabel, TextField } from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0zfsh32",
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
      <InputLabel htmlFor="title">제목</InputLabel>
      <Input id="title" type="text" name="title" required />
      <InputLabel htmlFor="user_name">회사명</InputLabel>
      <Input id="user_name" type="text" name="user_name" required />

      <InputLabel htmlFor="email">Email 주소</InputLabel>
      <Input id="email" type="email" name="email" required />

      <InputLabel htmlFor="message">보내실 내용</InputLabel>
      <TextField id="message" type="text" name="message" required />

      <Button type="submit" value="Send" required>
        보내기
      </Button>
    </FormContainer>
  );
};
export default Contact;
