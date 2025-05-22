import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerlinks = [
    // { name: "Tidigare projekt", href: "/projekt" },
    { name: "Tjänster", href: "/tjanster" },
    { name: "Franchise", href: "/franchise" },
    { name: "Om Svevr", href: "/om-oss" },
    { name: "Offertförfrågan", href: "/offertforfragan" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-background">
      <div className="max-page-width flex flex-col gap-8 px-4 pb-8 pt-32 md:gap-16">
        <div className="flex flex-wrap items-start gap-12 md:gap-24">
          <div className="min-w-full md:min-w-fit">
            <Link href="/" className="relative block h-auto w-32 md:w-64">
              <Image
                priority
                quality={100}
                className="!relative"
                fill
                alt="Logo"
                src="/logo_white.png"
              />
            </Link>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Snabblänkar</h5>
            <div className="flex flex-col gap-4">
              {footerlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-fit items-center gap-2 text-lg font-light hover:text-yellow-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Kontakt</h5>
            <div className="flex flex-col gap-2">
              <Link
                className="text-lg font-light hover:text-yellow-300"
                href={`tel:${content.company.phone}`}
              >
                {content.company.phone}
              </Link>
              <Link
                className="text-lg font-light hover:text-yellow-300"
                href={`mailto:${content.company.email}`}
              >
                {content.company.email}
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Följ oss</h5>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  className="flex w-fit items-center gap-2 text-lg font-light hover:text-yellow-300"
                >
                  <ArrowUpRight size={16} />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-background/25" />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-background/50">
            © {currentYear} {content.company.name} AB. All rights reserved.
          </p>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs text-background/50 hover:underline"
          >
            Integritetspolicy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
