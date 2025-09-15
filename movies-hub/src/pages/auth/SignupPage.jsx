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
import { signupFieldsData } from "../../utils/data/FieldData";
import { InputFieldSelection } from "../../lib/factory/InputFieldSelection";
import { zodResolver } from "@hookform/resolvers/zod";
const SignupPage = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  const submitFormData = (payload) => {
    console.log(payload);
    reset();
    successToast("Signup Sucessfully");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupFieldsData.signupSchema),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-700 px-4">
      <AuthFormWrapper title="Signup" onSubmit={handleSubmit(submitFormData)}>
        {signupFieldsData.inputFields.map((field) => (
          <InputFieldSelection
            key={field.name}
            field={field}
            register={register}
            errorMessage={errors[field.name]?.message}
          />
        ))}

        <Button type="submit" content="Login" variant="danger" />
        <Button
          type="button"
          content="Already have an account ? Login"
          variant="navigation"
          onClick={() => navigate(ROUTES.LOGIN)}
        />
      </AuthFormWrapper>
    </div>
  );
};

export default SignupPage;
