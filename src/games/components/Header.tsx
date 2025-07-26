import React from "react";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="font-bold text-2xl text-gray-900 dark:text-slate-100">
      {title}
    </div>
  );
};
