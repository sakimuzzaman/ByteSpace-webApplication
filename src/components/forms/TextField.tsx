import { useId, type ComponentPropsWithRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "box" | "pill";

const inputVariants: Record<Variant, string> = {
  box: "rounded-xl text-body-l placeholder:text-neutral-400",
  pill: "rounded-full text-body-m placeholder:text-neutral-950",
};

type TextFieldProps = Omit<ComponentPropsWithRef<"input">, "id"> & {
  label: string;
  hideLabel?: boolean;
  error?: string;
  variant?: Variant;
  inputClassName?: string;
};

/** Labelled text input with an accessible inline error message. */
export function TextField({
  label,
  hideLabel = false,
  error,
  variant = "box",
  className,
  inputClassName,
  ...inputProps
}: TextFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className={cn("text-body-s font-medium text-neutral-950", hideLabel && "sr-only")}
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-13 w-full min-w-0 border bg-white px-6 text-neutral-950 transition-colors",
          "focus:border-primary-800 focus-visible:outline-offset-0",
          error ? "border-red-600" : "border-neutral-200 hover:border-neutral-300",
          inputVariants[variant],
          inputClassName,
        )}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="text-body-s text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}