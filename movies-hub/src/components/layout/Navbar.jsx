import React, { useContext } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import { useAuthStore } from "../../lib/store/useAuthStore";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const handleHomeButtonClick = () => navigate(ROUTES.MOVIES);
  const handleFavoritesButtonClick = () => navigate(ROUTES.FAVORITE);
  const handleProfileButtonClick = () => {};
  const handleLogoutButtonClick = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const handleImageClick = () => setShowMenu((prev) => !prev);

  return (
    <nav className="flex items-center z-30 justify-between px-6 h-16 bg-gray-900 text-white shadow-md relative">
      <div
        onClick={handleHomeButtonClick}
        className="font-bold text-2xl tracking-wide cursor-pointer hover:text-yellow-400 transition-colors"
      >
        MoviesHub
      </div>

      <div className="flex items-center gap-3 relative">
        <Button
          label="Home"
          onClick={handleHomeButtonClick}
          variant="secondary"
          isLoading={false}
        />
        <Button
          label="Favorites"
          onClick={handleFavoritesButtonClick}
          variant="secondary"
          isLoading={false}
        />

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
