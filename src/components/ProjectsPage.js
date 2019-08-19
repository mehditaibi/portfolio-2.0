import React from "react";
import styled from "styled-components";
import Project from "./Project";
import PetSitters from "../images/petsitters.png";

const Main = styled.div`
  height: 80%;
  background-color: #ffffff;
  padding: 5% 5% 0 5% ;
  @media (max-width: 768px) {
    padding: 5%;
  }
`;

function ProjectsPage() {
  return (
    <Main>
      <Project
        image = {PetSitters}
        title={"PETSITTERS"}
        description={
          "This app aims at helping pet owners to find a nearby pet sitter."
        }
        technologies={
          "REACT.JS - RAILS - AJAX - BOOSTRAP - GOOGLE MAP API - BIG CALENDAR - POSTGRESSQL"
        }
        codeLink={"https://github.com/mehditaibi/petsitters"}
      />
    </Main>
  );
}

export default ProjectsPage;
