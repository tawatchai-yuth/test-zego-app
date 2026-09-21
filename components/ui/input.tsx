import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const Input = ({ className, prefix, suffix, ...props }: InputProps) => {
  if (prefix || suffix) {
    return (
      <label className={cn("input w-full", className)}>
        {prefix && <span className="label">{prefix}</span>}
        <input {...props} />
        {suffix && <span className="label">{suffix}</span>}
      </label>
    );
  }

  return <input className={cn("input w-full", className)} {...props} />;
};

export default Input;
