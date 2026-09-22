import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Table({
  className,
  ...props
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="border-base-300/60 overflow-x-auto rounded-box border">
      <table
        className={cn(
          "table table-zebra [&_td]:py-4 [&_td]:px-5 [&_th]:py-4 [&_th]:px-5",
          className,
        )}
        {...props}
      />
    </div>
  );
}
