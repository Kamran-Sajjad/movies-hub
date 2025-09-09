import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={ROUTES.LOGIN} />;
};
