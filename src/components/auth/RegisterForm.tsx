"use client";

import { compose, minLength, required, validateEmail } from "@/lib/validation";
import { AuthForm, type AuthField } from "./AuthForm";

const MIN_PASSWORD_LENGTH = 8;

const fields: AuthField[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
    validate: required("Enter your full name."),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
    validate: validateEmail,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
    validate: compose(
      required("Create a password."),
      minLength(MIN_PASSWORD_LENGTH, `Use at least ${MIN_PASSWORD_LENGTH} characters.`),
    ),
  },
];

export function RegisterForm({ labelledBy }: { labelledBy: string }) {
  return (
    <AuthForm
      labelledBy={labelledBy}
      fields={fields}
      submitLabel="Continue"
      successMessage="Account created — redirecting to sign in…"
      redirectTo="/login"
      endpoint="/api/auth/register"
    />
  );
}