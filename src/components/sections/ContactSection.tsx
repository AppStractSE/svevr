import ContactForm from "@/components/forms/ContactForm";
import { Check } from "lucide-react";
import { Suspense } from "react";

const ContactSection = () => {
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
    <section className="bg-[#f9f9f9]">
      <div className="max-page-width flex flex-col justify-between gap-12 px-4 py-12 md:flex-row md:gap-24 md:py-24">
        <div className="flex basis-6/12 flex-col gap-4 md:gap-8">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Snacka med oss redan idag!
          </h2>
          <p className="whitespace-pre-line text-base md:max-w-2xl md:text-lg">
            {`Boka ett möte med oss, så visar vi hur Svevr funkar! Vi tar dig genom en demo av vår drönartvätt för tak, fasader och fönster – skräddarsydd för dig, utan några krav. Vi vill snacka med dig – inte bara om vad vi gör, utan om vad du vill uppnå.\n\nKanske vill du göra underhållet smidigare, få fasaden att glänsa eller bara slippa krångel? Vi lyssnar och hjälper till. Vårt gäng är taggade på att lära känna din verksamhet och se hur Svevr kan backa upp dina planer.`}
          </p>
          <div className="flex flex-col gap-2">
            <p className="mb-2 mt-4 text-balance text-base md:text-lg">
              Det här kan du förvänta dig av oss
            </p>
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check size={16} className="mt-1 min-w-fit" />
                <p className="text-sm md:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-12/12 lg:basis-5/12">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
