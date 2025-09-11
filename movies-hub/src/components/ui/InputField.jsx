import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./Button";

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
      {" "}
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
        <Button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          variant="ghost"
          className="absolute right-2 top-5 -translate-y-1/2 p-1 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
          content={showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        />
      )}
      <div className="min-h-[20px]">
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    </div>
  );
};
