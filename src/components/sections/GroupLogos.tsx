import Image from "next/image";
import { Container } from "@/components/ui/Container";

const partners = [
  { src: "/groupLogos/gLogo-1.png", width: 166.5, height: 40 },
  { src: "/groupLogos/gLogo-2.png", width: 166.93, height: 40 },
  { src: "/groupLogos/gLogo-3.png", width: 169.15, height: 40 },
  { src: "/groupLogos/gLogo-4.png", width: 169.15, height: 40 },
  { src: "/groupLogos/gLogo-5.png", width: 168.54, height: 40.78 },
];

export function GroupLogos() {
  return (
    <section aria-labelledby="partners-heading" className="bg-neutral-50 py-10 sm:py-14 lg:py-0">
      <h2 id="partners-heading" className="sr-only">
        Trusted by our partners
      </h2>
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:h-50.5 lg:flex-nowrap lg:justify-around lg:gap-0">
          {partners.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt="Logoipsum"
                width={Math.round(logo.width)}
                height={Math.round(logo.height)}
                unoptimized
                className="h-8 w-auto sm:h-9 lg:h-10"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}