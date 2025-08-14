import React from 'react';

const HamburgerMenu = ({ isOpen, onClick, className = "" }) => {
  return (
    <button
      className={`relative w-10 h-10 flex flex-col justify-center items-center cursor-pointer hover:opacity-70 transition-opacity duration-200 ${className}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <span
        className={`block w-7 h-0.5 bg-current transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'rotate-45 translate-y-1.5' 
            : 'rotate-0 translate-y-0'
        }`}
      />
      
      {/* Middle line */}
      <span
        className={`block w-7 h-0.5 bg-current transition-all duration-300 ease-in-out my-1.5 ${
          isOpen 
            ? 'opacity-0 scale-0' 
            : 'opacity-100 scale-100'
        }`}
      />
      
      {/* Bottom line */}
      <span
        className={`block w-7 h-0.5 bg-current transition-all duration-300 ease-in-out ${
          isOpen 
            ? '-rotate-45 -translate-y-1.5' 
            : 'rotate-0 translate-y-0'
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;