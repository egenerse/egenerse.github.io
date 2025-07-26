import React from "react";

interface Props {
  onClick: () => void;
}

export const ResetButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 text-base bg-blue-600 dark:bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110 transition-all duration-200"
    >
      Reset
    </button>
  );
};
