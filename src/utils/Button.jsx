import React from "react";

const Button = ({ children, type = "submit", className = "" }) => {
  return (
    <button
      type={type}
      className={`
        px-5 py-2 rounded-xl font-medium text-white
        bg-secondary hover:bg-secondary/90 active:scale-95
        transition-all duration-200 cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
