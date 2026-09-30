"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Validator } from "../../lib/validation";

type Errors<Field extends string> = Partial<Record<Field, string>>;

/**
 * Client-side validation for uncontrolled forms. Validates every field on
 * submit, moves focus to the first invalid field, and re-checks a field as the
 * user corrects it.
 */
export function useValidatedForm<Field extends string>(
  validators: Record<Field, Validator>,
  onValid: (values: Record<Field, string>, form: HTMLFormElement) => void,
) {
  const [errors, setErrors] = useState<Errors<Field>>({});
  const fields = Object.keys(validators) as Field[];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {} as Record<Field, string>;
    const nextErrors: Errors<Field> = {};

    for (const field of fields) {
      const value = String(data.get(field) ?? "");
      values[field] = value;
      const error = validators[field](value);
      if (error) nextErrors[field] = error;
    }

    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      const element = form.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    onValid(values, form);
  }

  /** Props to spread onto a field: its name, current error and live re-validation. */
  function field(name: Field) {
    return {
      name,
      error: errors[name],
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        if (!errors[name]) return;
        const error = validators[name](event.target.value);
        setErrors((current) => ({ ...current, [name]: error }));
      },
    };
  }

  return { handleSubmit, field };
}
