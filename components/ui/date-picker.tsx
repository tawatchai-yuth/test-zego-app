"use client";

import { useId } from "react";
import { DayPicker } from "react-day-picker";
import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type DatePickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "onChange"
> & {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
};

const DatePicker = ({
  className,
  value,
  onChange,
  placeholder = "Pick a date",
  ...props
}: DatePickerProps) => {
  const id = useId();

  const popoverId = `${id}-popover`;
  const anchorName = `--${id.replace(/:/g, "")}`;

  return (
    <>
      <button
        type="button"
        popoverTarget={popoverId}
        className={cn(
          "input w-full justify-start text-left font-normal",
          !value && "text-base-content/50",
          className,
        )}
        style={
          {
            anchorName,
          } as CSSProperties
        }
        {...props}
      >
        {value ? value.toLocaleDateString() : placeholder}
      </button>

      <div
        id={popoverId}
        popover="auto"
        className="dropdown bg-base-100 rounded-box p-2 shadow-lg"
        style={
          {
            positionAnchor: anchorName,
          } as CSSProperties
        }
      >
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={value}
          onSelect={onChange}
        />
      </div>
    </>
  );
};

export default DatePicker;
