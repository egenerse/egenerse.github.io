import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/utils";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/", isSection: true },
    { id: "experiences", label: "Experience", path: "/", isSection: true },
    { id: "games", label: "Games", path: "/games" },
    { id: "contact", label: "Contact", path: "/", isSection: true },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.isSection && item.id !== "home") {
      // For section navigation, go to home first if not already there
      if (location.pathname !== "/") {
        window.location.href = `/#${item.id}`;
      } else {
        scrollToSection(item.id);
      }
    } else {
      closeMobileMenu();
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 md:px-8 z-50 transition-all duration-300 backdrop-blur-sm dark:text-white text-gray-900 bg-gray-300/70 dark:bg-slate-700/70"
      )}
    >
      {/* Logo/Brand */}
      <Link
        to="/"
        className="text-black dark:text-white font-bold text-xl drop-shadow-lg hover:opacity-80 transition-opacity"
      >
        Ege Nerse
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => {
          if (item.isSection && item.id !== "home") {
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "dark:text-white hover:text-gray-300 transition-colors duration-200 font-medium text-gray-900",
                  location.pathname === "/" && "cursor-pointer"
                )}
              >
                {item.label}
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={closeMobileMenu}
              className={cn(
                "dark:text-white hover:text-gray-300 transition-colors duration-200 font-medium text-gray-900",
                location.pathname === item.path && "text-primary font-bold"
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <a
          href="/src/assets/documents/EgeCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 font-medium"
        >
          CV
        </a>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button and Theme Toggle */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <button
          className="text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden backdrop-blur-sm border-t border-white/20 dark:text-white text-gray-900 bg-gray-300/70 dark:bg-slate-900/70">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => {
              if (item.isSection && item.id !== "home") {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="hover:text-gray-300  font-medium text-left"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={cn(
                    "hover:text-gray-300 font-medium text-left",
                    location.pathname === item.path && "text-primary font-bold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
