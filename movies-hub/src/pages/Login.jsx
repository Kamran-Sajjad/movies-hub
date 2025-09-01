import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setError("");
      const response = await fetch(
        "https://api-stage.spexbot.com/users/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert("Logged in!");
        setEmail("");
        setPassword("");
        console.log("Login successful:", data);
      } else {
        const errorData = await response.json();
        console.error(
          "Login failed. Please check your credentials.",
          errorData.message
        );
        return;
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Network error:", error);
      return;
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

        {error && <div className="text-red-600 mb-2 text-base">{error}</div>}

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="mb-3 px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
        />

        <div className="relative mb-3">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
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

export default Login;
