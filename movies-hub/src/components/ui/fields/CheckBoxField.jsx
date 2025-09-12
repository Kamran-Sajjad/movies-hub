import React from "react";

export const CheckboxField = ({ name, label, register, errorMessage }) => {
  return (
    <div className="mb-3 flex items-center space-x-2">
      <input
        id={name}
        type="checkbox"
        {...register(name)}
        className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
      />
      <label htmlFor={name} className="text-white text-sm">
        {label}
      </label>
      <div className="min-h-[20px]">
        {errorMessage ? <p className="text-red-500 text-sm">{errorMessage}</p>:<></>}
      </div>
    </div>
  );
};
