import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");

  useEffect(() => {
    if (!Token) {
      navigate("/login");
    }
  }, [Token, navigate]);

  return Token ? <Outlet /> : null;
};

export default ProtectedRoute;
