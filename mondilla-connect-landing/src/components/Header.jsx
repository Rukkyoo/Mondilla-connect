import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { toggleDarkMode, subscribeToTheme } from "../js/darkModeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Subscribe to theme changes
    const unsubscribe = subscribeToTheme((theme) => {
      setIsDark(theme === 'dark');
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const handleToggleDark = () => {
    toggleDarkMode();
  };

  return (
    <header className="bg-[var(--bg-secondary)] w-full border-b border-[var(--border-primary)] sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center border-[var(--border-primary)] p-3 bg-[var(--bg-secondary)]">
        <span>
          <img
            src={isDark ? "logo-white.png" : "logo.png"}
            alt="Logo"
            width={120}
          />
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-4 p-3">
          <ul className="flex flex-row space-x-6 text-[var(--text-primary)]">
            <li>
              <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-2" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-2" href="#features">Features</a>
            </li>
            <li>
              <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-2" href="#pricing">Pricing</a>
            </li>
            <li>
              <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-2" href="#contact">Contact</a>
            </li>
          </ul>
          <button
            onClick={handleToggleDark}
            className="ml-6 px-3 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center items-center p-4">
          <HamburgerMenu
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          />
          {menuOpen && (
            <div className="absolute top-0 right-0 bg-[var(--bg-secondary)] shadow-lg p-4 rounded-lg border border-[var(--border-primary)] min-w-48 z-50 transform transition-all duration-300 ease-in-out text-[var(--text-primary)]">
              <HamburgerMenu
                isOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
                className="absolute top-2 right-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              />
              <ul className="flex flex-col space-y-4 mt-8">
                <li>
                  <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-1" href="#home">Home</a>
                </li>
                <li>
                  <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-1" href="#features">Features</a>
                </li>
                <li>
                  <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-1" href="#pricing">Pricing</a>
                </li>
                <li>
                  <a className="nav-link-underline text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors py-1" href="#contact">Contact</a>
                </li>
              </ul>
              <button
                onClick={handleToggleDark}
                className="mt-4 w-full px-3 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDark ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;