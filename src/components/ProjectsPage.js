import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Main = styled.div`
  background-color: #ffffff;
  padding: 5% 5% 0 5%;
  & div:nth-child(2n){
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    padding: 5%;
  }
`;

function ProjectsPage() {
  return (
    <Main>
      <Project
        image="https://res.cloudinary.com/mehditaibi-com/image/upload/v1568332302/portfolio/pet-sitters-thumbnail_jvnodh.png"
        title={"PetSitters"}
        description={
          "This app aims at helping pet owners fidning a nearby pet sitter."
        }
        technologies={
          "REACT.JS - RAILS - AJAX - BOOSTRAP - GOOGLE MAP API - BIG CALENDAR - POSTGRESSQL"
        }
        codeLink={"https://github.com/mehditaibi/petsitters"}
      />
      <Project
        image="https://res.cloudinary.com/mehditaibi-com/image/upload/v1568332357/portfolio/iphonecalculator_fqyhd3.png"
        title={"Iphone Calculator"}
        description={
          "Clone of the Iphone calculator."
        }
        technologies={
          "Vanilla Javascript - CSS - HTML"
        }
        codeLink={"https://github.com/mehditaibi/iphone_calculator"}
        liveLink={"https://calculator.mehditaibi.com"}
      />
      <Project
        image="https://res.cloudinary.com/mehditaibi-com/image/upload/v1568332192/portfolio/screenshot_rhj4oe.png"
        title={"BlackJackJS"}
        description={
          "A simplified version of the BlackJack game."
        }
        technologies={
          "Vanilla Javascript - Webpack - SASS"
        }
        codeLink={"https://github.com/mehditaibi/BlackJackJS"}
        liveLink={"https://blackjack.mehditaibi.com"}
      />
    </Main>
  );
}

export default ProjectsPage;
