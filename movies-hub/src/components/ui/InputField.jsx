
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const InputField = ({
  name,
  type = "text",
  placeholder,
  register,
  validation = {},
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-3">
      <input
        id={name}
        type={inputType}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white 
          focus:outline-none focus:ring-2 focus:ring-red-600 w-full
          ${type === "password" ? "pr-10" : ""}`}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}

      {error ? <p className="text-red-500 text-sm mt-1">{error.message}</p>:<></>}
    </div>
  );
};
