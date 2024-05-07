import { cn } from "@/utils/cn";
import { FilterTypeSelectProps, Option } from "./defs";

const FilterTypeSelect = <T extends string | number | Option>({
  id,
  label,
  value,
  defaultValue,
  options,
  defaultOptionLabel,
  onChange,
  className,
}: FilterTypeSelectProps<T>) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = e.target.value;
    onChange(selectedValue as unknown as T);
  };

  return (
    <>
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-medium leading-6 text-gray-900 mb-4",
          className
        )}
      >
        {label}
      </label>
      <select
        className="block py-4 px-4 w-full text-base text-dark-blue bg-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        id={id}
        value={value === null ? "" : (value as unknown as string)}
        onChange={handleChange}
      >
        {defaultOptionLabel ? null : (
          <option value="" disabled>
            Choose {defaultValue}
          </option>
        )}
        {options.map(
          (
            option,
            index // Please note using index for a key not a good practice - aware of that
          ) => (
            <option
              key={index}
              value={typeof option === "object" ? option.value : option}
            >
              {typeof option === "object" ? option.label : option}
              {option ? "" : `${defaultOptionLabel}`}
            </option>
          )
        )}
      </select>
    </>
  );
};

export { FilterTypeSelect };
