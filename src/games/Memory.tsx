import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import ResetButton from "./components/ResetButton";
import GameContainer from "./components/GameContainer";
import Header from "./components/Header";

interface Card {
  id: number;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  margin: 20px auto;
  width: fit-content;
`;

const CardButton = styled.button<{
  isFlipped: boolean;
  isMatched: boolean;
  gameHasFinished: boolean;
}>`
  width: 100px;
  height: 100px;
  font-size: 24px;
  background-color: ${({ isFlipped, isMatched, gameHasFinished }) =>
    gameHasFinished ? "#00FF00" : isFlipped || isMatched ? "#f0f0f0" : "#fff"};
  border: 1px solid #000;
  cursor: ${({ isMatched }) => (isMatched ? "default" : "pointer")};
  &:disabled {
    cursor: not-allowed;
  }
`;

const MemoryGame: React.FC = () => {
  const [board, setBoard] = useState(createNewGame());
  const firstCardRef = useRef<number | null>(null);
  const secondCardRef = useRef<number | null>(null);
  const isCheckingRef = useRef(false);
  const gameHasFinished = gameIsFinished(board);

  useEffect(() => {
    if (firstCardRef.current !== null && secondCardRef.current !== null) {
      isCheckingRef.current = true;
      const firstCard = firstCardRef.current;
      const secondCard = secondCardRef.current;

      if (board[firstCard].pairId === board[secondCard].pairId) {
        setBoard((prevBoard) =>
          prevBoard.map((card) =>
            card.pairId === board[firstCard].pairId
              ? { ...card, isMatched: true }
              : card
          )
        );
        firstCardRef.current = null;
        secondCardRef.current = null;
        isCheckingRef.current = false;
        return;
      }
      setTimeout(() => {
        setBoard((prevBoard) =>
          prevBoard.map((card, index) =>
            index === firstCard || index === secondCard
              ? { ...card, isFlipped: false }
              : card
          )
        );
        firstCardRef.current = null;
        secondCardRef.current = null;
        isCheckingRef.current = false;
      }, 500);
    }
  }, [board]);

  const handleCardClick = (index: number) => {
    if (
      isCheckingRef.current ||
      board[index].isFlipped ||
      board[index].isMatched
    )
      return;

    if (firstCardRef.current === null) {
      setBoard((prevBoard) =>
        prevBoard.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      firstCardRef.current = index;
    } else if (secondCardRef.current === null) {
      setBoard((prevBoard) =>
        prevBoard.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      secondCardRef.current = index;
    }
  };

  const handleReset = () => {
    setBoard(createNewGame());
    firstCardRef.current = null;
    secondCardRef.current = null;
  };

  return (
    <GameContainer>
      <Header title="Memory" />
      <Board>
        {board.map((card, index) => (
          <CardButton
            key={index}
            onClick={() => handleCardClick(index)}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            disabled={isCheckingRef.current || card.isMatched}
            gameHasFinished={gameHasFinished}
          >
            {card.isFlipped || card.isMatched ? card.pairId : ""}
          </CardButton>
        ))}
      </Board>

      <ResetButton onClick={handleReset} />
    </GameContainer>
  );
};

export default MemoryGame;

const createNewGame = (): Card[] =>
  Array(12)
    .fill(null)
    .map((_, index) => ({
      id: index,
      pairId: Math.floor(index / 2),
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);

const gameIsFinished = (cards: Card[]) => cards.every((card) => card.isMatched);
