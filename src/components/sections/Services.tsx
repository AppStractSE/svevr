import Button from "@/components/buttons/Button";
import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Services = () => {
  const services = content.services;

  return (
    <section>
      <div
        className={twMerge(
          "max-page-width flex flex-col gap-8 px-4 py-12 md:py-24 lg:gap-12",
        )}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="max-w-3xl text-balance text-2xl font-medium sm:text-3xl md:text-4xl">
            Våra tjänster
          </h2>
          <h6 className="max-w-3xl text-balance text-lg md:text-xl">
            Vårt utbud av tjänster omfattar allt från takbehandling och
            takrengöring till fasadrengöring och graffitiborttagning.
          </h6>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch gap-x-2 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative aspect-[1.5/1] md:aspect-[1.75/1]">
                <video
                  playsInline
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full rounded-sm object-cover object-center"
                />
              </div>
              <div className="mb-auto flex flex-col gap-4 px-2">
                <h3 className="text-balance text-xl">{service.title}</h3>
                <p className="text-base antialiased">{service.description}</p>
              </div>
              <div className="mt-4 px-2">
                <Button
                  href="/kom-igang"
                  text="Läs mer"
                  icon={<ArrowRight size={16} />}
                  className="bg-primary text-sm hover:bg-[#232323]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
