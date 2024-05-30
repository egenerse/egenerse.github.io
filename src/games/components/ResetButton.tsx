import styled from "@emotion/styled";
import React from "react";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

interface Props {
  onClick: () => void;
}

const ResetButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
