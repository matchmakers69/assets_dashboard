import { forwardRef, type ForwardedRef } from "react";
import { cn } from "@/utils/cn";
import { ButtonProps } from "./defs";

const Button = forwardRef(
  (
    { label, className, ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          className
        )}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
