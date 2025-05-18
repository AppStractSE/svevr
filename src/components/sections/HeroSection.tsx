"use client";

import useMounted from "@/hooks/useMounted";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

interface Props {
  className?: string;
}

const HeroSection = ({ className }: Props) => {
  const isMounted = useMounted();
  return (
    <section className={className}>
      <div className="relative flex min-h-[75vh] flex-col justify-center md:min-h-[80vh] lg:min-h-screen">
        <video
          playsInline
          autoPlay
          muted
          loop
          id="myVideo"
          src="/svevr.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-primary/50 md:bg-primary/25"></div>
        <div className="max-page-width relative z-10 w-full px-4 py-12 pt-32 lg:gap-8 lg:py-24 xl:py-32">
          <div
            className={twMerge(
              "flex flex-col gap-4 transition-all duration-500 ease-in-out md:w-2/3 md:gap-6",
              isMounted
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0",
            )}
          >
            <h1 className="whitespace-pre-line text-balance text-3xl font-medium !leading-tight text-background md:text-4xl lg:text-5xl xl:text-6xl">
              Säkra och smidiga takbehandlingar utan lift, byggställningar eller
              krångel
            </h1>
            <h2 className="whitespace-pre-line text-lg font-medium text-background sm:text-balance md:text-xl">
              Svevr använder avancerad drönarteknik för att rengöra och behandla
              tak och fasad snabbare, tryggare och mer kostnadseffektivt än
              traditionella metoder. Smart, säkert och miljövänligt!
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-12">
              <Button
                href="/tjanster"
                text="Våra tjänster"
                className="hover:bg-initial min-w-fit bg-yellow-300 px-8 py-4 text-primary md:text-lg"
                icon={<ArrowRight size={20} />}
              />
              <Button
                href="/offertforfragan"
                text="Kom i kontakt med oss"
                className="hover:bg-initial min-w-fit bg-white px-8 py-4 text-primary md:text-lg"
                icon={<ArrowRight size={20} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
