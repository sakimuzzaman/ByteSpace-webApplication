import type { ReactNode } from "react";

type AuthCardProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  note?: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};

/** White card holding an auth form. */
export function AuthCard({ eyebrow, title, titleId, note, footer, children }: AuthCardProps) {
  return (
    <section
      aria-labelledby={titleId}
      className="flex flex-col rounded-card bg-white px-5 py-8 text-neutral-950 sm:px-10 sm:py-12 lg:min-h-196 lg:px-16 lg:pt-[60.5px] lg:pb-10"
    >
      <p className="text-body-l text-primary-800">{eyebrow}</p>
      <h2
        id={titleId}
        className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-heading sm:text-heading-m"
      >
        {title}
      </h2>
      {note}
      <div className="mt-8 lg:mt-9.5">{children}</div>
      <p className="mt-10 text-center text-body-m text-neutral-500 lg:mt-auto lg:pt-10">{footer}</p>
    </section>
  );
}


