import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Main = styled.div`
  height: 90%;
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.p`
  margin: 0;
  margin: 1.5% 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5vw;
  padding-top: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 4vw;
    margin: 0;
    margin-top: 2vh;
  font-size: 20px;

  }
`;

const ContactFormSection = styled.div`
  padding: 0 5%;
`;

function ContactPage() {
  return (
    <Main>
      <ContactMap />
      <ContactFormSection>
        <Title>Get in touch</Title>
        <ContactForm />
      </ContactFormSection>
    </Main>
  );
}

export default ContactPage;
