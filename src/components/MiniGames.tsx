import styled from "@emotion/styled";
import TicTacToe from "../games/tic-tac-toe";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 4rem;
`;

const MiniGames = () => {
  return (
    <GameContainer>
      <h2>Mini Games</h2>
      <TicTacToe />
    </GameContainer>
  );
};

export default MiniGames;
