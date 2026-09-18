import { motion } from "framer-motion";
import { achievements } from "../data";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          01 / ABOUT
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      {/* Main About Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight mb-6">
            "I build full-stack applications and enjoy solving complex problems through code."
          </h2>
          <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I am an undergraduate student at the{" "}
              <strong className="text-text font-normal">Indian Institute of Technology (BHU), Varanasi</strong>.
              Having started my journey crafting responsive frontend interfaces and fluid interactions,
              I have transitioned into full-stack software development with a deep commitment to systems engineering.
            </p>
            <p>
              My work centers around modern web architecture with <strong className="text-text font-normal">TypeScript, Node.js, Express, and distributed databases</strong>,
              complemented by a rigorous focus on <strong className="text-text font-normal">Data Structures & Algorithms in C++.</strong> I believe the best software balances
              architectural soundness, low-latency execution, and seamless human ergonomics.
            </p>
          </div>
        </div>

        {/* Quick Engineering Summary Box */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-border bg-surface p-6 sm:p-8">
          <div>
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-4">
              PHILOSOPHY & PRINCIPLES
            </span>
            <ul className="space-y-4 font-mono text-xs text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">01.</span>
                <span>Prioritize clarity, clean abstraction, and strong type safety.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">02.</span>
                <span>Ground implementations in solid algorithmic complexity analysis.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">03.</span>
                <span>Build resilient real-world software over decorative prototypes.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted">
            <span>DISCIPLINE</span>
            <span className="text-text font-medium">IIT (BHU) VARANASI</span>
          </div>
        </div>
      </div>

      {/* Subsection: Selected Achievements */}
      <div className="pt-12 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text uppercase">
            SELECTED ACHIEVEMENTS
          </h3>
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
            LEADERSHIP & COMPETITIVE ATHLETICS
          </span>
        </div>

        {/* Clean Editorial Timeline Table */}
        <div className="border-t border-border">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group border-b border-border py-5 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-hover transition-colors duration-150"
            >
              {/* Year & Badge */}
              <div className="flex items-center gap-4 md:w-48 shrink-0">
                <span className="font-mono text-sm font-semibold text-accent">
                  {item.year}
                </span>
                <span className="px-2 py-0.5 border border-border text-[10px] font-mono text-text-muted uppercase tracking-wider bg-surface">
                  {item.badge}
                </span>
              </div>

              {/* Title & Role */}
              <div className="flex-1">
                <div className="font-display text-base sm:text-lg font-bold text-text group-hover:text-accent transition-colors duration-150">
                  {item.title}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {item.subtitle}
                </div>
              </div>

              {/* Event / Context */}
              <div className="font-mono text-xs text-text-muted md:text-right max-w-sm">
                {item.event}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
