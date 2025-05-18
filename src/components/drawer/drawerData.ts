import { content } from "@/data/content";

export interface DrawerLink {
  href: string;
  label: string;
  externalLink?: boolean;
  image?: string;
  sublinks?: DrawerLink[];
}

const mainLinks: DrawerLink[] = [
  { href: "/", label: "Start" },
  {
    href: "/tjanster",
    label: "Tjänster",
  },
  { href: "/franchise", label: "Franchise" },
  { href: "/offertforfragan", label: "Offertförfrågan" },
  { href: "/om-svevr", label: "Om Svevr" },
];

const serviceLinks = content.services.map((service) => ({
  href: `/vara-tjanster/${service.id}`,
  label: service.title,
}));

export { mainLinks, serviceLinks };
