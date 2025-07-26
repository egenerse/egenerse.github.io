import React from "react";
import { Section, Text } from "@/components";
import { TicTacToe, MemoryGame } from "@/games";

export const Games: React.FC = () => {
  return (
    <main
      className="flex flex-col items-center justify-center pt-10"
      id="games"
    >
      <Section id="games-section" variant="secondary">
        <div className="w-full max-w-6xl px-8">
          <div className="text-center mb-12">
            <Text variant="heading" className="text-text-primary mb-4">
              Mini Games for fun
            </Text>
            <Text variant="body" className="text-text-secondary">
              Built with React and TypeScript
            </Text>
          </div>

          <TicTacToe />
          <MemoryGame />
        </div>
      </Section>
    </main>
  );
};
