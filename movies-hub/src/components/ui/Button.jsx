// Reusable button component
export const NavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-700 hover:bg-yellow-400 hover:text-black text-white rounded-xl px-3 py-1 
    cursor-pointer text-base transition-colors duration-200"
  >
    {label}
  </button>
);
const colorMap = {
  yellow: "hover:bg-yellow-400 hover:text-black",
  red: "hover:bg-red-500 hover:text-white",
};

export const NavProfileButton = ({ label, onClick, bgColor }) => {
  const colorClass = colorMap[bgColor];

  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 text-sm text-white rounded-md transition-colors ${colorClass}`}
    >
      {label}
    </button>
  );
};
