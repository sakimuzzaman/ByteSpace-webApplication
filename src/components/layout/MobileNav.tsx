"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

import { authNav, primaryNav } from "@/data/Navigation";
import { buttonStyles } from "../ui/Button";


export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-20 -mr-2 flex size-11 items-center justify-center rounded-full text-neutral-50 transition-colors hover:bg-white/10"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-4 top-22 z-10 rounded-card bg-white p-6 shadow-[0_24px_60px_-20px_rgba(4,8,25,0.45)] sm:inset-x-6"
      >
        <ul className="flex flex-col gap-1">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block rounded-xl px-3 py-3 text-body-l text-neutral-950 transition-colors hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-neutral-100 pt-5">
          <Link
            href={authNav.signIn.href}
            onClick={close}
            className={buttonStyles("outline", "w-full")}
          >
            {authNav.signIn.label}
          </Link>
          <Link
            href={authNav.join.href}
            onClick={close}
            className={buttonStyles("primary", "w-full")}
          >
            {authNav.join.label}
          </Link>
        </div>
      </nav>
    </div>
  );
}