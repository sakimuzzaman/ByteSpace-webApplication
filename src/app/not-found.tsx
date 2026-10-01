import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GridBackdrop } from "@/components/ui/GridBackdrop";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section
          aria-labelledby="not-found-title"
          className="relative isolate overflow-hidden bg-primary-800 pt-26 text-center"
        >
          <GridBackdrop />
          <Container className="relative flex min-h-160 flex-col items-center pt-20 pb-24 sm:min-h-190 lg:min-h-214 lg:pt-26 lg:pb-32">
            <p
              aria-hidden="true"
              className="bg-linear-to-b from-lime-500 from-20% to-lime-500/0 to-105% bg-clip-text font-heading text-[180px] leading-[0.8] font-semibold tracking-normal text-transparent select-none sm:text-[300px] lg:text-[472px]"
            >
              404
            </p>
            <h1
              id="not-found-title"
              className="-mt-6 max-w-240 text-[2.5rem] leading-[1.2] text-white sm:-mt-12 sm:text-heading-l lg:-mt-20.5"
            >
              The page you are looking for doesn&rsquo;t exist
            </h1>
            <p className="mt-6 text-body-m text-neutral-100 sm:text-body-l lg:mt-10.5">
              Try to use a correct url or go back to homepage to start again
            </p>
            <ButtonLink href="/" className="mt-9">
              Back to Home
            </ButtonLink>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}