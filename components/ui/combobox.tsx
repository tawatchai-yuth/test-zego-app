"use client";

import { useMemo, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ComboboxOption {
  label: string;
  value: string;
}

interface ComboboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "type"
  > {
  value: string;
  onChange: (value: string) => void;
  options: ComboboxOption[];
  emptyText?: string;
}

export function Combobox({
  value,
  onChange,
  options,
  className,
  placeholder = "พิมพ์เพื่อค้นหา",
  emptyText = "ไม่พบข้อมูล",
  disabled,
  required,
  ...props
}: ComboboxProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = useMemo(
    () => options.find((option) => option.value === value)?.label ?? "",
    [options, value],
  );

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return options;
    return options.filter((option) => option.label.includes(q));
  }, [options, query]);

  const handleSelect = (option: ComboboxOption) => {
    onChange(option.value);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={cn("input w-full", className)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={isOpen ? query : selectedLabel}
        autoComplete="off"
        onFocus={() => {
          setQuery("");
          setIsOpen(true);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onBlur={() => setIsOpen(false)}
        {...props}
      />

      {isOpen && (
        <ul className="menu bg-base-100 rounded-box absolute top-full left-0 z-20 mt-1 max-h-60 w-full flex-nowrap overflow-y-auto p-2 shadow-lg">
          {filtered.length === 0 && (
            <li className="text-base-content/50 px-2 py-1.5 text-sm">
              {emptyText}
            </li>
          )}
          {filtered.map((option) => (
            <li key={option.value}>
              {/* onMouseDown prevents the input's blur from firing before onClick runs */}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
