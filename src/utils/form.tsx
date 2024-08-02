import { FieldValues, useFormContext } from "react-hook-form";
import { LoginFormInput, RegisterFormInput } from "types/validation";

export const useConstructFormInputArgs = <
  T extends FieldValues = LoginFormInput & RegisterFormInput
>() => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (...args: Parameters<typeof register>) => {
    const { max, min, ...rest } = register(...args);
    const [name] = args;
    const error = errors?.[name];

    return {
      ...rest,
      variation: "small" as const,
      validationMessage: error?.message,
      isInvalid: !!error,
      max: max === undefined ? undefined : Number(max),
      min: min === undefined ? undefined : Number(min),
    };
  };
};
