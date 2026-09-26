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
          03 / EDUCATION
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
          <span className="absolute -bottom-[5px] -left-[5px] font-mono text-xs text-border leading-none">+</span>
          <span className="absolute -bottom-[5px] -right-[5px] font-mono text-xs text-border leading-none">+</span>

          <div className="pb-6 border-b border-border">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-wider">
                PRIMARY DEGREE
              </span>
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                {primary.timeline}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight uppercase mt-5">
              {primary.degree}
            </h3>

            <div className="text-base sm:text-lg text-text-secondary font-medium mt-1">
              {primary.institute}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 font-mono text-xs">
            <div>
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                DEPARTMENT
              </span>
              <span className="text-text font-medium text-sm">
                {primary.stream}
              </span>
            </div>

            <div className="sm:text-right">
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                CAMPUS
              </span>
              <span className="text-text font-medium text-sm text-right">
                Varanasi, Uttar Pradesh, India
              </span>
            </div>

            {/* <div>
              <span className="block text-text-muted uppercase text-[10px] tracking-wider mb-1">
                KEY FOCUS AREAS
              </span>
              <span className="text-text-secondary">
                Data Structures, Algorithms, Systems & Engineering Mathematics
              </span>
            </div> */}
          </div>
        </motion.div>

        {/* Secondary Education: Subordinate Clean Cards */}
        <div>
          <div className="mb-4">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
              PRIOR ACADEMIC BACKGROUND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondary.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="border border-border bg-surface/60 p-6 sm:p-10 flex flex-col justify-between hover:border-border-light transition-colors duration-150"
              >
                <div>
                  <div className="mb-2">
                    <span className="font-mono text-xs font-semibold text-text uppercase">
                      {item.title}
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
