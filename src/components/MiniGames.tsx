import { TicTacToe, MemoryGame } from "@/games";

export const MiniGames = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <h2>Mini Games</h2>
      <TicTacToe />
      <MemoryGame />
    </div>
  );
};
