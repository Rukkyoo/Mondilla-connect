import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[var(--background)] w-full">
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
          <button
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
            {menuOpen && (
                <div className="absolute top-0 right-0 bg-white shadow-lg p-4">
                <button
                    className="absolute top-2 right-2 cursor-pointer hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                >
                    <IoMdClose />
                </button>
                <ul className="flex flex-col space-y-2">
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
