import React from "react";

export const CheckboxField = ({field, register, errorMessage }) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <input
          id={field.name}
          type="checkbox"
          {...register(field.name)}
          className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
        />
        <label htmlFor={field.name} className="text-white text-sm">
          {field.label}
        </label>
      </div>

      <div className="mb-3 min-h-[25px]">
        {errorMessage && (
          <p className="text-red-500 text-sm  ">{errorMessage}</p>
        )}
      </div>
    </>
  );
};
