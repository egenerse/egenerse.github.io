import React from "react";
import styled from "@emotion/styled";
import PersonalData from "../components/PersonalData";
import MiniGames from "../components/MiniGames";
import Experiences from "../components/Experiences";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  text-align: center;
  width: 100%;
  z-index: 10;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <PersonalData />
      <Experiences />
      <MiniGames />
    </Container>
  );
};

export default Home;
