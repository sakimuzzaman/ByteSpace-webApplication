export type Validator = (value: string) => string | undefined;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function required(message: string): Validator {
  return (value) => (value.trim() ? undefined : message);
}

export const validateEmail: Validator = (value) => {
  if (!value.trim()) return "Enter your email address.";
  if (!isEmail(value)) return "Enter a valid email address, like name@example.com.";
  return undefined;
};

export function minLength(length: number, message: string): Validator {
  return (value) => (value.length >= length ? undefined : message);
}

/** Runs validators in order and returns the first error. */
export function compose(...validators: Validator[]): Validator {
  return (value) => {
    for (const validate of validators) {
      const error = validate(value);
      if (error) return error;
    }
    return undefined;
  };
}
