import { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Education,
  Skills,
  Projects,
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

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -65% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen selection:bg-accent selection:text-white">
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
        <Contact />
        <SectionDivider />
      </main>
      <Footer />
    </div>
  );
};

export default App;
