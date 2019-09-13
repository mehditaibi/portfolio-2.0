import React from "react";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";

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
      <SocialIcon href={"https://github.com/mehditaibi"} src="https://res.cloudinary.com/mehditaibi-com/image/upload/v1568332252/portfolio/github_vtlhgg.png"/>
      <SocialIcon
        href={"https://www.linkedin.com/in/mehdi-taibi/"}
        src="https://res.cloudinary.com/mehditaibi-com/image/upload/v1568332250/portfolio/linkedin_enc3pq.png"
      />
    </Main>
  );
}

export default SocialIconsContainer;
