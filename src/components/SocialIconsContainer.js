import React from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

function SocialIconsContainer() {
  return (
    <Main>
      <SocialIcon href={"https://github.com/mehditaibi"} src={github} />
      <SocialIcon
        href={"https://www.linkedin.com/in/mehdi-taibi/"}
        src={linkedin}
      />
    </Main>
  );
}

export default SocialIconsContainer;
