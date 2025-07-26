import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameContainer: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col items-center justify-center p-8">{children}</div>;
};

export default GameContainer;
