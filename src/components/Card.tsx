import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  background: white;
  padding: 1rem;
  margin: 0rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  max-width: 40px;
  max-height: 40px;
  width: auto;
  height: auto;
`;

const CardSubtitle = styled.h4`
  margin: 0.5rem 0;
  color: #666;
`;

const CardContent = styled.p`
  margin: 0.5rem 0;
`;

const CardHeader = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  justify-content: space-between;
`;

interface CardProps {
  title: string;
  subtitle?: string;
  content: string[];
  logo?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, content, logo }) => {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{title}</h3>
        {logo && <Logo src={logo} alt={logo} />}
      </CardHeader>
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {content.map((text, index) => (
        <CardContent key={index}>{text}</CardContent>
      ))}
    </CardContainer>
  );
};

export default Card;
