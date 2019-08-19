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
`;

const ErrorWord = styled.h5`
  font-size: 3vw;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  line-height: 0;
`;

const Four04 = styled.h1`
  font-size: 15vw;
  font-family: "Montserrat", sans-serif;
  margin: 0;
`;

const Message = styled.p`
  font-size: 3vw;
  font-family: "Open Sans", sans-serif;
  margin: 0;
`;

const Hr = styled.hr`
  margin: 0;
  line-height: 1px;
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