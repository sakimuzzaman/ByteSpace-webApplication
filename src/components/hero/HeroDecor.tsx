
import { Decor, type DecorName } from "../ui/Decor";



const ornaments: { name: DecorName; className: string }[] = [
  {
    name: "squiggleLimeLg",
    className:
      "hidden md:block md:top-[440px] md:left-[-60px] md:w-[130px] lg:top-[285px] lg:left-[-58px] lg:w-[253.5px]",
  },
  {
    name: "squiggleWhiteSm",
    className: "hidden lg:block lg:top-[505.5px] lg:left-[215px] lg:w-[116.5px]",
  },
  {
    name: "torusWhite",
    className:
      "bottom-[60px] left-[-46px] w-[110px] sm:w-[150px] md:bottom-[40px] md:w-[180px] lg:top-[740.8px] lg:bottom-auto lg:left-[66.5px] lg:w-[240px]",
  },
  {
    name: "cylinderLime",
    className: "hidden lg:block lg:top-[255.7px] lg:left-[1275.4px] lg:w-[274px]",
  },
  {
    name: "pyramidWhite",
    className: "hidden lg:block lg:top-[484.6px] lg:left-[1130.4px] lg:w-[126.5px]",
  },
  {
    name: "squiggleWhiteLg",
    className:
      "right-[-24px] bottom-[24px] w-[80px] sm:w-[110px] md:right-[-10px] md:w-[140px] lg:top-[709.5px] lg:right-auto lg:bottom-auto lg:left-[1195.5px] lg:w-[192px]",
  },
];


export function HeroDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 w-full -translate-x-1/2 lg:w-360"
    >
      {ornaments.map(({ name, className }) => (
        <Decor key={name} name={name} className={className} />
      ))}
    </div>
  );
}

