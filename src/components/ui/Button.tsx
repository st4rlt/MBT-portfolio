import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-mbt-gold)] text-white hover:bg-yellow-600 border border-[var(--color-mbt-gold)]",
      secondary: "bg-[var(--color-mbt-black)] text-white hover:bg-gray-800",
      outline: "border border-[var(--color-mbt-black)] text-[var(--color-mbt-black)] hover:bg-[var(--color-mbt-black)] hover:text-white",
      ghost: "text-[var(--color-mbt-black)] hover:bg-[var(--color-mbt-beige)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
