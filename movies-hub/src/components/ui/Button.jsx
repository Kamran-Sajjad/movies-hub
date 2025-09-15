import React from "react";
import { Loader } from "./Loader";

const baseStyles =
  "rounded-xl px-4 cursor-pointer py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 flex items-center justify-center gap-2";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-700 text-white hover:bg-gray-500 focus:ring-gray-500",
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  danger: "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500",
  warning: "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400",
  outline:
    "text-gray-700 bg-gray-100 hover:bg-gray-700 hover:text-white focus:ring-gray-100",
  ghost: "text-black hover:scale-115 focus:outline-none ",
  disabled: "bg-gray-600 text-gray-300 cursor-not-allowed",
  underline: "text-sm text-red-400 hover:underline focus:outline-none",
  navigation: "text-sm text-white hover:underline hover:text-blue-400 focus:outline-none",
  invisible: "",
};

export const Button = ({
  content,
  variant = "secondary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={disabled || isLoading ? undefined : onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loader loaderMessage={"loading..."} /> : content}
    </button>
  );
};
