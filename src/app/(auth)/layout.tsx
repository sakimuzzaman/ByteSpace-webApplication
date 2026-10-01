import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { GridBackdrop } from "@/components/ui/GridBackdrop";
import { Logo } from "@/components/ui/Logo";


export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-primary-800 text-neutral-50">
      <GridBackdrop className="-z-10" />
      <Container as="header" className="flex pt-6 lg:pt-8.75">
        <Logo markOnly className="lg:ml-0.5" />
      </Container>
      <Container as="main" id="main" className="pt-8 pb-12 lg:pt-[53.5px] lg:pb-30">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_579px] lg:gap-10">{children}</div>
      </Container>
    </div>
  );
}
