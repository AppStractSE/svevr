import ContactSection from "@/components/sections/ContactSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import HeroSection from "@/components/sections/HeroSection";
import OurTeam from "@/components/sections/OurTeam";
import Services from "@/components/sections/Services";
import StepSection from "@/components/sections/StepSection";
import WhySvevr from "@/components/sections/WhySvevr";
import { content } from "@/data/content";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StepSection
        title="Så funkar det"
        steps={content.howItWorks}
        showStepIndex
      />
      <Services />
      <WhySvevr />
      <FranchiseSection />
      <OurTeam />
      <ContactSection />
    </>
  );
}
