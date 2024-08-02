import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterFormInput, registerInputSchema } from "types/validation";
import { useConstructFormInputArgs } from "utils/form";

import { Input } from "./Input";

export const Register = ({ onLoginClick }: { onLoginClick?: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const useFormMethods = useForm<RegisterFormInput>({
    resolver: zodResolver(registerInputSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit = () => {
    const { email } = useFormMethods.getValues();

    sessionStorage.setItem("emailOrUsername", email);
    sessionStorage.setItem("isLoggedIn", "true");

    navigate("/posts");
  };

  function onLoginButtonClick() {
    if (location.pathname.includes("posts")) {
      onLoginClick?.();
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="bg-backgroundSecondary p-8 rounded-lg shadow-md w-[350px]">
      <h3 className="text-sm mb-2 text-textTertiary text-center">SIGN UP</h3>
      <h2 className="text-lg text-white font-bold mb-4 text-center">
        Create an account to continue
      </h2>
      <FormProvider {...useFormMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterForm />
        </form>
      </FormProvider>

      <p className="mt-4 text-textTertiary">
        Already have an account?{" "}
        <button className="text-white" onClick={onLoginButtonClick}>
          Login →
        </button>
      </p>
    </div>
  );
};

export const RegisterForm = () => {
  const constructFormInputArgs = useConstructFormInputArgs();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="block text-textSecondary mb-2">
          Email
        </label>
        <Input
          {...constructFormInputArgs("email")}
          placeholder="Enter your email"
          id="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-textSecondary mb-2">
          Username
        </label>
        <Input
          {...constructFormInputArgs("username")}
          placeholder="Choose a preferred username"
          id="email"
        />
      </div>
      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-textSecondary mb-2">
          Password
        </label>
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Choose a strong password"
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
        Continue
      </button>
    </>
  );
};
