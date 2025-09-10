
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { successToast, errorToast } from "../../utils/displayToast";
import { AUTH_API } from "../../lib/api";
import { ROUTES } from "../../routes/routeConstants";
import { Button } from "../../components/ui/Button";
import { InputField } from "../../components/ui/InputField";
import { FormWrapper } from "../../components/layout/FormWrapper";
import { useAuthStore } from "../../lib/store/useAuthStore";
import { API_TOKEN } from "../../lib/constant/constants";
import { LOGIN_INPUT_FIELDS } from "../../components/ui/FieldData";

const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginMutation = useMutation({
    mutationFn: (data) => AUTH_API.login(data),
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

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-700 px-4">
      <FormWrapper title="Login" onSubmit={handleSubmit(onSubmit)}>
        {LOGIN_INPUT_FIELDS.map(({ name, type, placeholder, validation }) => (
          <InputField
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            register={register}
            validation={validation}
            error={errors[name]}
          />
        ))}

        <Button
          label="Login"
          variant="danger"
          isLoading={loginMutation.isPending}
        />
        <Button
          label="Forget Password"
          variant="underline"
          onClick={() => alert("Forgot password functionality not implemented yet.")}
        />
      </FormWrapper>
    </div>
  );
};

export default LoginPage;
