import { useEffect } from "react";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "../LenisContext";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

const Sidebar = ({ isOpen, setIsOpen, active }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: -70,
        duration: 1.0,
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
    <div className="md:hidden">
      {/* Mobile Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        className="w-9 h-9 shrink-0 flex items-center justify-center text-text border border-border bg-surface hover:border-accent hover:text-accent transition-colors duration-150 cursor-pointer"
      >
        {isOpen ? <RiCloseLine size={19} /> : <RiMenu4Line size={19} />}
      </button>

      {/* Drawer Overlay + Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Sharp Editorial Drawer */}
            <motion.aside
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[65px] left-0 right-0 bg-surface border-b border-border p-6 shadow-2xl z-50 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
                  INDEX
                </span>
                <span className="text-xs font-mono text-accent">00 — 06</span>
              </div>

              <ul className="flex flex-col gap-3">
                {navLinks.map((link, idx) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full flex items-center justify-between py-2 text-left transition-colors duration-150 cursor-pointer ${
                          isActive
                            ? "text-accent font-semibold"
                            : "text-text-muted hover:text-text"
                        }`}
                      >
                        <span className="text-xl font-display uppercase tracking-tight">
                          {link.label}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          0{idx}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted">
                <span>IIT (BHU) VARANASI</span>
                <span>SOFTWARE ENGINEER</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
