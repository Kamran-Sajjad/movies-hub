import React from "react";

export const RadioField = ({
  field,
  register,
  errorMessage,
}) => {
  return (
    <div className="mb-3">
      <div className="flex space-x-4">
        {field.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-1 text-white text-sm"
          >
            <input
              type="radio"
              value={option}
              {...register(field.name)}
              className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div className="min-h-[20px]">
        {errorMessage ? <p className="text-red-500 text-sm">{errorMessage}</p>:<></>}
      </div>
    </div>
  );
};
