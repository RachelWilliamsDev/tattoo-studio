"use client";
import { navigation } from "@/constants";
import { useAnnotatedLinks } from "@/hooks/useRoughNotation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const linkRefs = useAnnotatedLinks(navigation, pathname, !isOpen);

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] w-full px-6 xl:px-0">
      <div
        className={cn(
          "flex items-center justify-between mx-auto w-full md:max-w-screen-2xl h-[104px] bg-mutedBackground mt-[50px] backdrop-blur-[10px]",
          isOpen ? "rounded-t-3xl md:rounded-4xl" : "rounded-3xl md:rounded-4xl"
        )}
      >
        <nav className="flex w-full items-center md:justify-center uppercase text-foreground/80 text-lg tracking-[8%] px-6 md:px-0">
          <ul className="hidden md:flex items-center justify-center md:gap-2 lg:gap-10 xl:gap-[52px]">
            {navigation.slice(0, 3).map((item) => (
              <li key={item.name} className="flex flex-shrink-0">
                <Link href={item.href} passHref>
                  <span
                    ref={(el) => {
                      linkRefs.current[item.name] = el;
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between md:justify-normal w-full md:w-auto">
            <Link href="/" passHref>
              <Image
                src="/assets/company/Star.svg"
                width={70}
                height={70}
                alt="Tattoo Studio Logo"
                className="mx-0 md:mx-4 lg:mx-24 xl:mx-[120px] max-w-10 lg:max-w-14 xl:max-w-[70px]"
              />
            </Link>
            {isOpen ? (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                <div className="close icon mx-auto"></div>
              </Button>
            ) : (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                <Image
                  src="/assets/menu-line-vertical.svg"
                  width={40}
                  height={40}
                  alt="Menu"
                />
              </Button>
            )}
          </div>
          <ul className="hidden md:flex items-center justify-center md:gap-2 lg:gap-10 xl:gap-[52px]">
            {navigation.slice(-3).map((item) => (
              <li key={item.name}>
                <Link href={item.href} passHref>
                  <span
                    ref={(el) => {
                      linkRefs.current[item.name] = el;
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigation={navigation}
        pathname={pathname}
      />
    </header>
  );
};

export default Navbar;
