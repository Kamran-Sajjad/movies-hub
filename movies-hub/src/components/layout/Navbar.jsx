

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleHomeButtonClick = () => navigate("/home");
  const handleFavoritesButtonClick = () => navigate("/favorites");
  const handleProfileButtonClick = () => navigate("/profile");
  const handleLogoutButtonClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSearchFieldChange = (e) => setSearch(e.target.value);
  const handleImageClick = () => setShowMenu((prev) => !prev);

  return (
    <nav className="flex items-center justify-between px-6 h-16 bg-gray-900 text-white shadow-md relative">
      <div
        onClick={handleHomeButtonClick}
        className="font-bold text-2xl tracking-wide cursor-pointer hover:text-yellow-400 transition-colors"
      >
        MoviesHub
      </div>

      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search any movie"
          value={search}
          onChange={handleSearchFieldChange}
          className="w-full max-w-md px-4 py-2 rounded-full border-none outline-none text-base 
                     bg-gray-700 text-white placeholder-gray-400 
                     focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
        />
      </div>

      {/* Buttons + Profile */}
      <div className="flex items-center gap-3 relative">
        <Button
          label="Home"
          onClick={handleHomeButtonClick}
          variant="secondary"
        />
        <Button
          label="Favorites"
          onClick={handleFavoritesButtonClick}
          variant="secondary"
        />

        {/* Profile dropdown */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg?w=360"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-600 cursor-pointer hover:scale-105 transition-transform"
            onClick={handleImageClick}
          />

          {showMenu && (
            <div className="absolute right-0 mt-2 w-36 bg-gray-700 rounded-lg shadow-lg p-2 z-20">
              <Button
                label="Profile"
                onClick={handleProfileButtonClick}
                variant="secondary"
              />
              <Button
                label="Logout"
                onClick={handleLogoutButtonClick}
                variant="danger"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
