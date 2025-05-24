import StepSection from "@/components/sections/StepSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";

export default function Page() {
  interface Step {
    title: string;
    shortDescription: string;
    description: string;
    image: string;
  }
  const franchiseSteps: Step[] = [
    {
      title: "1. Intresseanmälan",
      shortDescription:
        "Skicka in en intresseanmälan så tar vi kontakt med dig.",
      description:
        "Det första steget är enkelt – fyll i vårt formulär och berätta kort om dig själv, din bakgrund och varför du är intresserad av att bli en del av Svevr. Vi söker drivna personer som vill bygga något eget och samtidigt vara del av ett växande nätverk. När vi tagit emot din intresseanmälan kontaktar vi dig för ett första samtal.",
      image: "/svevr_roof.png",
    },
    {
      title: "2. Lär känna Svevr",
      shortDescription:
        "Vi presenterar konceptet och vad det innebär att driva verksamhet med drönare.",
      description:
        "Under ett digitalt eller fysiskt möte går vi igenom hur Svevr fungerar – från våra tekniska lösningar och tjänster, till kundresan och affärsmodellen. Du får en tydlig bild av vad som krävs, vad du får tillbaka och vilka möjligheter som finns på sikt. Vi pratar också om vilket stöd du får från oss, och hur du kan växa med Svevr.",
      image: "/svevr_roof.png",
    },
    {
      title: "3. Intervju och avtal",
      shortDescription:
        "Om vi matchar varandra går vi vidare med ett personligt samtal.",
      description:
        "Vi lär känna varandra bättre och säkerställer att vi delar syn på kvalitet, ansvar och driv. Du får ställa alla dina frågor – om ekonomi, teknik, avtal eller framtid. Om vi båda känner att detta är rätt match, skriver vi ett franchiseavtal som ger dig exklusiv rätt att driva Svevr i ett visst område.",
      image: "/svevr_roof.png",
    },
    {
      title: "4. Utbildning och certifiering",
      shortDescription:
        "Du får en gedigen utbildning i drönarteknik, affärsdrift och kundhantering.",
      description:
        "Vi utbildar dig både praktiskt och teoretiskt. Du får lära dig om drönarflygning, takmaterial, säkerhetsrutiner och hur du använder vår mjukvara. Vi går även igenom hur du hanterar bokningar, ger offerter och bygger kundrelationer. Efter avslutad utbildning får du en Svevr-certifiering och är redo att börja jobba på riktigt.",
      image: "/svevr_roof.png",
    },
    {
      title: "5. Utrustning och förberedelser",
      shortDescription:
        "Vi hjälper dig att få allt du behöver för att komma igång.",
      description:
        "När du är färdigutbildad får du tillgång till drönare, arbetskläder, försäkring, Svevr:s digitala plattform, dokumentmallar, marknadsföringsmaterial och mycket mer. Vi hjälper dig planera din lansering och stöttar dig i varje steg – från att sätta upp en lokal närvaro till att skapa synlighet i sociala medier och Google.",
      image: "/svevr_roof.png",
    },
    {
      title: "6. Lansering!",
      shortDescription:
        "Nu är du redo att starta din verksamhet – med full support från oss.",
      description:
        "Nu är det dags! Du börjar ta emot dina första bokningar och utföra uppdrag i ditt område. Vi finns vid din sida med löpande rådgivning, teknisk support och nationell marknadsföring. Du rapporterar in dina resultat i vårt system och har möjlighet att växa ditt område över tid. Det är din verksamhet – med vårt stöd.",
      image: "/svevr_roof.png",
    },
  ];

  return (
    <>
      <SubPageHeroSection
        title="Bli en del av Svevr"
        text="Vill du starta eget och samtidigt vara del av ett växande nätverk? Som franchisetagare hos Svevr får du möjlighet att driva din egen verksamhet med stöd från oss."
        video="/svevr.mp4"
        className="overflow-hidden bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat"
      />
      <StepSection
        title="Såhär går det till för att bli franchisetagare"
        steps={franchiseSteps}
      />
    </>
  );
}
