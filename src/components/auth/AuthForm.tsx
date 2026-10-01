"use client";

import { useEffect, useState, type HTMLInputTypeAttribute } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@/components/forms/TextField";
import { useValidatedForm } from "@/components/forms/useValidatedForm";
import { Button } from "@/components/ui/Button";
import type { Validator } from "@/lib/validation";

export type AuthField = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  autoComplete: string;
  validate: Validator;
};

type AuthFormProps = {
  /** id of the heading that names this form. */
  labelledBy: string;
  fields: AuthField[];
  submitLabel: string;
  successMessage: string;
  redirectTo: string;
  endpoint?: string;
};

const REDIRECT_DELAY_MS = 1000;

/** Validated sign-in / sign-up form backed by PostgreSQL persistence. */
export function AuthForm({
  labelledBy,
  fields,
  submitLabel,
  successMessage,
  redirectTo,
  endpoint,
}: AuthFormProps) {
  const router = useRouter();
  const [succeeded, setSucceeded] = useState(false);
  const validators = Object.fromEntries(fields.map((f) => [f.name, f.validate]));
  const { handleSubmit, field } = useValidatedForm(validators, (values) => {
    setSucceeded(true);
    if (endpoint) {
      const course =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("course")
          : null;
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, course }),
      }).catch(() => {});
    }
  });

  useEffect(() => {
    if (!succeeded) return;
    const timer = window.setTimeout(() => router.push(redirectTo), REDIRECT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [succeeded, redirectTo, router]);

  return (
    <form
      noValidate
      aria-labelledby={labelledBy}
      onSubmit={handleSubmit}
      className="relative flex flex-col"
    >
      <div className="flex flex-col gap-5">
        {fields.map(({ name, label, type, placeholder, autoComplete }) => (
          <TextField
            key={name}
            {...field(name)}
            label={label}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            inputMode={type === "email" ? "email" : undefined}
            required
          />
        ))}
      </div>
      <Button type="submit" disabled={succeeded} className="mt-6 self-end">
        {submitLabel}
      </Button>
      <p
        role="status"
        className="absolute inset-x-0 top-full mt-3 text-right text-body-s text-primary-800"
      >
        {succeeded ? successMessage : ""}
      </p>
    </form>
  );
}