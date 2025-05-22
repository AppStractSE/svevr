"use client";
import useMounted from "@/hooks/useMounted";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ICON_SIZE = 24;
  const pathname = usePathname();
  const isMounted = useMounted();

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const buttonBaseClasses = twMerge(
    "px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm tracking-wide  transition-all duration-100 ease-in-out",
  );

  return (
    <>
      <header
        className={twMerge(
          "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-yellow-300/50 shadow-md backdrop-blur-md"
            : "bg-transparent py-2.5",
          isMounted ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
        )}
      >
        <div className="max-page-width px-4 py-2.5 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className={twMerge(
                  buttonBaseClasses,
                  isScrolled ? "" : "text-white",
                  "!p-0",
                )}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <MenuIcon size={ICON_SIZE} />
              </button>
              <div
                className={twMerge(
                  "h-6 min-w-[1.5px] transition-all duration-100 ease-in-out",
                  isScrolled ? "bg-primary" : "bg-white",
                )}
              />
              <Link href="/" className="h-auto w-24 md:w-40">
                <Image
                  priority
                  quality={100}
                  fill
                  alt="Logo"
                  src={isScrolled ? "/logo.png" : "/logo_white.png"}
                  className="!relative transition-all duration-100 ease-in-out"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <Link
                href="/tjanster"
                className={twMerge(
                  buttonBaseClasses,
                  isScrolled ? "" : "text-white",
                  "hidden sm:block",
                )}
              >
                Tjänster
              </Link>
              <Link
                href="/om-oss"
                className={twMerge(
                  buttonBaseClasses,
                  isScrolled ? "" : "text-white",

                  "hidden sm:block md:hidden lg:block",
                )}
              >
                Franchise
              </Link>
              <Link
                href="/om-oss"
                className={twMerge(
                  buttonBaseClasses,
                  isScrolled ? "" : "text-white",

                  "hidden sm:block md:hidden lg:block",
                )}
              >
                Om Svevr
              </Link>
              <Link
                href="/offertforfragan"
                className={twMerge(
                  buttonBaseClasses,
                  "min-w-fit rounded-sm",
                  isScrolled
                    ? "hover:text-initial bg-primary text-white hover:bg-[#222222]"
                    : "hover:text-initial bg-yellow-300 text-primary hover:bg-yellow-400",
                )}
              >
                Offertförfrågan
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
