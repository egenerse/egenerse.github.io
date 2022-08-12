import React from "react";

type SquareProps = {
  onClick: () => void;
  value: string;
};

export const Square: React.FC<SquareProps> = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
