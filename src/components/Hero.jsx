import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiCheckCircle, FiGithub } from "react-icons/fi";
import { useLenis } from "../LenisContext";
import Toast from "./Toast";

const Hero = () => {
  const lenis = useLenis();
  const [showToast, setShowToast] = useState(false);

  const scrollTo = (id) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.1 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto technical-grid"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto"
      >
        {/* Left Column: Editorial Typographic Core */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* 1. Small Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3">
            <span className="inline-block w-2 h-2 bg-accent" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-text-muted uppercase">
              HELLO, I'M
            </span>
          </motion.div>

          {/* 2. Large Editorial Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[3.8rem] sm:text-[5.5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.92] text-text uppercase mb-4"
          >
            NIRANJAN <br />
            <span className="text-text-secondary">KUMAR</span>
          </motion.h1>

          {/* 3. Professional Role Heading */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm tracking-wider uppercase text-accent font-semibold mb-6"
          >
            <span>FULL STACK DEVELOPER</span>
            <span className="text-border">/</span>
            <span>C++ & DSA</span>
          </motion.div>

          {/* 4. Concise Professional Bio */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed mb-8 font-sans"
          >
            I'm a Full-Stack Developer focused on building practical web applications with
            <span className="text-text"> React, TypeScript, Node.js, &amp; MongoDB.</span> I also work with
            <span className="text-text"> C++ and Data Structures & Algorithms </span>
            to strengthen my problem-solving skills.
          </motion.p>

          {/* 5. Sharp Rectangular Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group px-5 py-3 bg-text text-bg font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer border border-text shadow-sm hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
            >
              <span>VIEW PROJECTS</span>
              <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </button>

            <a
              href="https://github.com/niranjan05Kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-3 bg-surface text-text font-mono text-xs sm:text-sm uppercase tracking-wider border border-border hover:border-accent hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GITHUB</span>
              <FiGithub size={16} className="group-hover:scale-110 transition-transform duration-150" />
            </a>

            <a
              href="/Niranjan_Kumar_Resume.pdf"
              download
              onClick={handleDownload}
              className="group px-5 py-3 bg-surface text-text font-mono text-xs sm:text-sm uppercase tracking-wider border border-border hover:border-accent hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>RESUME</span>
              <FiDownload size={16} className="group-hover:translate-y-0.5 transition-transform duration-150" />
            </a>

          </motion.div>
        </div>

        {/* Right Column: Engineering Metadata Panel */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 w-full"
        >
          <div className="border border-border bg-surface/80 p-8 sm:p-10 relative font-mono text-xs">
            {/* Technical Corner Markers */}
            <span className="absolute -top-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -top-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -bottom-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -bottom-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>

            {/* 1. Academic Information */}
            <div className="space-y-1.5 pb-5 border-b border-border">
              <div className="font-semibold text-text text-sm tracking-wider uppercase">
                IIT (BHU) VARANASI
              </div>
              <div className="text-text-secondary text-xs">
                B.Tech — Mining Engineering
              </div>
              <div className="text-text-muted text-xs tracking-wider">
                2023 — PRESENT
              </div>
            </div>

            {/* 2. Core Focus Stack */}
            <div className="py-5 border-b border-border text-xs tracking-wider text-text-secondary flex flex-wrap items-center gap-2">
              <span>MERN</span>
              <span className="text-accent">·</span>
              <span>TYPESCRIPT</span>
              <span className="text-accent">·</span>
              <span>C++</span>
              <span className="text-accent">·</span>
              <span>DSA</span>
            </div>

            {/* 3. Availability Status */}
            <div className="pt-5 flex items-center gap-2 text-accent text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="tracking-wider uppercase font-semibold">
                OPEN TO ROLES
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted"
      >
        <span className="tracking-widest uppercase text-base">
          WORK // 2026
        </span>
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="group px-3 py-1.5 border border-border bg-surface text-text-secondary hover:border-accent hover:text-accent hover:bg-surface-hover font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-150 cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce inline-block">↓</span>
        </button>
      </motion.div>

      {/* Toast Notification for Resume Download */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={
          <span className="flex items-center gap-2 text-text">
            <FiCheckCircle className="text-accent" size={16} />
            <span>Resume downloaded successfully.</span>
          </span>
        }
      />
    </section>
  );
};

export default Hero;
