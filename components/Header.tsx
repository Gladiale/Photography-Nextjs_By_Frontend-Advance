"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

// Import Components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setHeader(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove Events
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 translation-all ${pathname === "/" && "bg-[#fff]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* Navigation Section */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* Theme Toggle */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
