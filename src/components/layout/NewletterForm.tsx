"use client";

import { useState } from "react";


import { Button } from "@/components/ui/Button";
import { validateEmail } from "@/lib/validation";
import { useValidatedForm } from "../forms/useValidatedForm";
import { TextField } from "../forms/TextField";


const validators = { email: validateEmail };

export function NewsletterForm() {
  const [status, setStatus] = useState("");

  const { handleSubmit, field } = useValidatedForm(
    validators,
    ({ email }, form) => {
      const cleanEmail = email.trim();

      setStatus(`Thanks for subscribing! Updates will go to ${cleanEmail}.`);

      form.reset();
    }
  );

  return (
    <form
      noValidate
      onSubmit={(event) => {
        setStatus("");
        handleSubmit(event);
      }}
      aria-label="Newsletter"
    >
      <div className="flex items-start gap-3 sm:gap-6">
        <TextField
          {...field("email")}
          label="Email address"
          hideLabel
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          variant="pill"
          className="flex-1 sm:max-w-94"
        />

        <Button type="submit">Subscribe</Button>
      </div>

      <p
        role="status"
        className="text-body-s text-primary-800 not-empty:mt-2"
      >
        {status}
      </p>
    </form>
  );
}