import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </Router>
      
 
    </>
  );
}

export default App;
