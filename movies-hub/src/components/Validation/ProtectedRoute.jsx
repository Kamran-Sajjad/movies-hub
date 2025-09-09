
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../lib/store/useAuthStore";
import { ROUTES } from "../../routes/routeConstants";

export const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

