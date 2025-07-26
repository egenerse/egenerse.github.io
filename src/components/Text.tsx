import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "heading" | "subheading" | "body" | "caption";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  className = "",
  as,
}) => {
  const variantClasses = {
    heading: "text-4xl font-bold text-gray-900 dark:text-slate-100",
    subheading: "text-2xl font-semibold text-gray-800 dark:text-slate-200",
    body: "text-lg text-gray-700 dark:text-slate-300",
    caption: "text-base text-gray-600 dark:text-slate-400",
  };

  const baseClasses = "transition-colors duration-300";
  const Component =
    as ||
    (variant === "heading" ? "h1" : variant === "subheading" ? "h2" : "p");

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className} `}
    >
      {children}
    </Component>
  );
};
