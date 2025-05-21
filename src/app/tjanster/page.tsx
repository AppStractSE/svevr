import Services from "@/components/sections/Services";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        button={{
          text: "Boka en tid",
          href: "/tjanster",
        }}
        title="Upptäck Svevr"
        text="Vi är experter på byggnadstvätt och erbjuder en rad olika tjänster för att hålla ditt hem eller företag i toppskick."
        image="/svevr_step1.png"
        className="overflow-hidden bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat"
      />
      <Services />
    </>
  );
}
