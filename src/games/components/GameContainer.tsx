import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

interface Props {
  children: React.ReactNode;
}

const GameContainer: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GameContainer;
