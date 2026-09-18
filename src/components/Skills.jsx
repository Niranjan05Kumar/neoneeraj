import { motion } from "framer-motion";
import { skillCategories } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          03 / SKILLS
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="mb-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text uppercase mb-3">
          TECHNICAL CAPABILITIES
        </h2>
        <p className="text-text-secondary text-base max-w-2xl font-sans">
          Curated proficiencies spanning systems programming, modern full-stack web
          architecture, data persistence, and security practices.
        </p>
      </div>

      {/* Categorized Technical Typography Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border border-border bg-surface p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border mb-5">
                <span className="font-mono text-xs font-semibold text-accent tracking-wider uppercase">
                  {group.category}
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  0{index + 1}
                </span>
              </div>

              {/* Skills Typographic Tags List */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group/item inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-surface-secondary text-text font-mono text-xs hover:border-accent hover:text-accent hover:bg-surface transition-all duration-150 cursor-default"
                  >
                    <span className="w-1 h-1 bg-accent opacity-0 group-hover/item:opacity-100 transition-opacity duration-150" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border flex items-center justify-between font-mono text-[10px] text-text-muted">
              <span>ACTIVE STACK</span>
              <span>{group.skills.length} TECHNOLOGIES</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
