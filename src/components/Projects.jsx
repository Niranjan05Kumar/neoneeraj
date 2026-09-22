import { useState, useMemo } from "react";
import { projects } from "../data";
import { FeaturedProjectCard, OtherProjectCard } from "./ProjectCard";

const CATEGORIES = ["ALL", "FULL STACK", "DSA", "FRONTEND"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filteredProjects.filter((p) => p.featured);
  const other = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          05 / PROJECTS
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      {/* Section Title & Editorial Filter Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text uppercase mb-2">
            ENGINEERING SHOWCASE
          </h2>
          <p className="text-text-secondary text-base max-w-xl font-sans">
            Production-grade full-stack architectures, real-time engines, and algorithmic problem-solving platforms.
          </p>
        </div>

        {/* Minimal Text-Based Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex items-center gap-4 sm:gap-6 border-b border-border pb-2 font-mono text-xs"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors duration-150 relative pb-1 uppercase cursor-pointer ${isSelected
                    ? "text-accent font-semibold"
                    : "text-text-muted hover:text-text"
                  }`}
              >
                <span>{cat}</span>
                {isSelected && (
                  <span className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. FEATURED WORK */}
      {featured.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-8">
            <span className="font-mono text-xs font-semibold text-text uppercase tracking-widest">
              FEATURED WORK // 01 — 03
            </span>
            <span className="font-mono text-xs text-accent">PRIMARY FOCUS</span>
          </div>

          <div className="space-y-12">
            {featured.map((proj) => (
              <FeaturedProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      )}

      {/* 2. OTHER PROJECTS */}
      {other.length > 0 && (
        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-8">
            <span className="font-mono text-xs font-semibold text-text-muted uppercase tracking-widest">
              OTHER PROJECTS // 04 — 06
            </span>
            <span className="font-mono text-xs text-text-muted">UI & FRONTEND FOUNDATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((proj) => (
              <OtherProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
