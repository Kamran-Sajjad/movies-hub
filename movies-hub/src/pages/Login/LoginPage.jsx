import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { successToast, errorToast } from "../../utils/displayToast";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_API } from "../../lib/api";
import { ROUTES } from "../../routes/routeConstants";
import { Button } from "../../components/ui/Button";
import { useAuthStore } from "../../lib/store/useAuthStore";
import { API_TOKEN } from "../../lib/constant/constants";
import { useForm } from "react-hook-form";
import { LOGIN_INPUT_FIELDS } from "../../components/ui/FieldData";

const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await LOGIN_USER_API.login(data);

      successToast("Login successful!");
      reset();
      setToken(API_TOKEN);
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
        onSubmit={handleSubmit(onSubmit)}
        className="bg-neutral-800 p-8 rounded-lg shadow-lg flex flex-col w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>

        {LOGIN_INPUT_FIELDS.map(({ name, type, placeholder, validation }) => (
          <div key={name} className="relative mb-3">
            <input
              type={
                name === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder}
              {...register(name, validation)}
              className={`px-3 py-2 rounded bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 w-full
                ${name === "password" ? "pr-10" : ""}`}
            />
            {name === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            )}

            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name].message}
              </p>
            )}
          </div>
        ))}

        <Button label="Login" variant="danger" isLoading={isSubmitting} />
        <Button
          label="Forget Password"
          variant="underline"
          onClick={handleForgetPassword}
        />
      </form>
    </div>
  );
};

export default LoginPage;
