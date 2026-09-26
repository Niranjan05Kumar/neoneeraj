import { useEffect, useState } from "react";
import { useLenis } from "./LenisContext";
import {
  Navbar,
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Achievements,
  Contact,
  Footer,
} from "./components";

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
    <div className="border-b border-border" />
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "achievements",
      "contact",
    ];

    const updateActiveSection = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If near the bottom of the page, ensure the last section ("contact") is active
      if (windowHeight + scrollY >= documentHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Determine active section based on top offset relative to viewport
      const headerOffset = 160;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    if (lenis) {
      lenis.on("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (lenis) {
        lenis.off("scroll", onScroll);
      }
    };
  }, [lenis]);

  return (
    <div className="bg-bg text-text min-h-screen">
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
        <SectionDivider />
      </main>
      <Footer />
    </div>
  );
};

export default App;
