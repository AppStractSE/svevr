import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

interface Props {
  image?: string;
  imageClasses?: string;
  title: string;
  subtitle?: string;
  text: string;
  rtl?: boolean;
  className?: string;
  button?: {
    href: string | { pathname: string; query: { [key: string]: string } };
    text: string;
  };
}
const FranchiseSection = ({
  image,
  title,
  subtitle,
  text,
  rtl,
  button,
  imageClasses = "object-contain aspect-square",
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width grid items-center justify-between gap-6 px-4 py-12 sm:grid-cols-2 md:gap-8 md:py-24 lg:gap-12">
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <p className="whitespace-pre-line text-base md:text-lg">{subtitle}</p>
          <h3 className="text-3xl font-medium tracking-wide md:text-4xl">
            {title}
          </h3>
          <p className="whitespace-pre-line text-base md:text-lg">{text}</p>
          {button && (
            <Button
              href="/franchise"
              text="Läs mer om franchise"
              icon={<ArrowRight size={16} />}
              className="bg-primary text-sm hover:bg-[#232323]"
            />
          )}
        </div>
        {image && (
          <div className={twMerge(rtl ? "lg:order-[-1]" : "")}>
            <Image
              priority
              quality={100}
              src={image}
              alt=""
              fill
              className={twMerge(
                "!relative h-auto w-full max-w-full rounded-sm object-center",
                imageClasses,
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FranchiseSection;
