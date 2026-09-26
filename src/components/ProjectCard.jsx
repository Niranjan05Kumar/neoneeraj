import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectVisual from "./ProjectVisual";

export const FeaturedProjectCard = ({ project }) => {
  const { num, title, type, description, techs, live, github, id, image } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="group border border-border bg-surface hover:border-accent/60 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Corner Registration Marks */}
      <span className="absolute -top-[5px] -left-[5px] font-mono text-xs text-border leading-none select-none">+</span>
      <span className="absolute -top-[5px] -right-[5px] font-mono text-xs text-border leading-none select-none">+</span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-stretch">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Index & Type */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-bold text-accent tracking-wider">
                {num} //
              </span>
              <span className="px-2 py-0.5 border border-border text-[10px] font-mono text-text-muted uppercase tracking-wider bg-surface-secondary">
                {type}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text group-hover:text-accent transition-colors duration-150 mb-6">
              {title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 font-sans">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-10">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 border border-border bg-surface-secondary text-text font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-3 py-2.5 bg-text text-bg hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer border border-text shadow-sm hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
            >
              <span>EXPLORE PROJECT</span>
              <FiArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-3 py-2.5 bg-surface text-text hover:border-accent hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs uppercase tracking-wider border border-border transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <FiGithub size={15} className="group-hover/btn:scale-110 transition-transform duration-150" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>

        {/* Right Showcase Visual Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <ProjectVisual id={id} title={title} image={image} live={live} />
        </div>
      </div>
    </motion.article>
  );
};

export const OtherProjectCard = ({ project }) => {
  const { num, title, type, description, techs, image, live, github } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3 }}
      className="group border border-border bg-surface hover:border-border-light flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Project Thumbnail */}
        {image && (
          <div className="h-44 w-full overflow-hidden border-b border-border bg-bg-dark relative">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-bg/80 backdrop-blur-sm border border-border text-[10px] font-mono text-accent">
              {num}
            </div>
          </div>
        )}

        <div className="p-5">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
            {type}
          </div>
          <h4 className="font-display text-lg font-bold text-text group-hover:text-accent transition-colors duration-150 mb-2">
            {title}
          </h4>
          <p className="text-text-secondary text-xs leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mb-4">
            {techs.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 border border-border bg-surface-secondary text-text-muted text-[10px] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 pt-3 border-t border-border mt-auto flex items-center justify-between text-xs font-mono">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/item text-text hover:text-accent hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center gap-1 cursor-pointer"
        >
          <span>LIVE</span>
          <FiArrowUpRight size={13} className="group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform duration-150" />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/item text-text-muted hover:text-text hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center gap-1 cursor-pointer"
        >
          <FiGithub size={13} className="group-hover/item:scale-110 transition-transform duration-150" />
          <span>GITHUB</span>
        </a>
      </div>
    </motion.article>
  );
};
