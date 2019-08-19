import React from "react";
import styled from "styled-components";

const Main = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
  padding: 50px;
`;

const Title = styled.h2`
  text-align: center;
  color: #0c131a;
`;

const Paragraph = styled.p`
  width: 400px;
  margin: auto;
  font-size: 20px;
  color: #0c131a;
`;

function AboutPage() {
  return (
    <Main>
      <Title>About Me</Title>
      <Paragraph>
        I am a developer, originally from France, living in Vacouver for just
        about 10 years now. I enjoy putting together all kind of projects while
        learning and going beyond expectation.
      </Paragraph>
    </Main>
  );
}

export default AboutPage;
