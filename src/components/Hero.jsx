import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiCheckCircle } from "react-icons/fi";
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
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto technical-grid"
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
            <span>PROBLEM SOLVER</span>
            <span className="text-border">/</span>
            <span>C++ & DSA</span>
          </motion.div>

          {/* 4. Concise Professional Bio */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed mb-8 font-sans"
          >
            I'm a Full Stack Developer skilled in React, TypeScript, Node.js,
            and modern databases, with a strong foundation in Data Structures &
            Algorithms using C++. I design scalable architectures, build
            high-performance web systems, and write clean, resilient code.
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
              <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
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
          <div className="border border-border bg-surface/80 p-6 relative">
            {/* Technical Corner Markers */}
            <span className="absolute -top-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -top-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -bottom-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
            <span className="absolute -bottom-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>

            {/* Status Header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                STATUS / AVAILABILITY
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                OPEN TO ROLES
              </span>
            </div>

            {/* Metadata Rows */}
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="block text-text-muted uppercase text-[10px] tracking-wider">
                  01 // INSTITUTION
                </span>
                <span className="text-text font-medium">
                  IIT (BHU) VARANASI
                </span>
              </div>

              <div>
                <span className="block text-text-muted uppercase text-[10px] tracking-wider">
                  02 // DEGREE & STREAM
                </span>
                <span className="text-text font-medium">
                  B.Tech — Mining Engineering
                </span>
              </div>

              <div>
                <span className="block text-text-muted uppercase text-[10px] tracking-wider">
                  03 // TIMELINE
                </span>
                <span className="text-text font-medium">
                  2023 — PRESENT
                </span>
              </div>

              <div className="pt-3 border-t border-border">
                <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-2">
                  04 // CORE FOCUS STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["MERN", "TYPESCRIPT", "C++", "DSA"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-border text-[11px] text-text-secondary bg-surface-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
        <span className="tracking-widest uppercase">
          PORTFOLIO ARCHIVE // 2026
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
