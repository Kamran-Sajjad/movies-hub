import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { successToast, errorToast } from "../../utils/displayToast";
import { AUTH_API } from "../../lib/api";
import { ROUTES } from "../../routes/routeConstants";
import { Button } from "../../components/ui/Button";
import { AuthFormWrapper } from "../../components/layout/AuthFormWrapper";
import { useAuthStore } from "../../lib/store/useAuthStore";
import { API_TOKEN } from "../../lib/constant/constants";
import { loginFieldsData } from "../../utils/data/FieldData";
import { InputFieldSelection } from "../../lib/factory/InputFieldSelection";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  const submitFormData = (payload) => mutate(payload);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFieldsData.loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => AUTH_API.login(payload),
    onSuccess: () => {
      successToast("Login successful!");
      reset();
      setToken(API_TOKEN);
      navigate(ROUTES.MOVIES);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      errorToast("Invalid credentials. Please try again.");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-700 px-4">
      <AuthFormWrapper title="Login" onSubmit={handleSubmit(submitFormData)}>
        {loginFieldsData.inputFields.map((field, index) => (
          <div key={field.name} className="w-full">
            <InputFieldSelection
              field={field}
              register={register}
              errorMessage={errors[field.name]?.message}
            />
            {field.name === "password" && (
              <div className="flex justify-end ">
                <Button
                  type="button"
                  content="Forgot Password?"
                  variant="underline"
                  onClick={() =>
                    alert("Forgot password functionality not implemented yet.")
                  }
                />
              </div>
            )}
          </div>
        ))}

        <Button
          type="submit"
          content="Login"
          variant="danger"
          isLoading={isPending}
          className="w-full mt-2"
        />

        <div className="flex justify-center mt-4">
          <Button
            type="button"
            content="Don't have an account? Signup"
            variant="navigation"
            onClick={() => navigate(ROUTES.SIGNUP)}
          />
        </div>
      </AuthFormWrapper>
    </div>
  );
};

export default LoginPage;
