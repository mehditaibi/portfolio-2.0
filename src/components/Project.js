import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    padding-top: 50px;
  }
`;

const Info = styled.div`
  padding-left: 30px;
  font-family: "Open Sans", sans-serif;
  position: relative;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Picture = styled.img`
  height: 20vw;
  -webkit-box-shadow: -8px 10px 9px 1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: -8px 10px 9px 1px rgba(0, 0, 0, 0.51);
  box-shadow: -8px 10px 9px 1px rgba(0, 0, 0, 0.51);
  @media (max-width: 768px) {
    height: 50vw;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Title = styled.h5`
  text-align: center;
  color: #0496aa;
  font-size: 1.5vw;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

const Description = styled.p`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Technologies = styled.small`
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Link = styled.a``;

const LinkButton = styled.button`
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  border: 2px solid #0496aa;
  color: #0496aa;
  font-weight: bold;
  font-size: 15px;
  &:hover {
    background-color: #0496aa;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    background-color: white;
  }
`;

function Project(props) {
  return (
    <Main>
      <Picture src={props.image} />
      <Info>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Technologies>{props.technologies}</Technologies>
        <LinksContainer>
          {props.liveLink ? (
            <Link href={props.liveLink} target="_blank">
              <LinkButton type="button">VIEW LIVE</LinkButton>
            </Link>
          ) : null}
          {props.codeLink ? (
            <Link href={props.codeLink} target="_blank">
              <LinkButton type="button">CODE</LinkButton>
            </Link>
          ) : null}
        </LinksContainer>
      </Info>
    </Main>
  );
}

export default Project;
