"use client";
import "@/styles/customsplide.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  children: React.ReactNode;
}

const SplideWithArrows = ({ options, children }: Props) => {
  return (
    <div className="w-full">
      <Splide options={options} aria-labelledby="" hasTrack={false}>
        <div className="splide__wrapper relative [&>*:first-child]:rounded-xl">
          <SplideTrack className="items-stretch !overflow-visible py-2">
            {React.Children.map(children, (child, index) => (
              <SplideSlide key={index}>{child}</SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows"></div>
        </div>
        <div className="flex justify-center pt-12 xl:hidden">
          <div className="custom__pagination splide__pagination"></div>
        </div>
      </Splide>
    </div>
  );
};

export default SplideWithArrows;
