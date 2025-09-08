
import React from "react";

const baseStyles =
  "rounded-xl px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary:
    "bg-gray-700 text-white hover:bg-gray-500 focus:ring-gray-500",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  danger:
    "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500",
  warning:
    "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400",
  outline:
    "text-gray-700 bg-gray-100 hover:bg-gray-700 hover:text-white focus:ring-gray-100",
  ghost:
    "text-black hover:bg-gray-200 focus:ring-gray-300",
    disabled:
    "bg-gray-600 text-gray-300 cursor-not-allowed",
    invisible:
    "",
};


export const Button = ({ label, variant = "secondary",onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};





