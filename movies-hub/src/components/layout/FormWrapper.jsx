import React from "react";

export const FormWrapper = ({ title, children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-neutral-800 p-8 rounded-lg shadow-lg flex flex-col w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      {children}
    </form>
  );
};
