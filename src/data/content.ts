import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#272727",
    secondaryColor: "#353535",
    backgroundColor: "#ffffff",
    foregroundColor: "#171717",
    accentColor: "#22d3ee",
    maxPageWidth: "1320px",
  },

  applyTheme(theme: Record<string, string>) {
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
      if (value.startsWith("#")) value = hexToRgb(value);
      root.style.setProperty(cssVar, value);
    });
  },
  company: {
    name: "Svevr",
    email: "hej@svevr.se",
    phone: "+46 70 878 25 52",
  },
  followUs: "Följ oss",
  homePage: {
    title: "Förverkliga din sanna potential",
    subtitle: "Vad behöver du hjälp med?",
    description:
      "Upplev hälsa och välbefinnande med oss - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå. Kom igång idag genom att fylla i formuläret nedan!",
    button: "Get started",
  },
  contactSection: {
    title: "Kom i kontakt med oss",
    description: "Få en offert idag.",
    contact: "Kontaktuppgifter",
    contactFormTitle: "Fyll i formuläret så återkommer vi så fort vi kan!",
  },
  services: [
    {
      id: "takbehandling",
      title: "Takbehandling",
      description:
        "Förläng livslängden på ditt tak utan onödiga risker. Med hjälp av drönarteknik rengör vi taket effektivt och skonsamt – helt utan byggställningar eller onödigt slitage.",
      video: "/svevr.mp4",
    },
    {
      id: "fonstertvatt",
      title: "Fönstertvätt",
      description:
        "Kristallklara fönster – oavsett höjd. Vår drönarbaserade fönstertvätt levererar ett perfekt resultat snabbt, säkert och utan störningar i din vardag.",
      video: "/svevr_002.mp4",
    },
    {
      id: "fasadbehandling",
      title: "Fasadbehandling",
      description:
        "Fasaden får nytt liv när vi rengör den från år av påväxt, beläggningar eller oönskad graffiti. En tydlig förbättring, både för ögat och för underhållet.",
      video: "/svevr_004.mp4",
    },
    {
      id: "solceller",
      title: "Solceller",
      description:
        "Maximera din energiproduktion. Vi rengör dina solpaneler med precision och miljövänliga metoder, så att du får ut mesta möjliga av varje soltimme.",
      video: "/svevr_001.mp4",
    },
    {
      id: "besprutning-godsling",
      title: "Besprutning / Gödsling",
      description:
        "Precisionsbesprutning eller gödsling av ytor med drönarteknik.",
      video: "/svevr_006.mp4",
    },
    {
      id: "malning",
      title: "Målning",
      description:
        "Innovativ målning av svåråtkomliga ytor med hjälp av drönare.",
      video: "/svevr.mp4",
    },
  ],
};
