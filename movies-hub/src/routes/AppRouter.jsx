import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  protectedRoutes,
  publicRoutes,
  commonRoutes,
  ROUTES,
} from "./routeConstants";
import { ProtectedRoute } from "../components/validation/ProtectedRoute";
import { ToastContainer } from "react-toastify";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}

        {protectedRoutes.map(({ path, element: Element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute>
                <Element />
              </ProtectedRoute>
            }
          />
        ))}

        {commonRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default AppRouter;
