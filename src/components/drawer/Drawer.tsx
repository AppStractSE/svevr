"use client";
import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { DrawerLink, mainLinks } from "./drawerData";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MainLinksProps {
  currentPath: string;
}

const MainLinks = ({ currentPath }: MainLinksProps) => {
  return (
    <nav className="flex flex-col gap-4 text-2xl tracking-wide md:text-3xl">
      {mainLinks.map((mainLink: DrawerLink) => {
        const isHome = mainLink.href === "/" && currentPath === `/`;
        const isMainActive = isHome || currentPath === mainLink.href;
        const baseClassNames =
          " transition-all duration-100 ease-in-out flex items-center hover:opacity-100";

        const { isActiveClassNames: mainActiveClass } =
          isActiveLink(isMainActive);

        return (
          <Link
            key={mainLink.label}
            href={mainLink.href}
            className={twMerge(baseClassNames, mainActiveClass)}
          >
            <span>{mainLink.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

function isActiveLink(isActive: boolean) {
  const isActiveClassNames = isActive ? "text-primary" : "opacity-50";
  return { isActiveClassNames };
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    scrollLock(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollLock = (isOpen: boolean) => {
    if (mounted) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  };

  return (
    <aside className="relative">
      <div
        className={twMerge(
          "fixed inset-0 z-50 h-screen w-screen transform overflow-hidden backdrop-blur-sm transition-all duration-500 ease-in-out",
          !isOpen
            ? "pointer-events-none invisible opacity-0 delay-200"
            : "visible opacity-100",
        )}
      >
        <div
          className={twMerge(
            "h-full w-screen overflow-hidden bg-primary transition-all duration-500",
            isOpen ? "opacity-50" : "opacity-0",
          )}
          onClick={handleToggle}
        />
        <div
          className={twMerge(
            "absolute left-0 top-0 flex h-full w-screen max-w-screen-sm transform flex-col space-y-8 overflow-auto bg-background px-4 py-4 shadow-xl transition-all duration-500 ease-in-out md:border-r md:px-12 md:py-12 lg:bg-opacity-90",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Image
              priority
              quality={100}
              width={150}
              height={32}
              alt="Logo"
              src="/logo.png"
            />
            <button
              onClick={handleToggle}
              className="rounded-full border border-primary/75 p-1"
            >
              <X
                size={28}
                className="text-primary/75 duration-300 ease-in-out hover:rotate-90"
              />
            </button>
          </div>
          <hr className="border-gray-300" />
          <MainLinks currentPath={pathname} />
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-4">
            <h6 className="text-base tracking-wide text-primary">
              {content.followUs}
            </h6>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-center gap-2 hover:opacity-50"
                >
                  <ArrowUpRight />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
