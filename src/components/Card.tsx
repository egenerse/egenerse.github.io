import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  content: string[];
  logo?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, content, logo }) => {
  return (
    <div className="bg-white p-6 m-0 shadow-lg rounded-lg max-w-sm box-border transition-all duration-300 ease-in-out z-10 hover:-translate-y-2.5 hover:shadow-xl">
      <div className="flex flex-row items-center mx-4 justify-between">
        <h3>{title}</h3>
        {logo && <img src={logo} alt={logo} className="max-w-10 max-h-10 w-auto h-auto" />}
      </div>
      {subtitle && <h4 className="my-2 text-gray-600">{subtitle}</h4>}

      <ul>
        {content.map((text, index) => (
          <li key={index} style={{ textAlign:'start'}}>
            <p className="my-2">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
