import styled from "@emotion/styled";
import TicTacToe from "../games/TicTacToe";
import MemoryGame from "../games/Memory";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

const MiniGames = () => {
  return (
    <GameContainer>
      <h2>Mini Games</h2>
      <TicTacToe />
      <MemoryGame />
    </GameContainer>
  );
};

export default MiniGames;
