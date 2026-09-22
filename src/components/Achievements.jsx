import { motion } from "framer-motion";
import { achievements } from "../data";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          06 / ACHIEVEMENTS
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      {/* Section Title */}
      <div className="mb-14">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text uppercase mb-3">
          HONORS & ATHLETIC MILESTONES
        </h2>
        <p className="text-text-secondary text-base max-w-2xl font-sans">
          Competitive achievements and leadership positions representing the Indian Institute of Technology (BHU), Varanasi in collegiate and Inter-IIT championships.
        </p>
      </div>

      {/* Editorial Timeline Layout */}
      <div className="border-t border-border">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="group border-b border-border py-6 px-3 sm:px-4 relative flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:bg-surface-hover transition-colors duration-150"
          >
            {/* Year & Category Badge */}
            <div className="flex items-center gap-3 sm:gap-4 md:w-52 shrink-0">
              <span className="font-mono text-base font-bold text-accent tracking-tight">
                {item.year}
              </span>
              <span className="px-2.5 py-0.5 border border-border text-[10px] font-mono text-text-muted uppercase tracking-wider bg-surface">
                {item.badge}
              </span>
            </div>

            {/* Achievement Honor & Role */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg sm:text-xl font-bold text-text group-hover:text-accent transition-colors duration-150 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary font-medium mt-0.5">
                {item.subtitle}
              </p>
            </div>

            {/* Tournament / Institution Context */}
            <div className="font-mono text-xs text-text-muted md:text-right max-w-md shrink-0">
              {item.event}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
