import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
  children?: React.ReactNode;
}
const CenteredSection = ({ className, children }: Props) => {
  return (
    <section className={className}>
      <div
        className={twMerge(
          "max-page-width flex w-full flex-col items-center gap-6 px-4 py-12 md:gap-8 md:py-24 lg:gap-12",
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default CenteredSection;
