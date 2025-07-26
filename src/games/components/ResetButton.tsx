import React from "react";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

const ResetButton: React.FC<Props> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-4 px-4 py-2 text-base bg-blue-600 text-white border-none rounded cursor-pointer hover:bg-blue-700"
    >
      Reset
    </motion.button>
  );
};

export default ResetButton;
