import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Sidebar />
          <MainContent />
        </ContentWrapper>
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;
