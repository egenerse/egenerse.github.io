import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <div className="font-bold text-2xl">{title}</div>;
};

export default Header;
