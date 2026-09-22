# Niranjan Kumar — Personal Portfolio

> Personal portfolio showcasing my full-stack web development systems, production projects, Data Structures & Algorithms in C++, and engineering journey at IIT (BHU) Varanasi.

[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.10-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## Live Demo

- **Production Deployment**: [View Live Portfolio](https://niranjan05kumar.vercel.app/) *(or your custom deployment URL)*
- **Repository**: [github.com/Niranjan05Kumar/neoneeraj](https://github.com/Niranjan05Kumar/neoneeraj)

---

## Overview

This repository houses the source code for my personal developer portfolio. Built with **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis**, the site is designed with a **Dark Technical Editorial** aesthetic.

Rather than relying on generic templates, vibrant decorative gradients, or artificial metrics, the portfolio communicates engineering rigor through:
- **Full-Stack Competence**: Real-time collaborative architectures, REST APIs, and database-backed management platforms.
- **Algorithmic Foundations**: Data Structures & Algorithms problem-solving with interactive C++ execution traces.
- **Technical Discipline**: Sharp `0px` radius containers, hairline borders, monospace metadata labeling, and tactile micro-interactions.
- **Academic & Leadership Record**: Undergraduate engineering background at **IIT (BHU) Varanasi** alongside competitive athletic leadership as Hockey Vice Captain.

---

## Key Features

- **Dark / Light Theme System**: Complete theme cascade with instant switching between Dark (`#080808`), Technical Light (`#f5f5f2`), and OS `System` preference via `Switch.jsx` with `localStorage` persistence.
- **Lenis Smooth Inertial Scrolling**: Fluid scrolling powered by `@studio-freight/lenis` wrapped in a custom React context (`LenisContext.jsx`), featuring header offset compensation and native touch pass-through (`smoothTouch: false`).
- **Scrollspy Navigation**: Active section tracking powered by `IntersectionObserver` that highlights navigation states in both the fixed header and the mobile drawer.
- **Mobile Drawer Navigation**: Slide-out technical drawer with backdrop blur, numbered indices (`01 — 05`), and automatic dismissal on route clicks.
- **Category-Filtered Projects Showcase**: Live client-side project filtering across categories (`ALL`, `FULL STACK`, `DSA`, `FRONTEND`).
- **Live Production App Frames**: Real application screenshots embedded in technical browser mockups with live domain display, traffic dots, and new-tab navigation.
- **Interactive CTA Micro-Animations**: Smooth hover lift (`-translate-y-0.5`), tactile active press feedback, glowing accent shadows, and directional icon translations on all action buttons.
- **Interactive Copy-to-Clipboard**: Instant email copy action with sharp monospace toast notification feedback (`Toast.jsx`).
- **Direct Resume Access**: Download link for `Niranjan_Kumar_Resume.pdf` with automated download notification.
- **Performance & Reduced-Motion Safe**: Optimized asset loading, zero external font blocking, and accessible scroll behavior for reduced-motion preferences.

---

## Sections

| Section | Target ID | Description |
|---|---|---|
| **Hero** | `#home` | Editorial headline, core technical specs (`FULL STACK / PROBLEM SOLVER / C++ & DSA`), primary CTAs, live availability indicator, and quick IIT BHU metadata panel. |
| **About** | `#about` | Engineering statement, development philosophy, and Selected Achievements timeline (Vice Captain, Spardha, Sangram, Udghosh, Inter-IIT). |
| **Education** | `#education` | Academic spotlight on B.Tech at Indian Institute of Technology (BHU) Varanasi (Mining Engineering, 6.80 CGPA) with secondary schooling credentials. |
| **Skills** | `#skills` | Categorized technical typography grid covering Languages, Frontend, Backend, Databases, Authentication & Security, and Tools & Deployment. |
| **Projects** | `#projects` | Filterable engineering showcase featuring 3 primary full-stack systems with live screenshots, followed by 3 secondary frontend platforms. |
| **Contact** | `#contact` | Direct communication channels (Email, LinkedIn, GitHub, Location) with one-click copy actions and direct outreach links. |
| **Footer** | — | Minimalist technical footer with identity, stack credits, and a boxed "Scroll to Top" action. |

---

## Featured Projects

### 01 // CodeSync AI
- **Category**: Full Stack / Real-Time / AI
- **Description**: Real-time collaborative code editor with AI-assisted developer workflows, low-latency document sync, and containerized execution.
- **Tech Stack**: React, TypeScript, Node.js, Express, Socket.IO, PostgreSQL, Redis, Docker
- **Key Highlights**:
  - Real-time multi-user document synchronization via Socket.IO
  - AI-assisted developer completions & workflow assistance
  - Isolated containerized execution environment powered by Docker
  - High-throughput caching & state persistence with Redis and PostgreSQL
- **Live Demo**: [code-sync-ai-tan.vercel.app](https://code-sync-ai-tan.vercel.app/)
- **GitHub**: [github.com/niranjan05Kumar/codesync-ai](https://github.com/niranjan05Kumar/codesync-ai)

---

### 02 // PathForge
- **Category**: DSA / Algorithms / Interactive
- **Description**: A DSA-focused interactive engine for exploring data structures, algorithmic execution traces, and problem-solving concepts.
- **Tech Stack**: React, TypeScript, C++, Algorithms, Data Structures
- **Key Highlights**:
  - Step-by-step visual execution trace for graph, tree, and sorting algorithms (Dijkstra, A*, BFS/DFS)
  - Interactive data structure mutation, state inspection, and telemetry graphs
  - Core algorithmic problem-solving logic implemented with strict time constraints
- **Live Demo**: [pathforge-dwlz.onrender.com](https://pathforge-dwlz.onrender.com/)
- **GitHub**: [github.com/niranjan05Kumar/pathforge](https://github.com/niranjan05Kumar/pathforge)

---

### 03 // IIT (BHU) Hockey Digital Archive
- **Category**: Full Stack / Archive / CMS
- **Description**: A full-stack digital archive and management platform for documenting IIT (BHU) Hockey's players, teams, tournaments, matches, achievements, and media gallery.
- **Tech Stack**: React, TypeScript, Node.js, Express, MongoDB, Mongoose, ImageKit, JWT, Zod
- **Key Highlights**:
  - Full CRUD records management for players, tournaments, rosters, and match logs
  - ImageKit-backed media archive and tournament gallery management
  - Role-based admin access control with JWT authentication and Zod schema validation
- **Live Demo**: [hockeyiitbhu.vercel.app](https://hockeyiitbhu.vercel.app/)
- **GitHub**: [github.com/Niranjan05Kumar/HOCKEYIITBHU](https://github.com/Niranjan05Kumar/HOCKEYIITBHU)

---

### Additional Frontend Projects

- **Obys Agency Clone**: Creative agency interface engineered with GSAP, Locomotive Scroll, and magnetic cursor interactions.  
  [Live Demo](https://niranjan05kumar.github.io/obysagency/) &bull; [GitHub](https://github.com/Niranjan05Kumar/obysagency)
- **HooBank Platform**: Modern financial services UI built with React and Tailwind CSS.  
  [Live Demo](https://niranjan05kumar.github.io/hoobank/) &bull; [GitHub](https://github.com/Niranjan05Kumar/hoobank)
- **Medwin Care Platform**: Healthcare management interface with doctor directories and consultation flows.  
  [Live Demo](https://niranjan05kumar.github.io/medwin/) &bull; [GitHub](https://github.com/Niranjan05Kumar/medwin)

---

## Tech Stack

### Core Framework & Runtime
- **React 19** (`v19.1.0`)
- **React DOM 19** (`v19.1.0`)
- **JavaScript (ES Modules)**

### Build Tool & Environment
- **Vite 6** (`v6.3.5`)
- **@vitejs/plugin-react** (`v4.4.1`)
- **vite-plugin-svgr** (`v4.3.0`)

### Styling & Design Tokens
- **Tailwind CSS v4** (`v4.1.10`)
- **@tailwindcss/vite** (`v4.1.10`)
- **Vanilla CSS Variables** (Theme tokens for dark/light switching)

### Animation & Smooth Scrolling
- **Lenis** (`@studio-freight/lenis v1.0.42`) — Inertial scrolling engine
- **Framer Motion** (`v12.19.1`) — Section reveal transitions and layout animations

### Icons
- **React Icons** (`v5.5.0`) — Feather Icons (`react-icons/fi`), Remix Icons (`react-icons/ri`), Bootstrap Icons (`react-icons/bs`)

### Code Quality
- **ESLint 9** (`v9.25.0`) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

---

## Design System

The portfolio utilizes an editorial technical design system:

- **Sharp Corner Architecture**: `0px` border-radius across all cards, panels, images, and action buttons (`--b-radius1: 0px`).
- **Hairline Borders**: Crisp `1px solid var(--border)` containers with corner crosshair markers (`+`).
- **Typography Triad**:
  - **Display / Headings**: `Space Grotesk` (Google Fonts, weights 400–700)
  - **Body & Paragraphs**: `PP Neue Machina` (Light weight 300 via local `@font-face` woff2)
  - **Monospace / Metadata / Code**: `JetBrains Mono` (Google Fonts, weights 400–600)
- **Mathematical Grid Alignment**: Section dividers share the identical `max-w-7xl mx-auto px-4 sm:px-8 lg:px-12` wrapper as the inner content, ensuring line endpoints align with project cards and headers.
- **Tactile Color Palette**:
  - **Dark Mode (Default)**: Background `#080808`, Surface `#111111`, Borders `#262626`, Text `#f5f5f5`, Accent `#3b82f6`
  - **Light Mode**: Background `#f5f5f2`, Surface `#ffffff`, Borders `#d7d7d2`, Text `#111111`, Accent `#1d4ed8`

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── fonts/                       # Local Neue Machina web font files (.woff2)
│   ├── projects/                    # Featured project screenshot assets
│   ├── favicon.svg                  # Brand favicon
│   └── Niranjan_Kumar_Resume.pdf    # Direct-download resume
├── src/
│   ├── assets/                      # SVGs, project images, and icon exports
│   │   ├── codesync.png             # CodeSync AI application screenshot
│   │   ├── pathforge.png            # PathForge graph visualizer screenshot
│   │   ├── hockeyiitbhu.jpg         # IIT BHU Hockey digital archive hero
│   │   ├── hoobank.png              # HooBank thumbnail
│   │   ├── medwin.png               # Medwin Care thumbnail
│   │   ├── obysagency.png           # Obys Agency thumbnail
│   │   └── index.js                 # Unified asset exports
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky header with Lenis scroll offset and brand mark
│   │   ├── Sidebar.jsx              # Mobile navigation drawer with backdrop blur
│   │   ├── Switch.jsx               # Technical 3-mode theme selector (Dark / Light / System)
│   │   ├── Hero.jsx                 # Editorial hero, role specs, CTAs, and status panel
│   │   ├── About.jsx                # Professional bio and athletic leadership timeline
│   │   ├── Education.jsx            # IIT BHU B.Tech spotlight and secondary schooling
│   │   ├── Skills.jsx               # Categorized technical capabilities typography
│   │   ├── Projects.jsx             # Category filter tabs, featured and secondary showcases
│   │   ├── ProjectCard.jsx          # FeaturedProjectCard and OtherProjectCard components
│   │   ├── ProjectVisual.jsx        # Real application screenshot frames with domain labels
│   │   ├── Contact.jsx              # Direct channels, email CTA, and copy-to-clipboard
│   │   ├── Footer.jsx               # Minimal technical footer with boxed scroll-to-top
│   │   ├── Toast.jsx                # Fixed notification pill for copy and download actions
│   │   └── index.js                 # Barrel exports for components
│   ├── data/
│   │   └── index.js                 # Centralized content, achievements, skills, and projects
│   ├── LenisContext.jsx             # Lenis smooth scroll React provider and hook
│   ├── App.jsx                      # Main application layout, scrollspy, and aligned dividers
│   ├── index.css                    # Tailwind v4 setup, theme tokens, and typography
│   └── main.jsx                     # Application root entry point
├── index.html                       # HTML5 template with SEO metadata
├── vite.config.js                   # Vite configuration with React, Tailwind, and SVGR
└── package.json                     # Project manifest, dependencies, and scripts
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Niranjan05Kumar/neoneeraj.git
   cd neoneeraj
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Contact Form)**:
   The contact form uses [EmailJS](https://www.emailjs.com/) for direct browser-to-email message delivery without a backend.
   
   Copy `.env.example` to create a local `.env` file:
   ```bash
   cp .env.example .env
   ```

   Fill in your actual EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

   > **Note**: Your EmailJS template must use the variable names: `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-optimized bundle will be emitted to the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

6. **Lint code**:
   ```bash
   npm run lint
   ```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Niranjan Kumar**  
Undergraduate, Indian Institute of Technology (BHU), Varanasi  
- **Email**: [niranjankumar11082005@gmail.com](mailto:niranjankumar11082005@gmail.com)  
- **LinkedIn**: [linkedin.com/in/niranjan05kumar](https://www.linkedin.com/in/niranjan05kumar/)  
- **GitHub**: [github.com/Niranjan05Kumar](https://github.com/Niranjan05Kumar)