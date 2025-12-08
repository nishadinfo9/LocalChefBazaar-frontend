import React from "react";

const Button = ({
  onClick,
  children,
  size = "",
  bg = "btn-secondary",
  rounded = "rounded-xl",
  type = "submit",
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        btn ${bg} ${size} ${rounded} font-medium hover:${bg}/90
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
