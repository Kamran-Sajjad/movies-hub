
import React from "react";

export const TextField = ({ field, register, errorMessage }) => {
  return (
    <div className="relative mb-3">
      <input
        id={field.name}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.name)}
        className="px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white 
          focus:outline-none focus:ring-2 focus:ring-white w-full"
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
