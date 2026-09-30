import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { footerNav, legalNav, sectionIds } from "../../data/Navigation";
import { NewsletterForm } from "./NewletterForm";


const linkStyles = "rounded-sm transition-colors hover:text-primary-800";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <Container>
        <div className="grid gap-y-12 pt-14 lg:grid-cols-12 lg:gap-x-10 lg:pt-17.5">
          <section
            id={sectionIds.newsletter}
            aria-labelledby="newsletter-heading"
            className="lg:col-span-6"
          >
            <Logo tone="dark" />
            <h2 id="newsletter-heading" className="sr-only">
              Newsletter
            </h2>
            <p className="mt-3 text-body-s lg:mt-3.25">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-8 lg:mt-11">
              <NewsletterForm />
            </div>
            <p className="mt-6 max-w-117.5 text-body-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </section>

          <nav aria-label="Footer" className="lg:col-span-6 lg:pt-10">
            <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:gap-x-10">
              {footerNav.map((column, index) => (
                <ul key={index} className="text-body-s leading-9.5">
                  {column.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkStyles}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-5.5 pb-11 text-body-xs sm:flex-row sm:items-center sm:justify-between lg:mt-32.25">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul aria-label="Legal" className="flex flex-wrap gap-x-6">
            {legalNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(linkStyles, "inline-flex min-h-6 items-center")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}