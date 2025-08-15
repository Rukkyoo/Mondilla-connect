import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { toggleDarkMode, initializeDarkMode } from "../js/darkModeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    initializeDarkMode();
    setDark(document.body.classList.contains("dark"));
  }, []);

  const handleToggleDark = () => {
    toggleDarkMode();
    setDark(document.body.classList.contains("dark"));
  };

  return (
    <div className="bg-[var(--background)] w-full border-b border-gray-200 dark:border-[#1e293b] sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center dark:border-[#1e293b] p-3 dark:bg-[#0b0b0c]">
        <span>
          {dark ? <img src="logo-white.png" alt="Logo" width={120} /> : <img src="logo.png" alt="Logo" width={120} />}
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-4 p-3">
          <ul className="flex flex-row space-x-4 dark:text-white">
            <li className="dark:text-white">
              <a className="dark:text-white" href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Features</a>
            </li>
            <li>
              <a href="#services">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            onClick={handleToggleDark}
            className="ml-6 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center items-center p-4">
          <HamburgerMenu
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-gray-900"
          />
          {menuOpen && (
            <div className="absolute top-0 right-0 bg-[var(--background)] shadow-lg p-4 rounded-lg border border-gray-200 dark:border-[#1e293b] min-w-48 z-50 transform transition-all duration-300 ease-in-out dark:bg-[#0b0b0c] dark:text-white">
              <HamburgerMenu
                isOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              />
              <ul className="flex flex-col space-y-3 mt-8">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">Features</a>
                </li>
                <li>
                  <a href="#services">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <button
                onClick={handleToggleDark}
                className="mt-4 w-full px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {dark ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
