import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
}

const Select = ({ className, options, placeholder, ...props }: SelectProps) => {
  return (
    <select className={cn("select w-full", className)} {...props}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
