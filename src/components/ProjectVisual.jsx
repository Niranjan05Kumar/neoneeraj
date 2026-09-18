import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { codesync, pathforge, hockeyiitbhu } from "../assets";

const PROJECT_META = {
  "codesync-ai": {
    image: codesync,
    domain: "code-sync-ai-tan.vercel.app",
    badge: "FULL STACK / REAL-TIME",
    status: "SANDBOX READY",
    caption: "SOCKET.IO + MONACO + DOCKER",
  },
  "pathforge": {
    image: pathforge,
    domain: "pathforge-dwlz.onrender.com",
    badge: "DSA VISUALIZER",
    status: "GRAPH ENGINE",
    caption: "DIJKSTRA & ASTAR TRACING",
  },
  "hockey-archive": {
    image: hockeyiitbhu,
    domain: "hockeyiitbhu.vercel.app",
    badge: "DIGITAL ARCHIVE / CMS",
    status: "INSTITUTIONAL CMS",
    caption: "MONGODB + IMAGEKIT ARCHIVE",
  },
};

const ProjectVisual = ({ id, title, image, live }) => {
  const meta = PROJECT_META[id] || {};
  const imageSrc = image || meta.image;
  const domain = meta.domain || (live ? new URL(live).hostname : "production-deployment");
  const caption = meta.caption || "PRODUCTION SYSTEM";

  return (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="group/visual block w-full border border-border bg-bg-dark hover:border-accent transition-colors duration-200 overflow-hidden relative"
      title={`Open ${title} live application`}
    >
      {/* Editorial Browser Tab Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border bg-surface text-text-muted font-mono text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
          <span className="ml-2 text-text font-medium text-[11px] truncate tracking-tight text-text-secondary group-hover/visual:text-accent transition-colors duration-150">
            {domain}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-accent text-[10px] shrink-0 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="hidden sm:inline">LIVE APP</span>
          <FiExternalLink size={11} className="ml-0.5 opacity-70 group-hover/visual:opacity-100" />
        </div>
      </div>

      {/* Screenshot Frame */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-dark">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover/visual:scale-[1.025] transition-transform duration-300 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-text-muted">
            {title}
          </div>
        )}

        {/* Subtle Dark Gradient Edge Overlay */}
        <div className="absolute inset-0 pointer-events-none border-inset border border-white/[0.04]" />
      </div>

      {/* Editorial Status Sub-Bar */}
      <div className="px-3.5 py-2 border-t border-border bg-surface flex items-center justify-between text-[11px] font-mono text-text-muted">
        <span className="truncate text-text-muted text-[10px] tracking-wider uppercase">
          {caption}
        </span>
      </div>
    </a>
  );
};

export default ProjectVisual;
