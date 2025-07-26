import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  content: string[];
  logo?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  logo,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 p-6 m-0 shadow-lg dark:shadow-slate-900/20 rounded-lg max-w-sm box-border transition-all duration-300 ease-in-out z-10 hover:-translate-y-2.5 hover:shadow-xl dark:hover:shadow-slate-900/30">
      <div className="flex flex-row items-center mx-4 justify-between">
        <h3 className="text-gray-900 dark:text-slate-100 font-semibold">
          {title}
        </h3>
        {logo && (
          <img
            src={logo}
            alt={logo}
            className="max-w-10 max-h-10 w-auto h-auto"
          />
        )}
      </div>
      {subtitle && (
        <h4 className="my-2 text-gray-600 dark:text-slate-300 font-medium">
          {subtitle}
        </h4>
      )}

      <ul>
        {content.map((text, index) => (
          <li key={index} style={{ textAlign: "start" }}>
            <p className="my-2 text-gray-700 dark:text-slate-200">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
