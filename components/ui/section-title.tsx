import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-base-content flex items-center gap-2.5 text-lg font-semibold sm:text-xl",
        className,
      )}
      {...props}
    >
      <span className="bg-primary inline-block h-5 w-1.5 shrink-0 rounded-full sm:h-6" />
      {children}
    </h2>
  );
}
