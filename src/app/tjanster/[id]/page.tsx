import CenteredSection from "@/components/sections/CenteredSection";
import StepSection from "@/components/sections/StepSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import SplideWithArrows from "@/components/splide/SplideWithArrows";
import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const param = await params;
  const service = content.services.find((service) => service.id === param.id);
  if (!service) redirect("/404");
  return {
    title: service.title,
    openGraph: {
      title: `TC Elservice | ${service.title}`,
      description: service.description,
      url: `/vara-tjanster/${service.id}`,
      siteName: "TC Elservice",
      images: [
        {
          url: `/${service.video}`,
          width: 1200,
          height: 630,
          alt: `TC Elservice | ${service.title}`,
        },
      ],
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@",
      title: "TC Elservice",
      images: [
        {
          url: `/${service.video}`,
          width: 1200,
          height: 630,
          alt: `TC Elservice | ${service.title}`,
        },
      ],
      description: service.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const service = content.services.find((service) => service.id === param.id);
  if (!service) redirect("/404");

  return (
    <>
      <SubPageHeroSection
        video="/svevr.mp4"
        title={service.title}
        text={service.description}
        button={{
          text: "Jag vill ha en gratis offert",
          href: "/offertforfragan",
        }}
      />
      <StepSection title="Vad är fördelarna?" steps={service.advantages} />
      <CenteredSection className="overflow-hidden border-b">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Nyfiken på våra andra tjänster?
          </h2>
          <p className="text-base md:text-lg lg:max-w-3xl lg:text-balance">
            Med drönare kan vi utföra inspektioner av tak, fasader och andra
            svåråtkomliga områden. Vi kan även utföra mätningar och
            kartläggningar med hög precision. Våra drönartjänster är snabba,
            effektiva och kostnadseffektiva.
          </p>
        </div>
        <SplideWithArrows
          options={{
            rewind: false,
            gap: "0.5rem",
            perPage: 2,
            perMove: 1,
            focus: 0,
            start: 0,
            pagination: false,
            trimSpace: true,
            breakpoints: {
              1280: {
                gap: "0.5rem",
                perPage: 2,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              1024: {
                gap: "0.5rem",
                perPage: 1.75,
                pagination: true,
                arrows: false,
                trimSpace: false,
              },
              768: {
                gap: "0.5rem",
                perPage: 1.5,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              640: {
                gap: "0.5rem",
                perPage: 1.25,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              480: {
                gap: "0.5rem",
                perPage: 1.05,
                pagination: true,
                arrows: false,
              },
            },
            classes: {
              pagination: "splide__pagination custom__pagination",
              prev: "splide__arrow--prev splide__big__arrows !top-[45%]",
              next: "splide__arrow--next splide__big__arrows !top-[45%]",
            },
          }}
        >
          {content.services
            .filter((x) => x.title !== service.title)
            .map((service) => (
              <Link
                key={service.id}
                href={"/tjanster/" + service.id}
                className="group flex flex-col gap-4 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <div className="aspect-[1.618/1] transition-transform duration-300 ease-in-out lg:scale-110 lg:group-hover:scale-100">
                    <video
                      playsInline
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      className="h-full w-full rounded-sm object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 duration-300 ease-in-out lg:-translate-x-12 lg:group-hover:translate-x-2">
                  <ArrowRight
                    size={28}
                    className="hidden min-w-fit opacity-0 duration-300 ease-out group-hover:opacity-100 lg:block"
                  />
                  <div className="flex flex-col gap-2 px-2">
                    <h3 className="text-balance text-xl">{service.title}</h3>
                    <p className="text-balance text-sm md:text-base">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </SplideWithArrows>
      </CenteredSection>
    </>
  );
}
