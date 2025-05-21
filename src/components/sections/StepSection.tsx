"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type Step = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
};

type StepSectionProps = {
  title: string;
  steps: Step[];
  showStepIndex?: boolean;
  options?: IntersectionOptions;
};

// Custom hook
const useStepInViewStates = (
  count: number,
  options: IntersectionOptions | undefined,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return Array.from({ length: count }, () => useInView(options));
};

const StepSection = ({
  title,
  steps,
  options,
  showStepIndex,
}: StepSectionProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const inViewStates = useStepInViewStates(
    steps.length,
    options || { threshold: 0.66 },
  );

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
          "max-page-width grid grid-cols-1 items-start gap-8 px-4 py-12 md:py-24 lg:relative lg:grid-cols-2 lg:gap-4",
        )}
      >
        <div className="gap-8 lg:sticky lg:top-32 lg:flex lg:flex-col lg:gap-12">
          <h2 className="max-w-3xl text-balance text-2xl font-medium sm:text-3xl md:text-4xl">
            {title}
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
                  {showStepIndex ? `${index + 1}. ` : null}
                  {step.title}
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
                  "flex scroll-mt-32 flex-col gap-4 transition-opacity duration-200 ease-in-out lg:gap-8",
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
                    {showStepIndex ? `${index + 1}. ` : null}
                    {step.title}
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

export default StepSection;
