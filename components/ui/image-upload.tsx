import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageUploadVariant =
  | "ghost"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

type ImageUploadSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ImageUploadProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  variant?: ImageUploadVariant;
  size?: ImageUploadSize;
  /** Hide the native file-input chrome so a wrapping `<label>` can act as the clickable area instead. */
  visuallyHidden?: boolean;
}

const ImageUpload = ({
  className,
  variant = "ghost",
  size = "md",
  visuallyHidden = false,
  accept = "image/*",
  ...props
}: ImageUploadProps) => {
  return (
    <input
      type="file"
      accept={accept}
      className={cn(
        visuallyHidden
          ? "sr-only"
          : cn("file-input", `file-input-${variant}`, `file-input-${size}`),
        className,
      )}
      {...props}
    />
  );
};

export default ImageUpload;
