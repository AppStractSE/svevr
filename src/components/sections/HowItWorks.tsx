"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

// Custom hook for dynamic useInView hooks
const useStepInViewStates = (
  count: number,
  options: IntersectionOptions | undefined,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return Array.from({ length: count }, () => useInView(options));
};

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const steps = [
    {
      title: "Inspektion & Planering",
      shortDescription:
        "Vi börjar med att inspektera ytan – oavsett om det gäller tak, solpaneler eller fönster. Därefter planerar vi metod och utrustning för ett skonsamt och effektivt resultat.",
      description:
        "Första steget är alltid att analysera förutsättningarna. Vi inspekterar byggnadens placering, ytan som ska rengöras och bedömer nedsmutsningsgrad, höjd och material. Denna översikt görs med hjälp av drönare och ligger till grund för val av rengöringsmetod, tryck och medel. Vår teknik anpassas alltid efter ytan – tak, fönster eller solpaneler – för att uppnå ett skinande rent resultat utan risk för skador.",
      image: "/svevr_step1.png",
    },
    {
      title: "Förberedelse & Säkerhetsåtgärder",
      shortDescription:
        "Vi säkrar området och ser till att alla moment sker tryggt och kontrollerat. Drönaren förbereds med rätt utrustning och rengöringsmedel.",
      description:
        "Innan vi påbörjar arbetet förbereder vi platsen noggrant. Vi kontrollerar väderförhållanden, spärrar av området om det behövs, och informerar berörda. Drönaren testas och laddas med rätt mängd skonsamt rengöringsmedel anpassat för just er yta. Allt detta görs för att tvätten ska ske säkert, effektivt och utan störningar.",
      image: "/svevr_step2.jpeg",
    },
    {
      title: "Drönartvätt av valda ytor",
      shortDescription:
        "Med precision och teknik rengör vi tak, fönster eller solpaneler – utan lift eller stege. Perfekt för svåråtkomliga platser.",
      description:
        "Nu påbörjas själva tvätten. Vår drönare styrs med hög precision och sprider rengöringsmedel jämnt över ytan. Vi når fönster på hög höjd, stora solpanelsfält eller tak med svår åtkomst – snabbt och utan fysisk kontakt. Det minimerar slitage och eliminerar behovet av klättring eller tunga maskiner. Resultatet blir skinande rent – oavsett yta.",
      image: "/svevr_step3.png",
    },
    {
      title: "Efterkontroll & Resultat",
      shortDescription:
        "Vi kontrollerar det färdiga resultatet och dokumenterar med bilder från drönaren. Du får en tydlig sammanställning direkt efteråt.",
      description:
        "När rengöringen är klar gör vi en visuell efterkontroll – ofta med hjälp av drönaren igen. Vi dokumenterar arbetet och ser till att resultatet motsvarar våra höga krav. Kunden får tillgång till bilder eller video på före/efter. Det ger både trygghet och transparens.",
      image: "/svevr_step4.jpeg",
    },
  ];

  // Create inView hooks dynamically
  const inViewStates = useStepInViewStates(steps.length, { threshold: 0.66 });

  // Sync visible step to currentStep
  useEffect(() => {
    const indexInView = inViewStates.findIndex(([, inView]) => inView);
    if (indexInView !== -1 && indexInView !== currentStep) {
      setCurrentStep(indexInView);
    }
  }, [currentStep, ...inViewStates.map(([, inView]) => inView)]);

  return (
    <section className="border-y">
      <div
        className={twMerge(
          "max-page-width grid grid-cols-1 items-start gap-12 px-4 py-12 md:gap-8 md:py-24 lg:relative lg:grid-cols-2",
        )}
      >
        <div className="gap-4 md:gap-8 lg:sticky lg:top-32 lg:flex lg:flex-col">
          <h2 className="max-w-3xl text-balance text-2xl font-medium sm:text-3xl md:text-4xl">
            Så funkar det
          </h2>
          <div className="hidden lg:block">
            {steps.map((step, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex cursor-pointer flex-col gap-2 border-l-2 px-8 py-4 transition-opacity duration-200 ease-in-out lg:max-w-xl",
                  currentStep === index ? "border-l-black" : "opacity-50",
                )}
                onClick={() => {
                  setCurrentStep(index);
                  stepRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <p className="text-lg">
                  {index + 1}. {step.title}
                </p>
                <p className="text-sm">{step.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-x-2 gap-y-12 lg:gap-y-24">
          {steps.map((step, index) => {
            const [ref] = inViewStates[index];
            return (
              <div
                key={index}
                ref={(el) => {
                  ref(el);
                  stepRefs.current[index] = el;
                }}
                className={twMerge(
                  "flex scroll-mt-32 flex-col gap-4 transition-opacity duration-200 ease-in-out",
                  currentStep === index ? "opacity-100" : "opacity-50",
                )}
              >
                <div className="relative aspect-[1.618/1] w-full">
                  <Image
                    quality={100}
                    fill
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="h-full w-full rounded-sm object-cover object-center"
                  />
                </div>
                <div className="mb-auto flex w-full flex-col justify-start gap-2 px-2">
                  <h3 className="text-balance text-lg md:text-2xl">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base antialiased">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
