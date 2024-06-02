import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProgressIndicator from "./components/ProgressIndicator";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3ec78, #af4261);
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ProgressIndicator />
      <Navbar />
      <Home />
    </AppContainer>
  );
};

export default App;
