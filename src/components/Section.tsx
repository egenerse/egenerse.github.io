import { cn } from "@/utils";
import React from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  variant = "primary",
}) => {
  const baseClasses =
    "min-h-screen w-full flex items-center justify-center py-16 transition-colors duration-300";

  const variantClasses = {
    primary: "bg-gray-300 dark:bg-slate-900",
    secondary: "bg-gray-200 dark:bg-slate-800",
  };

  return (
    <section
      id={id}
      className={cn(`${baseClasses} ${variantClasses[variant]} ${className}`)}
    >
      {children}
    </section>
  );
};
