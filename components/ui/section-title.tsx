import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-base-content text-lg font-semibold sm:text-xl",
        className,
      )}
      {...props}
    />
  );
}
