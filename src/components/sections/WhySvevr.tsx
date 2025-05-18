"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Tab {
  title: string;
  text: string;
  image: string;
}

const WhySvevr = () => {
  const [selected, setSelected] = useState(0);
  const tabs: Tab[] = [
    {
      title: "Vision",
      text: "Vi strävar efter att vara den ledande aktören inom drönartvätt och takbehandlingar i Sverige, med fokus på kvalitet, säkerhet och hållbarhet.",
      image: "/svevr_001.png",
    },
    {
      title: "Uppdrag",
      text: "Vårt uppdrag är att erbjuda innovativa och effektiva lösningar för takbehandlingar och exteriör tvätt, med hjälp av den senaste teknologin.",
      image: "/svevr_roof.png",
    },
    {
      title: "Värderingar",
      text: "Vi värdesätter kvalitet, säkerhet och hållbarhet i allt vi gör. Vi strävar efter att överträffa våra kunders förväntningar genom att leverera högkvalitativa tjänster.",
      image: "/svevr_roof.png",
    },
    {
      title: "Innovation",
      text: "Vi är alltid på jakt efter nya sätt att förbättra våra tjänster och processer. Vi investerar i forskning och utveckling för att ligga i framkant inom vår bransch.",
      image: "/svevr_roof.png",
    },
  ];

  const points = [
    "Certifierade drönarpiloter med hundratals flygtimmar",
    "Specialistkompetens inom tak, fasad och solpaneler",
    "Drönarteknik för inspektion, rengöring och dokumentation",
    "Termografisk analys för att identifiera värmeläckage",
    "Miljösmarta metoder utan kemikalier eller tunga maskiner",
    "Flexibel kapacitet – från villor till större fastigheter",
    "Ett lösningsorienterat team med fokus på service och säkerhet",
  ];

  return (
    <section className="border-b">
      <div
        className={twMerge(
          "max-page-width overflow-hidden px-4 py-12 md:py-24",
        )}
      >
        <div className="flex flex-col justify-center gap-4 md:gap-8 lg:items-center">
          <h2 className="max-w-3xl text-balance text-center text-2xl font-medium sm:text-3xl md:text-4xl">
            Vi revolutionerar exteriör tvätt på hög höjd - säkrare, snabbare och
            mer hållbar.
          </h2>
          <p className="max-w-3xl text-balance text-center text-lg md:text-xl">
            Varför Svevr?
          </p>
          <div
            key={selected}
            className={twMerge(
              "w-full max-w-6xl transform transition-all duration-500 ease-in-out",
              "animate-fade-in",
            )}
          >
            <div className="aspect-video">
              <Image
                src={tabs[selected].image}
                alt={tabs[selected].title}
                fill
                className="w-full rounded-lg object-cover"
                priority
                quality={100}
              />
            </div>
          </div>

          <div className="no-scrollbar -mx-4 flex items-center snap-y snap-mandatory overflow-y-scroll lg:w-full lg:max-w-6xl">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={twMerge(
                  "min-w-fit flex-1 border-b-2 p-8 text-center transition-all duration-300 ease-in-out snap-start",
                  selected === index ? "border-primary" : "opacity-50",
                )}
                onClick={() => setSelected(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="flex w-full max-w-6xl flex-col justify-between gap-12 md:flex-row md:gap-24">
            <div className="animate-fade-in transition-all duration-500 ease-in-out">
              <p className="max-w-3xl text-left text-lg font-medium md:text-xl">
                {tabs[selected].text}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <p className="max-w-3xl text-left text-lg font-medium md:text-xl">
                Våra mål
              </p>
              <div className="flex flex-col gap-2">
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check size={16} className="mt-1" />
                    <p className="text-sm md:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySvevr;
