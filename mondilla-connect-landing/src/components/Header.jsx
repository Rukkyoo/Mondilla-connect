import React from "react";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[var(--background)] w-full border-b border-gray-200 ">
      <div className="flex flex-row justify-between items-center  p-3">
        <span>
          <img src="logo.png" alt="Logo" width={120} />
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-4 p-3">
          <ul className="flex flex-row space-x-4">
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
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center items-center p-4">
          <HamburgerMenu 
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-gray-900"
          />
            {menuOpen && (
                <div className="absolute top-0 right-0 bg-[var(--background)] shadow-lg p-4 rounded-lg border border-gray-200 min-w-48 z-50 transform transition-all duration-300 ease-in-out">
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
                </div>
            )}
        </nav>
      </div>
    </div>
  );
};

export default Header;