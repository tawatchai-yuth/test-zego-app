"use client";

import { useId, useState } from "react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { cn } from "@/lib/utils";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type MonthPickerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "onChange" | "defaultValue"
> & {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
};

const MonthPicker = ({
  className,
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = "เดือน/ปี",
  ...props
}: MonthPickerProps) => {
  const id = useId();
  const popoverId = `${id}-popover`;
  const anchorName = `--${id.replace(/:/g, "")}`;

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;
  const [viewYear, setViewYear] = useState(
    () => (value ?? new Date()).getFullYear(),
  );

  const selectMonth = (monthIndex: number) => {
    const next = new Date(viewYear, monthIndex, 1);
    setUncontrolledValue(next);
    onChange?.(next);
  };

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
        style={{ anchorName } as CSSProperties}
        {...props}
      >
        {value
          ? value.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })
          : placeholder}
      </button>

      <div
        id={popoverId}
        popover="auto"
        className="dropdown bg-base-100 rounded-box w-56 p-3 shadow-lg"
        style={{ positionAnchor: anchorName } as CSSProperties}
      >
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            className="btn btn-ghost btn-xs btn-circle"
            onClick={() => setViewYear((year) => year - 1)}
            aria-label="ปีก่อนหน้า"
          >
            ‹
          </button>
          <span className="text-sm font-semibold">{viewYear}</span>
          <button
            type="button"
            className="btn btn-ghost btn-xs btn-circle"
            onClick={() => setViewYear((year) => year + 1)}
            aria-label="ปีถัดไป"
          >
            ›
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {MONTHS.map((label, index) => {
            const isSelected =
              value?.getFullYear() === viewYear && value?.getMonth() === index;

            return (
              <button
                key={label}
                type="button"
                popoverTarget={popoverId}
                popoverTargetAction="hide"
                className={cn(
                  "btn btn-sm",
                  isSelected ? "btn-primary" : "btn-ghost",
                )}
                onClick={() => selectMonth(index)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MonthPicker;
