import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import NavBar from "./NavBar";
import NotFoundPage from "./NotFoundPage";

const Main = styled.main`
  height: 100vh;
  width 100vw;
  background-color: #0f1416;
  overflow: auto;
`;

function App() {
  return (
    <Main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Main>
  );
}

export default App;
