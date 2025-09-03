import React, { useState } from "react";
import { NavButton, NavProfileButton } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (label) => {
    console.log(label, "button clicked");
    switch (label) {
      case "home":
        navigate("/home");
        break;
      case "favorites":
        navigate("/favorites");
        break;
      case "watchlist":
        navigate("/watchlist");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "logout":
        localStorage.removeItem("Token");
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const handleFieldChange = (field) => {
    if (field === "search") {
      setSearch(e.target.value);
    }
  };
  const handleImageClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between px-6 h-16 bg-gray-900 text-white shadow-md relative">
      <div className="font-bold text-2xl tracking-wide cursor-pointer hover:text-yellow-400 transition-colors">
        MoviesHub
      </div>

      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search any movie"
          onChange={(e) => handleFieldChange("search")}
          className="w-full max-w-md px-4 py-2 rounded-full border-none outline-none text-base 
                     bg-gray-700 text-white placeholder-gray-400 
                     focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
        />
      </div>

      <div className="flex items-center gap-3 relative">
        <NavButton label="Home" onClick={(e) => handleButtonClick("home")} />
        <NavButton
          label="Favorites"
          onClick={(e) => handleButtonClick("favorites")}
        />
        <NavButton
          label="Watchlist"
          onClick={(e) => handleButtonClick("watchlist")}
        />

        <div className="relative">
          <img
            src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg?w=360"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-none cursor-pointer hover:scale-105 transition-transform"
            onClick={handleImageClick}
          />

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg p-2 z-20">
              <NavProfileButton
                label="Profile"
                onClick={(e) => handleButtonClick("profile")}
                bgColor="yellow"
              />
              <NavProfileButton
                label="logout"
                onClick={(e) => handleButtonClick("logout")}
                bgColor="red"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
