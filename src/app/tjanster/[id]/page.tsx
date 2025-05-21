import StepSection from "@/components/sections/StepSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { content } from "@/data/content";
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
    </>
  );
}
