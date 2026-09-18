import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { useLenis } from "../LenisContext";

const Footer = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto font-mono text-xs text-text-muted">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
        {/* Left: Identity */}
        <div>
          <div className="font-display text-sm font-bold text-text uppercase tracking-tight">
            NIRANJAN KUMAR
          </div>
          <div className="text-[11px] text-text-muted mt-0.5">
            IIT (BHU) VARANASI
          </div>
        </div>

        {/* Center: Stack & Copyright */}
        <div className="text-left md:text-center">
          <div>Built with React &amp; JavaScript</div>
          <div className="text-[11px] text-text-muted mt-0.5">
            &copy; {new Date().getFullYear()} Niranjan Kumar. All rights reserved.
          </div>
        </div>

        {/* Right: Quick External Links + Back to Top */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={scrollToTop}
            className="group px-3 py-1.5 border border-border bg-surface text-text-secondary hover:border-accent hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-150 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>SCROLL TO TOP</span>
            <FiArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
