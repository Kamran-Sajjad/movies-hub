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
import { LOGIN_INPUT_FIELDS } from "../../utils/data/FieldData";
import { FieldFactory } from "../../lib/factory/FieldFactory";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../components/validation/ValidationSchema";
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
    resolver: zodResolver(loginSchema),
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
        {LOGIN_INPUT_FIELDS.map((field) => (
          <FieldFactory
            key={field.name}
            field={field}
            register={register}
            error={errors[field.name]}
          />
        ))}

        <Button
          type="submit"
          content="Login"
          variant="danger"
          isLoading={isPending}
        />
        <Button
          type="button"
          content="Forget Password"
          variant="underline"
          onClick={() =>
            alert("Forgot password functionality not implemented yet.")
          }
        />
      </AuthFormWrapper>
    </div>
  );
};

export default LoginPage;
