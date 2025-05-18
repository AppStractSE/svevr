"use client";

import useMounted from "@/hooks/useMounted";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  text?: string;
  image?: string;
  className?: string;
}

const SubPageHeroSection = ({ title, text, image, className }: Props) => {
  const isMounted = useMounted(250);
  return (
    <section
      className={twMerge(
        className,
        "relative flex min-h-[50vh] items-end justify-start py-12 md:min-h-[75vh] md:py-24",
      )}
    >
      <Image
        priority
        quality={100}
        fill
        alt={title}
        src={image ?? "/hero-image.webp"}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/50"></div>
      <div
        className={twMerge(
          "max-page-width relative flex flex-col gap-8 px-4 text-background transition-all duration-500 ease-in-out",
          isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <h2 className="text-balance text-lg font-medium md:text-xl lg:w-1/2">
          {title}
        </h2>
        <p className="text-4xl font-medium tracking-wide md:text-5xl lg:w-1/2">
          {text}
        </p>
      </div>
    </section>
  );
};

export default SubPageHeroSection;
