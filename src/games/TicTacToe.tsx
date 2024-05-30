import React, { useState } from "react";
import styled from "@emotion/styled";
import ResetButton from "./components/ResetButton";
import GameContainer from "./components/GameContainer";
import Header from "./components/Header";

const Status = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
`;

const SquareButton = styled.button<{ isWinningSquare: boolean }>`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isWinningSquare ? "lightgreen" : "white"};
`;

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  return (
    <SquareButton onClick={onClick} isWinningSquare={isWinningSquare}>
      {value}
    </SquareButton>
  );
};

const Board: React.FC<{
  squares: string[];
  onClick: (i: number) => void;
  winningSquares: number[];
}> = ({ squares, onClick, winningSquares }) => {
  return (
    <BoardContainer>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinningSquare={winningSquares.includes(i)}
        />
      ))}
    </BoardContainer>
  );
};

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winningSquares, setWinningSquares] = useState<number[]>([]);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winnerResult = calculateWinner(newSquares);
    if (winnerResult) {
      setWinningSquares(winnerResult.line);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningSquares([]);
  };

  const winnerResult = calculateWinner(squares);
  const winner = winnerResult ? winnerResult.player : null;
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <GameContainer>
      <Header title="Tic Tac Toe" />
      <Status>{status}</Status>
      <Board
        squares={squares}
        onClick={handleClick}
        winningSquares={winningSquares}
      />
      <ResetButton onClick={handleReset} />
    </GameContainer>
  );
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
};

export default TicTacToe;
