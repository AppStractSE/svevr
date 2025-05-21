"use client";
import { Check } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Tab {
  title: string;
  shortDescription: string;
  description: string;
  video: string;
  points: string[];
}

const WhySvevr = () => {
  const [selected, setSelected] = useState(0);
  const tabs: Tab[] = [
    {
      title: "Vision",
      shortDescription:
        "Vi strävar efter att vara den ledande aktören inom drönartvätt och takbehandlingar i Sverige, med fokus på kvalitet, säkerhet och hållbarhet.",
      description:
        "Svevr är mer än bara en tjänst - vi är en revolution inom exteriör tvätt. Med avancerad drönarteknik gör vi det möjligt att underhålla byggnader snabbare, säkrare och mer effektivt än någonsin tidigare. Vi ser framför oss en framtid där ingen behöver byggnadsställningar eller farligt arbete på hög höjd för att underhålla byggnader. En framtid där drönarbaserad rengöring är branschstandard och hållbarhet och innovation går hand i hand.",
      video: "/svevr_001.mp4",
      points: [
        "Vi utvecklar teknologi som gör rengöring ännu mer självgående och effektiv.",
        "Vi jobbar mer att erbjuda våra tjänster till fler länder och branscher.",
        "Vår vision är att göra drönarbaserad tvätt till den föredragna lösningen för fastighetsägare.",
        "Vi investerar i ny teknologi för att förbättra precision, effektivitet och säkerhet.",
      ],
    },
    {
      title: "Uppdrag",
      shortDescription:
        "Vårt uppdrag är att erbjuda innovativa och effektiva lösningar för takbehandlingar och exteriör tvätt, med hjälp av den senaste teknologin.",
      description:
        "Svevr använder avancerad drönarteknik för att erbjuda en snabbare, säkrare och mer kostnadseffektiv lösning för utvändig rengöring av din fastighet. Vi eliminerar behovet av byggnadsställningar och hissar, samtidigt som vi minskar vattenförbrukningen och miljöpåverkan. Vi tror på en framtid där smartare lösningar ersätter ineffektiva och riskfyllda metoder.",
      video: "/svevr_001.mp4",
      points: [
        "Effektivisera tvätt på hög höjd med banbrytande drönarteknologi.",
        "Öka säkerheten genom att låta drönare jobba på höga höjder istället för människor.",
        "Reducera miljöpåverkan med lägre vatten- och kemförbrukning.",
        "Ge kunderna en enklere, snabbare och mer kostnadseffektiv lösning.",
      ],
    },
    {
      title: "Värderingar",
      shortDescription:
        "Vi värdesätter kvalitet, säkerhet och hållbarhet i allt vi gör. Vi strävar efter att överträffa våra kunders förväntningar genom att leverera högkvalitativa tjänster.",
      description:
        "Svevr är byggt på värderingar som säkerställer precision, effektivitet och hållbarhet i allt vi levererar. Vi tror på smarta lösningar som förenklar vardagen, sänker kostnaderna och skapar en säkrare framtid för våra kunder.",
      video: "/svevr_001.mp4",
      points: [
        "Inget behov av byggnadsställning eller lift – vi reducerar risken för olyckor och farligt arbete på hög höjd.",
        "Reducerad vattenförbrukning, färre kemikalier och smartere lösningar för en grönare framtid.",
        "Vi minimerar kostnaden genom kortare uppdragstid och lägre materialkostnad.",
        "Våre drönare utför tvätt med hög precision, skonsamt för bygg och miljö.",
      ],
    },
    {
      title: "Innovation",
      shortDescription:
        "Vi är alltid på jakt efter nya sätt att förbättra våra tjänster och processer. Vi investerar i forskning och utveckling för att ligga i framkant inom vår bransch.",
      description:
        "På Svevr handlar innovation om mer än bara teknik - det handlar om att skapa smartare, säkrare och mer hållbara lösningar. Genom att kombinera avancerade drönare, exakta styrsystem och miljövänlig teknik sätter vi en ny standard för fasadrengöring.",
      video: "/svevr_001.mp4",
      points: [
        "Våra drönare använder intelligenta AI system för att optimalisera rengöringsprocessen, något som ger bättre och snabbare resultat. ",
        "Reducerad förbrukning både avseende vatten och kem för en grönare framtid.",
        "Vi eliminerer behovet av liftar, byggnadsställningar och arbete på hög höjd.",
        "Vi investerer i ny programvara, sensorer och optimaliserade tvättsystem för att ligga i framkant mot konkurrenterna.",
      ],
    },
  ];

  return (
    <section className="border-y">
      <div className={twMerge("max-page-width px-4 py-12 md:py-24")}>
        <div className="relative grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-8 md:gap-12 lg:sticky lg:top-32">
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-2xl font-medium sm:text-3xl md:text-4xl">
                Varför Svevr?
              </h2>
              <p className="max-w-2xl text-balance text-lg md:text-xl">
                Vi revolutionerar exteriör tvätt på hög höjd - säkrare, snabbare
                och mer hållbar.
              </p>
            </div>
            <div className="no-scrollbar -mx-4 flex items-start overflow-auto sm:mx-0 lg:grid lg:grid-cols-2 lg:gap-12">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(index)}
                  className={twMerge(
                    "w-full min-w-fit cursor-pointer border-b-2 px-6 pb-4 transition-all duration-200 ease-in-out lg:w-auto lg:border-b-0 lg:border-t-2 lg:px-2 lg:pb-0 lg:pt-4",
                    selected === index
                      ? "border-black"
                      : "opacity-50 hover:border-black hover:opacity-100",
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-center text-sm sm:text-lg md:text-base lg:text-left lg:text-xl">
                      {tab.title}
                    </div>
                    <div className="hidden text-base lg:block">
                      {tab.shortDescription}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <video
              playsInline
              src="/svevr_001.mp4"
              autoPlay
              loop
              muted
              className="h-full w-full rounded-sm object-cover object-center"
            />
            <div className="flex flex-col gap-4 px-2">
              <div className="text-xl font-medium md:text-2xl">
                {tabs[selected].title}
              </div>
              <p className="text-base md:text-lg">
                {tabs[selected].description}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {tabs[selected].points.map((point, index) => (
                  <div
                    key={index}
                    className="flex max-w-xl items-start gap-2 text-sm md:text-base"
                  >
                    <Check size={16} className="mt-1.5 min-w-fit" />
                    <p>{point}</p>
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
