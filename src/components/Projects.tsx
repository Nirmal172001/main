import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { TanstackIcon, ZustandIcon } from './tech-icons';

// ── Verified icons (confirmed to exist in installed react-icons v5) ──────────
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiGit, SiGithub,
  SiFigma, SiPython, SiVite, SiAxios, SiCss,
} from 'react-icons/si';

import {
  TbBrandVscode, TbBrandAzure,
} from 'react-icons/tb';

import { FaNetworkWired, FaDatabase, FaServer } from 'react-icons/fa';
// ── Shared icon map ───────────────────────────────────────────────────────────
const ICON_MAP: Record<string, { icon: IconType; color: string }> = {
  'HTML':                  { icon: SiHtml5,        color: '#e34f26' },
  'HTML5':                 { icon: SiHtml5,        color: '#e34f26' },
  'CSS':                   { icon: SiCss,          color: '#1572b6' },
  'CSS3':                  { icon: SiCss,          color: '#1572b6' },
  'JavaScript':            { icon: SiJavascript,   color: '#f7df1e' },
  'JavaScript (ES6+)':     { icon: SiJavascript,   color: '#f7df1e' },
  'React':                 { icon: SiReact,        color: '#61dafb' },
  'React.js':              { icon: SiReact,        color: '#61dafb' },
  'Next.js':               { icon: SiNextdotjs,    color: '#ffffff' },
  'Tailwind CSS':          { icon: SiTailwindcss,  color: '#38bdf8' },
  'Redux Toolkit':         { icon: SiRedux,        color: '#764abc' },
  'Zustand':               { icon: ZustandIcon,      color: '#f97316' },
  'TanStack Query':        { icon: TanstackIcon,     color: '#ff4154' },
  'TanStack Query v5':     { icon: TanstackIcon,     color: '#ff4154' },
  'TanStack Router':       { icon: TanstackIcon,     color: '#ff4154' },
  'TanStack Start':        { icon: TanstackIcon,     color: '#ff4154' },
  'REST APIs':             { icon: FaNetworkWired, color: '#22d3ee' },
  'Axios':                 { icon: SiAxios,        color: '#5a29e4' },
  'Fetch API':             { icon: FaServer,       color: '#60a5fa' },
  'Python':                { icon: SiPython,       color: '#3776ab' },
  'YOLOv5':               { icon: SiPython,       color: '#3776ab' },
  'OpenCV':                { icon: SiPython,       color: '#5c9bd1' },
  'Git':                   { icon: SiGit,          color: '#f05032' },
  'GitHub':                { icon: SiGithub,       color: '#e2e8f0' },
  'Azure DevOps':          { icon: TbBrandAzure,   color: '#0078d4' },
  'VS Code':               { icon: TbBrandVscode,  color: '#007acc' },
  'Figma':                 { icon: SiFigma,        color: '#f24e1e' },
  'Vite':                  { icon: SiVite,         color: '#646cff' },
  'AG Grid':               { icon: FaDatabase,     color: '#3ab54a' },
};

// ── Projects data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Election Manifesto Dashboard',
    emoji: '🗳️',
    stack: ['HTML', 'JavaScript', 'Tailwind CSS', 'React', 'Vite', 'TanStack Router', 'TanStack Query'],
    description:
      'Interactive dashboard for browsing and managing election manifesto data. Features dynamic routing with TanStack Router, server-state caching via TanStack Query, and a clean responsive UI built with React and Tailwind CSS on a Vite build pipeline.',
    github: 'https://github.com/Nirmal172001',
    color: '#3b82f6',
  },
  {
    title: 'Pasarai (DMK)',
    emoji: '🌿',
    stack: ['HTML', 'Tailwind CSS', 'React', 'Next.js'],
    description:
      'Official DMK party portal built with Next.js for server-side rendering and SEO optimisation. Delivers fast page loads and a fully responsive multi-section layout using Tailwind CSS utility classes.',
    github: 'https://github.com/Nirmal172001',
    color: '#06b6d4',
  },
  {
    title: 'DMK.in',
    emoji: '🏛️',
    stack: ['HTML', 'Tailwind CSS', 'React', 'Next.js'],
    description:
      'High-traffic political party website with server-side rendering, dynamic content pages, and an accessible, mobile-first design. Built on Next.js with optimised image handling and clean component architecture.',
    github: 'https://github.com/Nirmal172001',
    color: '#8b5cf6',
  },
  {
    title: 'Unified Dashboard',
    emoji: '📊',
    stack: ['HTML', 'Tailwind CSS', 'React', 'Next.js'],
    description:
      'Centralised analytics and management dashboard aggregating data from multiple sources into a single view. Features role-based access, real-time data widgets, and a modern dark-mode UI powered by Next.js and Tailwind CSS.',
    github: 'https://github.com/Nirmal172001',
    color: '#f59e0b',
  },
  {
    title: 'Master Data Updation',
    emoji: '📋',
    stack: ['HTML', 'JavaScript', 'Tailwind CSS', 'React', 'Vite', 'AG Grid', 'TanStack Router', 'TanStack Query'],
    description:
      'Enterprise-grade data management tool featuring AG Grid for inline cell editing, bulk updates, and column filtering across large datasets. Integrates TanStack Query for efficient API synchronisation and TanStack Router for deep-linked table states.',
    github: 'https://github.com/Nirmal172001',
    color: '#10b981',
  },
  {
    title: 'Cricket Ground Management System',
    emoji: '🏏',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Full booking and scheduling system with real-time slot availability, dynamic ground management, client-side form validation, and a fully responsive layout built with CSS Grid and Flexbox for all screen sizes.',
    github: 'https://github.com/Nirmal172001',
    color: '#ec4899',
  },
  {
    title: 'Violence Detection System',
    emoji: '🔐',
    stack: ['Python', 'YOLOv5', 'OpenCV'],
    description:
      'Real-time violence detection from CCTV footage using a fine-tuned YOLOv5 model with an instant security alert pipeline. Optimised inference pipeline to run on standard CPU hardware with high test precision.',
    github: 'https://github.com/Nirmal172001',
    color: '#f43f5e',
  },
];

// ── Utility ───────────────────────────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

// ── Tech Badge with icon ──────────────────────────────────────────────────────
function TechBadge({ tech, cardColor }: { tech: string; cardColor: string }) {
  const entry = ICON_MAP[tech];
  const Icon = entry?.icon;
  const iconColor = entry?.color ?? cardColor;
  const rgb = hexToRgb(cardColor);

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
      style={{
        background: `rgba(${rgb}, 0.1)`,
        border: `1px solid rgba(${rgb}, 0.22)`,
        color: cardColor,
      }}
    >
      {Icon && <Icon size={12} style={{ color: iconColor, flexShrink: 0 }} />}
      {tech}
    </span>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(project.color);

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        borderColor: `rgba(${rgb}, 0.4)`,
        boxShadow: `0 8px 40px rgba(${rgb}, 0.14)`,
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.color}28 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{project.emoji}</span>
          <AnimatePresence>
            {hovered && (
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl flex items-center gap-1.5 text-sm font-medium"
                style={{
                  background: `rgba(${rgb}, 0.15)`,
                  border: `1px solid rgba(${rgb}, 0.3)`,
                  color: project.color,
                }}
              >
                <FaGithub size={16} />
                <ExternalLink size={14} />
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Title & description */}
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#94a3b8' }}>
          {project.description}
        </p>

        {/* Tech badges with icons */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} cardColor={project.color} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding" style={{ background: '#0a0f1e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#06b6d4' }}>
              What I've Built
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Featured{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Projects
              </span>
            </h2>
            <p className="mt-4 text-sm" style={{ color: '#64748b' }}>
              {projects.length} projects across frontend, dashboards &amp; AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
