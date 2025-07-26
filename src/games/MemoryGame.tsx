import React, { useState, useEffect, useRef } from "react";
import { ResetButton, GameContainer, Header } from "./components";

interface Card {
  id: number;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryGame: React.FC = () => {
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2.5 my-5 mx-auto justify-center w-[calc(100vw-40px)] max-w-3xl">
        {board.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            disabled={isCheckingRef.current || card.isMatched}
            className={`w-24 h-24 text-2xl border-2 transition-all duration-200 ${
              gameHasFinished
                ? "bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-500 text-white"
                : card.isFlipped || card.isMatched
                ? "bg-gray-100 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100"
                : "bg-white dark:bg-slate-800 border-gray-400 dark:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-700"
            } ${
              card.isMatched ? "cursor-default" : "cursor-pointer"
            } disabled:cursor-not-allowed`}
          >
            {card.isFlipped || card.isMatched ? card.pairId : ""}
          </button>
        ))}
      </div>

      <ResetButton onClick={handleReset} />
    </GameContainer>
  );
};

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
