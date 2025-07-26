import React from "react";
import { PersonalData } from "../components/PersonalData";
import MiniGames from "../components/MiniGames";
import Experiences from "../components/Experiences";


const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <PersonalData />
      <Experiences />
      <MiniGames />
    </main>
  );
};

export default Home;
