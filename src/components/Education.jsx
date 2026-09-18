import { motion } from "framer-motion";
import { education } from "../data";

const Education = () => {
  const { primary, secondary } = education;

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          02 / EDUCATION
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="space-y-8">
        {/* Primary Education: IIT BHU Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="border border-border bg-surface p-6 sm:p-10 relative"
        >
          {/* Subtle Technical Corner Accents */}
          <span className="absolute -top-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
          <span className="absolute -top-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-wider">
                  PRIMARY DEGREE
                </span>
                <span className="font-mono text-xs text-text-muted">
                  {primary.timeline}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight uppercase mb-1">
                {primary.degree}
              </h3>

              <div className="text-base sm:text-lg text-text-secondary font-medium">
                {primary.institute}
              </div>
            </div>

            {/* CGPA Technical Callout */}
            <div className="flex lg:flex-col items-baseline lg:items-end justify-between lg:justify-start gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-border">
              <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                ACADEMIC STANDING
              </span>
              <span className="font-display text-3xl sm:text-4xl font-bold text-accent">
                {primary.score}
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                DEPARTMENT / MAJOR
              </span>
              <span className="text-text font-medium text-sm">
                {primary.stream}
              </span>
            </div>

            <div>
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                CAMPUS
              </span>
              <span className="text-text font-medium text-sm">
                Varanasi, Uttar Pradesh, India
              </span>
            </div>

            <div>
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                KEY FOCUS AREAS
              </span>
              <span className="text-text-secondary">
                Data Structures, Algorithms, Systems & Engineering Mathematics
              </span>
            </div>
          </div>
        </motion.div>

        {/* Secondary Education: Subordinate Clean Cards */}
        <div>
          <div className="mb-4">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
              PRIOR ACADEMIC BACKGROUND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondary.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="border border-border bg-surface/60 p-5 flex flex-col justify-between hover:border-border-light transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-text uppercase">
                      {item.title}
                    </span>
                    <span className="font-mono text-sm font-bold text-text-secondary">
                      {item.score}
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary mb-1">
                    {item.institute}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-border flex items-center justify-between font-mono text-[11px] text-text-muted">
                  <span>{item.board}</span>
                  <span>{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
