import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { ProtectedRoute } from "./components/validation/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? <ProtectedRoute element={element} /> : element
              // isProtected ? <protectedRoute element={element} /> : element
            }
          />
        ))}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
