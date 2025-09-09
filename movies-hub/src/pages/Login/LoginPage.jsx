import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { successToast, errorToast } from "../../utils/displayToast";
import { API_TOKEN } from "../../lib/constant/constants";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_API } from "../../lib/api";
import { ROUTES } from "../../routes/routeConstants";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    let hasError = false;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Please enter your email." }));
      hasError = true;
    }
    if (!password) {
      setErrors((prev) => ({
        ...prev,
        password: "Please enter your password.",
      }));
      hasError = true;
    }

    if (hasError) return;

    try {
      const payload = { email, password };
      const response = await LOGIN_USER_API.login(payload);
      const data = response.data;

      successToast("Login successful!");
      setEmail("");
      setPassword("");
      localStorage.setItem("token", API_TOKEN);
      navigate(ROUTES.MOVIES);
    } catch (error) {
      console.error("Login failed:", error);
      errorToast("Invalid credentials. Please try again.");
    }
  };

  const handleForgetPassword = () => {
    alert("Forgot password functionality not implemented yet.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-700 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 p-8 rounded-lg shadow-lg flex flex-col w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>

     
        <div className="mb-3">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
          {errors.email?<p className="text-red-500 text-sm mt-1">{errors.email}</p>:<></>}
        </div>

        <div className="relative mb-3">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 w-full pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password ?<p className="text-red-500 text-sm mt-1">{errors.password}</p>:<></>}
        </div>

        <button
          type="submit"
          className="mt-2 py-2 rounded bg-red-600 text-white font-bold text-base hover:bg-red-700 transition-colors"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleForgetPassword}
          className="mt-3 text-sm text-red-400 hover:underline focus:outline-none"
        >
          Forgot password?
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
