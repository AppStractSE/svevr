import ContactSection from "@/components/sections/ContactSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import OurTeam from "@/components/sections/OurTeam";
import Services from "@/components/sections/Services";
import WhySvevr from "@/components/sections/WhySvevr";

export default function Home() {
  return (
    <>
      <HeroSection
        className={`overflow-hidden bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat`}
      />
      <HowItWorks />
      <Services />
      {/* <WhySvevr /> */}
      <OurTeam />
      <FranchiseSection
        rtl
        button={{
          href: "/kontakt",
          text: "Läs mer om franchise",
        }}
        title="Bli en del av SVEVR"
        text={`Har du ett intresse av drönarflygning och byggnadstvätt? Vi har ett flertal regionala aktörer som vi just nu hjälper till att starta upp inför säsongen.\n\nAnsök du också så kommer du vara igång inom kort.`}
        image="/svevrige.png"
      />
      <ContactSection />
    </>
  );
}
