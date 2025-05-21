"use client";

import Button from "@/components/buttons/Button";
import useMounted from "@/hooks/useMounted";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  text?: string;
  video?: string;
  className?: string;
  button?: {
    text: string;
    href: string;
  };
}

const SubPageHeroSection = ({
  title,
  text,
  video,
  className,
  button,
}: Props) => {
  const isMounted = useMounted(250);
  return (
    <section
      className={twMerge(
        className,
        "relative flex min-h-screen items-center justify-center py-12 md:py-24",
      )}
    >
      <video
        playsInline
        autoPlay
        muted
        loop
        id="myVideo"
        src={video}
        className="absolute inset-0 h-full w-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-primary/50"></div>
      <div
        className={twMerge(
          "max-page-width relative flex flex-col items-center justify-center gap-8 px-4 text-center text-background transition-all duration-500 ease-in-out lg:gap-12",
          isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <h2 className="max-w-3xl text-balance text-3xl font-medium !leading-tight text-background md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>
        <h6 className="max-w-xl text-balance text-lg font-medium md:text-xl">
          {text}
        </h6>
        {button && (
          <Button
            href={button.href}
            text={button.text}
            className="hover:bg-initial min-w-fit bg-yellow-300 px-8 py-4 text-primary md:text-lg"
          />
        )}
      </div>
    </section>
  );
};

export default SubPageHeroSection;
