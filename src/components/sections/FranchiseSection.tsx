import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../buttons/Button";

const FranchiseSection = () => {
  return (
    <section>
      <div className="max-page-width grid items-center justify-between gap-6 px-4 py-12 sm:grid-cols-2 md:gap-8 md:py-24 lg:gap-12">
        <div>
          <Image
            priority
            quality={100}
            src="/svevrige.png"
            alt="Svevrige"
            fill
            className="!relative aspect-square h-auto w-full max-w-full rounded-sm object-contain object-center"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Bli en del av Svevr
          </h2>
          <p className="whitespace-pre-line text-base md:text-lg">{`Har du ett intresse av drönarflygning och byggnadstvätt? Vi har ett flertal regionala aktörer som vi just nu hjälper till att starta upp inför säsongen.\n\nAnsök du också så kommer du vara igång inom kort.`}</p>
          <Button
            href="/franchise"
            text="Läs mer om franchise"
            icon={<ArrowRight size={16} />}
            className="bg-primary text-sm hover:bg-[#232323]"
          />
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
