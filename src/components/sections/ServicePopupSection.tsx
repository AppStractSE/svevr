"use client";
import useMounted from "@/hooks/useMounted";
import "@/styles/customsplide.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
}

const ServicePopupSection = ({ className }: Props) => {
  const isMounted = useMounted();
  const options = {
    rewind: false,
    gap: "2rem",
    perPage: 4,
    perMove: 1,
    speed: 1000,
    focus: 0,
    pagination: false,
    arrows: false,
    breakpoints: {
      1280: {
        gap: "1.5rem",
        perPage: 3.5,
        pagination: true,
        trimSpace: false,
      },
      1024: {
        gap: "1rem",
        perPage: 2.75,
        pagination: true,
        trimSpace: false,
      },
      768: {
        gap: "1rem",
        perPage: 2.5,
        pagination: true,
        trimSpace: false,
      },
      640: {
        gap: "1rem",
        perPage: 1.75,
        pagination: true,
        trimSpace: false,
      },
      480: {
        gap: "1rem",
        perPage: 1.15,
        pagination: true,
      },
    },
    classes: {
      pagination: "splide__pagination custom__pagination",
    },
  };

  const services = [
    {
      title: "Elinstallationer",
      text: "Vi utför alla typer av elinstallationer, från mindre servicejobb till större entreprenader.",
      href: "elinstallation",
    },
    {
      title: "Elinstallationer",
      text: "Vi utför alla typer av elinstallationer, från mindre servicejobb till större entreprenader.",
      href: "elinstallation",
    },
    {
      title: "Elinstallationer",
      text: "Vi utför alla typer av elinstallationer, från mindre servicejobb till större entreprenader.",
      href: "elinstallation",
    },
    {
      title: "Laddbox",
      text: "Vi installerar laddboxar för elbilar, både för privatpersoner och företag.",
      href: "laddbox",
    },
    {
      title: "Belysning",
      text: "Vi hjälper dig med allt inom belysning, från installation till reparation.",
      href: "belysning",
    },
    {
      title: "Service",
      text: "Vi utför service och reparationer av elanläggningar.",
      href: "service",
    },
  ];

  return (
    <section className={className}>
      <div
        className={twMerge(
          "max-page-width px-4 py-12 text-white transition-all duration-500 ease-in-out md:py-24",
          isMounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        )}
      >
        <Splide options={options} aria-labelledby="" hasTrack={false}>
          <div className="splide__wrapper [&>*:first-child]:rounded-xl">
            <SplideTrack className="items-stretch !overflow-visible py-2">
              {services.map((service, index) => (
                <SplideSlide key={index}>
                  <Link
                    href={`/vara-tjanster/${service.href}`}
                    className="group flex min-h-[300px] flex-col gap-4 rounded-lg bg-white px-6 py-8 text-primary shadow outline outline-1 outline-gray-300 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:outline-cyan-500"
                  >
                    <h3 className="text-xl">{service.title}</h3>
                    <p className="text-base font-medium">{service.text}</p>
                    <div className="mt-auto flex items-center gap-2 transition-all duration-100 ease-out md:group-hover:gap-4">
                      <ArrowRight size={20} />
                      <p className="text-base">Läs mer</p>
                    </div>
                  </Link>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="custom__pagination splide__pagination"></div>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default ServicePopupSection;
