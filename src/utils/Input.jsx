import React from "react";

const Input = ({
  label,
  bg = "bg-base-100",
  className = "",
  type = "text",
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-neutral font-medium">{label}</label>}
      <input
        type={type}
        className={`px-4 py-2 rounded-xl border border-gray-300
          focus:border-secondary focus:ring-secondary focus:ring-1 outline-none
          ${bg} text-gray-800 placeholder-gray-400 
          transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
