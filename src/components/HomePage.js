import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const Main = styled.div`
  height: 90%;
  width 100vw;
  background-color: #ffffff;
`;

function HomePage() {
  return (
    <Main>
      <Profile />
    </Main>
  );
}

export default HomePage;
