import React from "react";
import {
  MiniGames,
  Experiences,
  Section,
  Text,
  Contact,
  About,
} from "@/components";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center" id="home">
      <Section id="about" variant="secondary">
        <About />
      </Section>

      <Section id="experiences" variant="primary">
        <Experiences />
      </Section>

      <Section id="games" variant="secondary">
        <div className="w-full max-w-6xl px-8">
          <Text variant="heading" className="text-center mb-12">
            Mini Games
          </Text>
          <MiniGames />
        </div>
      </Section>

      <Section id="contact" variant="primary" className="min-h-0.5">
        <Contact />
      </Section>
    </main>
  );
};
