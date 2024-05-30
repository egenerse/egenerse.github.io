import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Header;
