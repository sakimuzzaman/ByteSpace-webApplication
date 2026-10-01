"use client";

import { required, validateEmail } from "@/lib/validation";
import { AuthForm, type AuthField } from "./AuthForm";

const fields: AuthField[] = [
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
    autoComplete: "current-password",
    validate: required("Enter your password."),
  },
];

export function LoginForm({ labelledBy }: { labelledBy: string }) {
  return (
    <AuthForm
      labelledBy={labelledBy}
      fields={fields}
      submitLabel="Sign In"
      successMessage="Signed in — redirecting…"
      redirectTo="/"
      endpoint="/api/auth/login"
    />
  );
}