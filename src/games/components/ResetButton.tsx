import React from "react";

interface Props {
  onClick: () => void;
}

export const ResetButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 text-base bg-blue-600 text-white border-none rounded cursor-pointer hover:bg-blue-700 hover:scale-110 "
    >
      Reset
    </button>
  );
};
