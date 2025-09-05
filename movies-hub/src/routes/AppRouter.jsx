import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routeConstants";
import { ProtectedRoute } from "../components/validation/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import Error404 from "../pages/Invalid/Error404";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element, isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute>{<Element />}</ProtectedRoute>
              ) : (
                <Element />
              )
            }
          />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default AppRouter;
