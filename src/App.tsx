import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./pages/Home";

const AppContainer = styled.div`
  background: linear-gradient(135deg, #f3ec78, #af4261);
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.8rem;
  background: #7d00a3;
  transform-origin: 0%;
  z-index: 1;
`;

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 200,
  });

  return (
    <AppContainer>
      <ProgressBar style={{ scaleX }} />
      <Navbar />
      <Home />
    </AppContainer>
  );
};

export default App;
