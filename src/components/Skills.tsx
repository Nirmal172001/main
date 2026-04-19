import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { IconType } from 'react-icons';

// ── Verified imports (all confirmed to exist in installed react-icons v5) ──
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiGit, SiGithub,
  SiFigma, SiPython, SiVite, SiAxios, SiCss, SiReactquery,
} from 'react-icons/si';

import {
  TbBrandVscode, TbBrandAzure, TbRoute, TbStack2,
} from 'react-icons/tb';

import { FaNetworkWired, FaDatabase, FaServer } from 'react-icons/fa';
const ZustandIcon = ({ size, style }: { size?: number | string; style?: React.CSSProperties }) => (
  <img
    src="/zustand.png"
    width={size ?? 12}
    height={size ?? 12}
    style={style}
    alt="Zustand"
  />
);
const TanstackIcon = ({ size, style }: { size?: number | string; style?: React.CSSProperties }) => (
  <img
    src="/tanstack.png"
    width={size ?? 12}
    height={size ?? 12}
    style={style}
    alt="Tanstack"
  />
);
// ── Icon map (only confirmed-existing icons) ────────────────────────────────
const ICON_MAP: Record<string, { icon: IconType; color: string }> = {
  'HTML5':                 { icon: SiHtml5,         color: '#e34f26' },
  'CSS3':                  { icon: SiCss,           color: '#1572b6' },
  'JavaScript (ES6+)':     { icon: SiJavascript,    color: '#f7df1e' },
  'React.js':              { icon: SiReact,         color: '#61dafb' },
  'Next.js':               { icon: SiNextdotjs,     color: '#ffffff' },
  'Tailwind CSS':          { icon: SiTailwindcss,   color: '#38bdf8' },
  'Redux Toolkit':         { icon: SiRedux,         color: '#764abc' },
  'Zustand': { icon: ZustandIcon as unknown as IconType, color: '#f97316' },
  'TanStack Query v5':     { icon: TanstackIcon as unknown as IconType,    color: '#ff4154' },
  'TanStack Router':       { icon: TanstackIcon as unknown as IconType,         color: '#ff4154' },
  'TanStack Start':        { icon: TanstackIcon as unknown as IconType,        color: '#ff4154' },
  'REST APIs':             { icon: FaNetworkWired,  color: '#22d3ee' },
  'Axios':                 { icon: SiAxios,         color: '#5a29e4' },
  'Fetch API':             { icon: FaServer,        color: '#60a5fa' },
  'Python':                { icon: SiPython,        color: '#3776ab' },
  'Git':                   { icon: SiGit,           color: '#f05032' },
  'GitHub':                { icon: SiGithub,        color: '#e2e8f0' },
  'Azure DevOps':          { icon: TbBrandAzure,    color: '#0078d4' },
  'VS Code':               { icon: TbBrandVscode,   color: '#007acc' },
  'Figma':                 { icon: SiFigma,         color: '#f24e1e' },
  'Responsive Web Design': { icon: SiCss,           color: '#1572b6' },
  'UI/UX Principles':      { icon: SiFigma,         color: '#f24e1e' },
  'Vite':                  { icon: SiVite,          color: '#646cff' },
  'AG Grid':               { icon: FaDatabase,      color: '#3ab54a' },
};

// ── Skill groups ─────────────────────────────────────────────────────────────
const skillGroups = [
  {
    category: 'Frontend',
    color: '#3b82f6',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'State Management',
    color: '#06b6d4',
    skills: ['Redux Toolkit', 'Zustand'],
  },
  {
    category: 'TanStack',
    color: '#ff4154',
    skills: ['TanStack Query v5', 'TanStack Router', 'TanStack Start'],
  },
  {
    category: 'API & Backend',
    color: '#60a5fa',
    skills: ['REST APIs', 'Axios', 'Fetch API', 'Python'],
  },
  {
    category: 'Tools & DevOps',
    color: '#8b5cf6',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'VS Code', 'Vite'],
  },
  {
    category: 'Design & Data',
    color: '#f59e0b',
    skills: ['Figma', 'Responsive Web Design', 'UI/UX Principles', 'AG Grid'],
  },
];

// ── Utility ───────────────────────────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '59, 130, 246';
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ── Skill Badge ───────────────────────────────────────────────────────────────
function SkillBadge({ skill, groupColor }: { skill: string; groupColor: string }) {
  const entry = ICON_MAP[skill];
  const Icon = entry?.icon;
  const iconColor = entry?.color ?? groupColor;
  const rgb = hexToRgb(groupColor);

  return (
    <motion.span
      whileHover={{ scale: 1.07 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
      style={{
        background: `rgba(${rgb}, 0.08)`,
        border: `1px solid rgba(${rgb}, 0.2)`,
        color: groupColor,
        cursor: 'default',
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px rgba(${rgb}, 0.3)`;
        (e.currentTarget as HTMLElement).style.background = `rgba(${rgb}, 0.16)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.background = `rgba(${rgb}, 0.08)`;
      }}
    >
      {Icon && <Icon size={14} style={{ color: iconColor, flexShrink: 0 }} />}
      {skill}
    </motion.span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding" style={{ background: '#0a0f1e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#06b6d4' }}>
              What I Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Tech Stack &{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Tools
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-6 rounded-full"
                    style={{ background: `linear-gradient(180deg, ${group.color}, transparent)` }}
                  />
                  <h3 className="font-semibold text-white text-sm">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} groupColor={group.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
