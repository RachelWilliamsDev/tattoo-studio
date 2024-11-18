import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("whitespace-pre-wrap", {
  variants: {
    size: {
      sm: "text-sm md:text-lg",
      base: "text-base md:text-xl",
      lg: "text-lg md:text-2xl",
      xl: "text-2xl md:text-[32px]",
      "2xl": "text-[40px] md:text-[64px]",
      "3xl": "text-[80px] md:text-[112px]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      secondaryForeground: "text-secondary-foreground",
      accent: "text-accent",
      muted: "text-muted",
      white: "text-white",
      black: "text-black",
      red: "text-red-500",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    font: {
      angel: "font-angel",
      satoshi: "font-satoshi",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
    color: "secondaryForeground",
    align: "left",
    font: "satoshi",
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "p",
      className,
      size,
      weight,
      color,
      align,
      font,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({ size, weight, color, align, font, className })
        )}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
