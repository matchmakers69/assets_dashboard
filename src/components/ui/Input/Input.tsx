import { useId, forwardRef, type Ref } from "react";
import { InputProps } from "./defs";

const Input = forwardRef(
  ({ label, className, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    const id = useId();

    return (
      <div className="py-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className={"mt-2"}>
          <input
            ref={ref}
            id={id}
            className={`block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ishot-yellow sm:text-sm sm:leading-6 ${className}`}
            aria-describedby="input-description"
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
