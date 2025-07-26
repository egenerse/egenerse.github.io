import React from "react";
import { Home } from "./pages";
import { Navbar } from "./components";
import { ThemeProvider } from "./contexts";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
