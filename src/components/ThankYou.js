import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled.div`
padding-top: 7.5%`;

const ThankYouMessage = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5vw;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #0496aa;
  font-size: 1.5vw;
  margin: 0 10px;
  font-weight: bold;
  transition: 0.4s ease;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 768px) {
    font-size: 4vw;
    color: #0496aa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    &.active {
      color: black;
    }
  }
`;

function ThankYou() {
  return (
    <Main>
      <ThankYouMessage>
        Thank you for getting in touch! <br /><br />
        Feel Free to check
        <StyledLink to="/projects" exact={true}>
          my projects
        </StyledLink>
        &
        <StyledLink to="/resume" exact={true}>
          resume
          </StyledLink>
      </ThankYouMessage>
    </Main>
  );
}

export default ThankYou;
