import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

const Radio = ({ className, label, ...props }: RadioProps) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input type="radio" className={cn("radio", className)} {...props} />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
