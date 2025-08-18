import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  loading?: boolean;
  clearable?: boolean;
  passwordToggle?: boolean;
  id?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  loading = false,
  clearable = false,
  passwordToggle = false,
  id,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = id || React.useId();

  const sizeCls =
    size === "sm" ? "size-sm" : size === "lg" ? "size-lg" : "size-md";
  const variantCls =
    variant === "filled"
      ? "input-filled"
      : variant === "ghost"
      ? "input-ghost"
      : "input-outlined";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-gray-400 dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={passwordToggle && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`input-base ${variantCls} ${sizeCls} ${
            disabled ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed" : ""
          } ${invalid ? "border-red-500" : ""}`}
        />

        {clearable && value && (
          <button
            type="button"
            aria-label="Clear"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {helperText && !invalid && (
        <p
          className="mt-1 text-xs text-gray-400 dark:text-gray-100"
          role="note"
        >
          {helperText}
        </p>
      )}
      {invalid && errorMessage && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
