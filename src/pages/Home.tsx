import React from "react";
import { Experiences, Section, Contact, About } from "@/components";
import { useScrollToSection } from "@/hooks";

export const Home: React.FC = () => {
  useScrollToSection();

  return (
    <main className="flex flex-col items-center justify-center" id="home">
      <Section id="about" variant="secondary">
        <About />
      </Section>

      <Section id="experiences" variant="primary">
        <Experiences />
      </Section>

      <Section id="contact" variant="secondary" className="min-h-0.5">
        <Contact />
      </Section>
    </main>
  );
};
