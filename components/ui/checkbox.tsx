import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        className={cn("checkbox", className)}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
