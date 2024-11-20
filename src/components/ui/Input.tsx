import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface InputWithButtonProps extends VariantProps<typeof inputVariants> {
  value: string;
  onChange: (value: string) => void;
  buttonText?: string;
  onButtonClick?: () => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  buttonColor?: VariantProps<typeof buttonVariants>["color"];
}

const inputVariants = cva("flex items-center px-8 py-5 font-satoshi text-lg", {
  variants: {
    color: {
      default: "bg-white text-black",
      cream: "bg-cream text-primary-foreground placeholder-primary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      ghost: "bg-transparent text-foreground border-transparent",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const buttonVariants = cva(
  "inline-flex items-center justify-center text-lg font-bold focus-visible:outline-none",
  {
    variants: {
      color: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "bg-transparent text-foreground hover:text-foreground/10",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

const Input: React.FC<InputWithButtonProps> = ({
  value,
  onChange,
  buttonText,
  onButtonClick,
  placeholder,
  type = "text",
  disabled = false,
  color = "default",
  buttonColor = "default",
}) => {
  return (
    <div className="flex items-center w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          inputVariants({ color }),
          "flex-grow outline-none",
          buttonText && onButtonClick ? "rounded-l-xl" : "rounded-xl"
        )}
      />
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className={cn(
            buttonVariants({ color: buttonColor }),
            "px-8 py-5 rounded-xl -ml-4"
          )}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Input;
