import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const isReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: isReduced ? 0.01 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isReduced,
      smoothTouch: false, // Retain native, buttery-smooth mobile touch response
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};
