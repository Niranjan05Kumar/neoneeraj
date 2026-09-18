import { useState } from "react";
import { navLinks } from "../data";
import Sidebar from "./Sidebar";
import Switch from "./Switch";
import { motion, useScroll } from "framer-motion";
import { useLenis } from "../LenisContext";

const Navbar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const lenis = useLenis();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: -70,
        duration: 1.1,
      });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-trans-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Left: Typographic Brand Mark */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="group flex items-center gap-2 cursor-pointer focus-visible:outline-none"
          aria-label="Niranjan Kumar - Home"
        >
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-text group-hover:text-accent transition-colors duration-150">
            NIRANJAN
          </span>
          <span className="font-mono text-xs text-text-muted hidden sm:inline-block border-l border-border pl-2">
            DEV / SE
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-1 text-xs lg:text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? "text-text font-semibold"
                    : "text-text-muted hover:text-text"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Switch />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} active={active} />
        </div>
      </div>

      {/* Subtle Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="origin-left h-[1.5px] w-full bg-accent/60"
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
