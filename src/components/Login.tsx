import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormInput, loginInputSchema } from "types/validation";
import { useConstructFormInputArgs } from "utils/form";

import { Input } from "./Input";

export const Login = ({
  onRegisterClick,
}: {
  onRegisterClick?: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const useFormMethods = useForm<LoginFormInput>({
    resolver: zodResolver(loginInputSchema),
    mode: "onBlur",
  });
  const { handleSubmit } = useFormMethods;
  const onSubmit = () => {
    const { emailOrUsername } = useFormMethods.getValues();

    sessionStorage.setItem("emailOrUsername", emailOrUsername);
    sessionStorage.setItem("isLoggedIn", "true");

    navigate("/posts");
  };

  function onRegisterButtonClick() {
    if (location.pathname.includes("posts")) {
      onRegisterClick?.();
    } else {
      navigate("/register");
    }
  }

  return (
    <div className="bg-backgroundSecondary p-8 rounded-lg shadow-md w-[350px]">
      <h3 className="text-sm mb-2 text-textTertiary text-center">
        WELCOME BACK
      </h3>
      <h2 className="text-lg text-white font-bold mb-4 text-center">
        Log into your account
      </h2>
      <FormProvider {...useFormMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginForm />
        </form>
      </FormProvider>

      <p className="mt-4 text-white">
        Don't have an account?{" "}
        <button onClick={onRegisterButtonClick} className="text-primaryButton">
          Register
        </button>
      </p>
    </div>
  );
};

export const LoginForm = () => {
  const constructFormInputArgs = useConstructFormInputArgs();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="block text-textSecondary mb-2">
          Email or Username
        </label>
        <Input
          {...constructFormInputArgs("emailOrUsername")}
          placeholder="Enter your email or username"
          id="email"
        />
      </div>
      <div className="mb-4 relative">
        <div className="flex justify-between">
          <label htmlFor="password" className="block text-textSecondary mb-2">
            Password
          </label>
          <label htmlFor="password" className="block text-textSecondary mb-2">
            Forgot password?
          </label>
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          {...constructFormInputArgs("password")}
        />

        <button
          type="button"
          className="absolute right-2 top-[44px] text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-primaryButton text-white py-2 rounded"
      >
        Login Now
      </button>
    </>
  );
};
