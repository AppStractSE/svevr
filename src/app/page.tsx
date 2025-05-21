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
      <WhySvevr />
      <FranchiseSection />
      <OurTeam />
      <ContactSection />
    </>
  );
}
