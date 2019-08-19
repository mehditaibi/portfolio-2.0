import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/input-hook";
import SendButton from "../images/send-button.png";
import axios from "axios";
import contactFormRequest from "../contactFormRequest";

const FormContainer = styled.div`
  padding-top: 10px;
  margin: 0 auto;
  height: 55%;
  text-align: center;
`;

const Form = styled.form``;

const NameInput = styled.input`
  border: 1px solid #0c131a;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  cursor: pointer;
  margin-right: 5px;
  font-family: "Open Sans", sans-serif;
  &::placeholder {
    color: #0496aa;
    opacity: 0.5;
  }
  &:focus {
    border: 2px solid #0496aa;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 2vh 0 0 0;
    width: 97%;
  }
`;

const EmailInput = styled.input`
  border: 1px solid #0c131a;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  cursor: pointer;
  margin-left: 5px;
  font-family: "Open Sans", sans-serif;
  &::placeholder {
    color: #0496aa;
    opacity: 0.5;
  }
  &:focus {
    border: 2px solid #0496aa;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 97%;
    margin: 2vh 0 0 0;
  }
`;

const SubmitButtom = styled.input`
  height: 50px;
  @media (max-width: 768px) {
    margin-top: 2vh;
    height: 50px;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #0c131a;
  border-radius: 5px;
  height: 150px;
  width: 100%;
  resize: none;
  margin: 2px;
  padding: 10px 0 0 10px;
  margin-bottom: 1.5%;
  font-size: 20px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  &::placeholder {
    color: #0496aa;
    opacity: 0.5;
  }
  &:focus {
    border: 2px solid #0496aa;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    margin-top: 2vh;
    height: 100px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5%;
  @media (max-width: 768px) {
    display: inline;
  }
`;

function ContactForm() {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = new FormData();
    form.set(name, email, message);
    axios
      .post(contactFormRequest.post, form, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });

    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FlexContainer>
          <NameInput
            type="text"
            {...bindName}
            placeholder="Your name"
            required
          />
          <EmailInput
            type="text"
            {...bindEmail}
            placeholder="Your email"
            required
          />
        </FlexContainer>
        <TextArea
          type="text"
          {...bindMessage}
          placeholder="Your message"
          required
        />
        <br />
        <SubmitButtom type="image" src={SendButton} alt="Submit Form" />
      </Form>
    </FormContainer>
  );
}

export default ContactForm;
