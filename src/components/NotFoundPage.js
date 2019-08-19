import React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 90%;
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 30%;
  padding-top: 10%;
  @media (max-width: 768px) {
    padding-top: 60%;
    width: 100%;
  }
`;

const ErrorWord = styled.h5`
  font-size: 3vw;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  line-height: 0;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

const Four04 = styled.h1`
  font-size: 15vw;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 30vw;
  }
`;

const Message = styled.p`
  font-size: 3vw;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

const Hr = styled.hr`
  margin: 0;
  line-height: 1px;
  @media (max-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

function NotFoundPage(){
  return(
    <Main>
      <TextContainer>
        <ErrorWord>• ERROR •</ErrorWord>
        <Four04>404</Four04>
        <Hr/>
        <Message>Page Not Found</Message>
      </TextContainer>
    </Main>
  )
}

export default NotFoundPage;