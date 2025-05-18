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
      id: "solpaneler",
      title: "Solpaneler",
      description:
        "Maximera din energiproduktion. Vi rengör dina solpaneler med precision och miljövänliga metoder, så att du får ut mesta möjliga av varje soltimme.",
      video: "/svevr_001.mp4",
    },
    {
      id: "graffiti",
      title: "Graffiti",
      description:
        "Bli av med oönskad graffiti – snabbt, effektivt och utan att skada underlaget. Våra drönarlösningar anpassas efter ytan för ett optimalt resultat.",
      video: "/svevr_003.mp4",
    },
    {
      id: "alger-och-mossa",
      title: "Alger & mossa",
      description:
        "Ett rent och friskt hus börjar på utsidan. Vi avlägsnar alger, mossa och annan påväxt från tak och fasader – helt utan högtryckstvätt som kan skada ytan.",
      video: "/svevr_004.mp4",
    },
    {
      id: "inspektion",
      title: "Inspektion",
      description:
        "Få full koll på tak, fasader och värmeläckage – utan att klättra. Våra drönarinspektioner ger en tydlig bild av fastighetens skick, snabbt, säkert och kostnadseffektivt.",
      video: "/svevr_005.mp4",
    },
  ],
  projects: [
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
  ],
};
