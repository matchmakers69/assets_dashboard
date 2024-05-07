export interface Option {
  value: string | number;
  label: string;
}
export interface FilterTypeSelectProps<T> {
  id: string;
  label: string;
  value: T | "" | null;
  defaultValue?: string;
  defaultOptionLabel?: string;
  className?: string;
  options: (T extends string | number ? string | number : Option)[];
  onChange: (value: T) => void;
}
