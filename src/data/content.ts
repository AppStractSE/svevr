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
      shortDescription: "Förläng livslängden på ditt tak utan onödiga risker.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
    {
      id: "fonstertvatt",
      title: "Fönstertvätt",
      description:
        "Kristallklara fönster – oavsett höjd. Vår drönarbaserade fönstertvätt levererar ett perfekt resultat snabbt, säkert och utan störningar i din vardag.",
      video: "/svevr_002.mp4",
      shortDescription: "Kristallklara fönster – oavsett höjd.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
    {
      id: "fasadbehandling",
      title: "Fasadbehandling",
      description:
        "Fasaden får nytt liv när vi rengör den från år av påväxt, beläggningar eller oönskad graffiti. En tydlig förbättring, både för ögat och för underhållet.",
      video: "/svevr_004.mp4",
      shortDescription:
        "Fasaden får nytt liv när vi rengör den från år av påväxt.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
    {
      id: "solceller",
      title: "Solceller",
      description:
        "Maximera din energiproduktion. Vi rengör dina solpaneler med precision och miljövänliga metoder, så att du får ut mesta möjliga av varje soltimme.",
      video: "/svevr_001.mp4",
      shortDescription: "Maximera din energiproduktion.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
    {
      id: "besprutning-godsling",
      title: "Besprutning / Gödsling",
      description:
        "Precisionsbesprutning eller gödsling av ytor med drönarteknik.",
      video: "/svevr_006.mp4",
      shortDescription:
        "Precisionsbesprutning eller gödsling av ytor med drönarteknik.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
    {
      id: "malning",
      title: "Målning",
      description:
        "Innovativ målning av svåråtkomliga ytor med hjälp av drönare.",
      video: "/svevr.mp4",
      shortDescription:
        "Innovativ målning av svåråtkomliga ytor med hjälp av drönare.",
      advantages: [
        {
          title: "Snabb behandlingstid",
          shortDescription:
            "Drönarbaserad takbehandling kan genomföras upp till 70–80% snabbare än traditionella metoder med byggställning eller lift.",
          description:
            "Automatiserad flygning och effektiv applicering gör att ett medelstort tak (ca 150–200 m²) kan behandlas på 1–2 timmar, jämfört med 5–8 timmar med manuell rengöring och uppsättning av byggställning.",
          image: "/svevr_roof.png",
        },
        {
          title: "Kontaktfri metod",
          shortDescription:
            "Behandlingen sker helt utan fysisk kontakt med takytan, vilket minskar risken för skador på känsliga material.",
          description:
            "Drönaren rör aldrig taket, vilket förhindrar slitage på takpannor, tätskikt och andra ytskikt. Det är särskilt viktigt för äldre eller nylagda tak där fysiskt arbete kan orsaka skador.",
          image: "/svevr_roof.png",
        },
        {
          title: "Ingen behov av byggställning",
          shortDescription:
            "Ingen manuell åtkomst krävs, vilket eliminerar behovet av byggställningar, liftar eller stegar.",
          description:
            "Detta minskar installations- och demonteringstider som traditionellt kan ta 1–2 dagar, vilket i sin tur minskar störningar i omgivningen och sparar både tid och kostnad.",
          image: "/svevr_roof.png",
        },
        {
          title: "Högre säkerhet",
          shortDescription:
            "Behandlingen utförs från marknivå, vilket reducerar risken för fallolyckor med upp till 90% jämfört med manuellt takarbete.",
          description:
            "Att eliminera behovet av höghöjdsarbete minskar arbetsplatsolyckor och behovet av omfattande säkerhetsåtgärder, vilket förbättrar arbetsmiljön för personalen.",
          image: "/svevr_roof.png",
        },
        {
          title: "Visuell dokumentation",
          shortDescription:
            "Drönaren levererar högupplösta före- och efterbilder som kan användas för kvalitetssäkring.",
          description:
            "Den visuella dokumentationen möjliggör transparent uppföljning och kan underlätta kommunikation med fastighetsägare eller försäkringsbolag.",
          image: "/svevr_roof.png",
        },
      ],
    },
  ],
  howItWorks: [
    {
      title: "Inspektion & planering",
      shortDescription:
        "Vi börjar med att inspektera ytan – oavsett om det gäller tak, solpaneler eller fönster. Därefter planerar vi metod och utrustning för ett skonsamt och effektivt resultat.",
      description:
        "Första steget är alltid att analysera förutsättningarna. Vi inspekterar byggnadens placering, ytan som ska rengöras och bedömer nedsmutsningsgrad, höjd och material. Denna översikt görs med hjälp av drönare och ligger till grund för val av rengöringsmetod, tryck och medel. Vår teknik anpassas alltid efter ytan – tak, fönster eller solpaneler – för att uppnå ett skinande rent resultat utan risk för skador.",
      image: "/svevr_step1.png",
    },
    {
      title: "Förberedelse & säkerhetsåtgärder",
      shortDescription:
        "Vi säkrar området och ser till att alla moment sker tryggt och kontrollerat. Drönaren förbereds med rätt utrustning och rengöringsmedel.",
      description:
        "Innan vi påbörjar arbetet förbereder vi platsen noggrant. Vi kontrollerar väderförhållanden, spärrar av området om det behövs, och informerar berörda. Drönaren testas och laddas med rätt mängd skonsamt rengöringsmedel anpassat för just er yta. Allt detta görs för att tvätten ska ske säkert, effektivt och utan störningar.",
      image: "/svevr_step2.jpeg",
    },
    {
      title: "Drönartvätt av valda ytor",
      shortDescription:
        "Med precision och teknik rengör vi tak, fönster eller solpaneler – utan lift eller stege. Perfekt för svåråtkomliga platser.",
      description:
        "Nu påbörjas själva tvätten. Vår drönare styrs med hög precision och sprider rengöringsmedel jämnt över ytan. Vi når fönster på hög höjd, stora solpanelsfält eller tak med svår åtkomst – snabbt och utan fysisk kontakt. Det minimerar slitage och eliminerar behovet av klättring eller tunga maskiner. Resultatet blir skinande rent – oavsett yta.",
      image: "/svevr_step3.png",
    },
    {
      title: "Efterkontroll & resultat",
      shortDescription:
        "Vi kontrollerar det färdiga resultatet och dokumenterar med bilder från drönaren. Du får en tydlig sammanställning direkt efteråt.",
      description:
        "När rengöringen är klar gör vi en visuell efterkontroll – ofta med hjälp av drönaren igen. Vi dokumenterar arbetet och ser till att resultatet motsvarar våra höga krav. Kunden får tillgång till bilder eller video på före/efter. Det ger både trygghet och transparens.",
      image: "/svevr_step4.jpeg",
    },
  ],
};
