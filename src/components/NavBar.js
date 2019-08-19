import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import resume from "../images/resume.pdf";
import { NavLink } from "react-router-dom";

const Main = styled.nav`
  position sticky;
  top: 0;
  height: 10%;
  witdh: 100%;
  background-color: #0f1416;
  display: flex;
  padding: 0px 5%;
  box-shadow: 0 9px 4px -6px #0496AA;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: 100%;
    top: auto;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    border-bottom: none;
    padding: 0;
    background-color: white;
  }
`;

const Logo = styled.img`
  height: 100%;
  vertical-align: middle;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksContainer = styled.ul`
  list-style-type: none;
  margin-left: auto;
  padding: 0px;
  position: relative;
  top: 0%;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: space-around;
    display: flex;
    margin: 0;
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
  &.active {
    border-bottom: solid 2px #0596aa;
    padding-bottom: 2px;
  }
  &:hover {
    border-bottom: solid 2px #0596aa;
    padding-bottom: 2px;
  }
`;

const PDFLink = styled.a`
  text-decoration: none;
  color: #0496AA;
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
  }
  &:hover {
    border-bottom: solid 2px #0596aa;
    padding-bottom: 2px;
  }
`;

const LinkContainer = styled.li`
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

function NavBar() {
  return (
    <Main>
      <Logo src={logo} />
      <LinksContainer>
        <LinkContainer>
          <StyledLink to="/" exact={true}>
            HOME
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/projects" exact={true}>
            PROJECTS
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <PDFLink href={resume} target="_blank">
            RESUME
          </PDFLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/contact" exact={true}>
            CONTACT
          </StyledLink>
        </LinkContainer>
      </LinksContainer>
    </Main>
  );
}

export default NavBar;
