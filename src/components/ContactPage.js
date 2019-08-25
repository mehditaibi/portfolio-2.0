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

const ContactFormSection = styled.div`
  margin-top: 5vh;
  padding: 0 5%;
`;

function ContactPage() {
  return (
    <Main>
      <ContactMap />
      <ContactFormSection>
      <ContactForm />
      </ContactFormSection>
    </Main>
  );
}

export default ContactPage;
