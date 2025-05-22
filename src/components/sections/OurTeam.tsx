import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

const OurTeam = () => {
  const team = [
    {
      name: "Anton Håkansson",
      title: "VD, Drönarpilot",
      image: "/anton.png",
      email: "anton@svevr.se",
      phone: "+46 70 878 25 52",
    },
    {
      name: "Ludwig Pettersson",
      title: "Partners & Franchise Manager, Drönarpilot",
      image: "/ludwig.png",
      email: "ludwig@svevr.se",
    },
    {
      name: "Joel Danielsson",
      title: "Offentliga upphandlingar, Drönarpilot",
      image: "/joel.png",
      email: "joel@svevr.se",
      phone: "+46 70 878 25 52",
    },
    {
      name: "Karl Jörhalk",
      title: "Drönarpilot",
      image: "/karl.png",
      email: "karl@svevr.se",
    },
  ];

  const points = [
    "Certifierade drönarpiloter med hundratals flygtimmar",
    "Specialistkompetens inom tak, fasad och solpaneler",
    "Ett lösningsorienterat team med fokus på service och säkerhet",
  ];

  return (
    <section className="border-y">
      <div
        className={twMerge(
          "max-page-width grid grid-cols-1 items-start gap-12 px-4 py-12 md:gap-8 md:py-24 lg:relative lg:grid-cols-3",
        )}
      >
        <div className="flex flex-col gap-4 md:gap-8 lg:sticky lg:top-32 lg:col-span-2">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Möt teamet bakom Svevr
          </h2>
          <p className="whitespace-pre-line text-base md:text-lg lg:max-w-3xl lg:text-balance">
            {`Vi är ett team av dedikerade och erfarna drönarpiloter som brinner för att leverera högkvalitativa tjänster inom byggnadstvätt och takbehandling. Vårt mål är att hjälpa våra kunder att hålla sina fastigheter i toppskick med hjälp av den senaste teknologin och metoderna.\n\nVårt team är alltid redo att hjälpa dig med dina behov och vi ser fram emot att få arbeta med dig.`}
          </p>
          <div>
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check size={18} className="mt-1.5 min-w-fit" />
                <p className="text-base md:text-lg">{point}</p>
              </div>
            ))}
          </div>
          <Button
            href="/franchise"
            text="Kom i kontakt med oss"
            icon={<ArrowRight size={16} />}
            className="mt-4 bg-primary text-base hover:bg-[#232323]"
          />
        </div>
        <div className="grid w-full grid-cols-2 flex-col gap-x-2 gap-y-12 lg:flex">
          {team.map((teamMember, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  quality={100}
                  fill
                  src={teamMember.image}
                  alt="asd"
                  className="!relative h-full w-full rounded-sm object-cover object-center"
                />
              </div>
              <div className="flex w-full flex-col gap-0.5 px-2">
                <h3 className="text-balance text-lg md:text-2xl">
                  {teamMember.name}
                </h3>
                <p className="text-sm antialiased md:text-base">
                  {teamMember.title}
                </p>
              </div>
              <div className="mt-2 px-2">
                <a
                  href={`mailto:${teamMember.email}`}
                  className="block text-sm underline underline-offset-4 antialiased hover:opacity-75 md:text-base"
                >
                  {teamMember.email}
                </a>
                {teamMember.phone ? (
                  <a
                    href={`tel:${teamMember.phone}`}
                    className="block text-sm underline underline-offset-4 antialiased hover:opacity-75 md:text-base"
                  >
                    {teamMember.phone}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
