import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  validationMessage?: string;
  isInvalid?: boolean;
}

const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ validationMessage, isInvalid, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className="w-full px-3 py-2 border border-borderPrimary rounded bg-backgroundSecondary placeholder:text-textTertiary text-textSecondary"
          {...props}
        />
        {validationMessage && isInvalid && (
          <p className="text-xs text-red-500 mt-1"> {validationMessage}</p>
        )}
      </>
    );
  }
);

InputComponent.displayName = "InputComponent";

export const Input = InputComponent;
