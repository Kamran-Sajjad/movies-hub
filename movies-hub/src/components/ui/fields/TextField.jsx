import React from "react";

export const TextField = ({
  name,
  type = "text",
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <div className="relative mb-3">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white 
          focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
      />
      <div className="min-h-[20px]">
        {errorMessage ? (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
