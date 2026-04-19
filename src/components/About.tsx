import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLottie } from 'lottie-react';
import { Zap, Palette, Users } from 'lucide-react';
import type { IconType } from 'react-icons';
import devAnimation from '../assets/dev-animation.json';
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiGit, SiGithub,
  SiFigma, SiPython, SiVite, SiAxios, SiCss, SiTypescript,
} from 'react-icons/si';
import { TbBrandVscode, TbBrandAzure, TbRoute, TbStack2 } from 'react-icons/tb';
import { FaNetworkWired, FaDatabase, FaServer } from 'react-icons/fa';

// ── Custom image icons ────────────────────────────────────────────────────────
const TanstackIcon = ({ size, style }: { size?: number | string; style?: React.CSSProperties }) => (
  <img src="/tanstack.png" width={size ?? 14} height={size ?? 14} style={style} alt="TanStack" />
);
const ZustandIcon = ({ size, style }: { size?: number | string; style?: React.CSSProperties }) => (
  <img src="/zustand.png" width={size ?? 14} height={size ?? 14} style={style} alt="Zustand" />
);

// ── Full icon map ─────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, { icon: IconType; color: string }> = {
  'HTML5':                 { icon: SiHtml5,                              color: '#e34f26' },
  'CSS3':                  { icon: SiCss,                                color: '#1572b6' },
  'JavaScript (ES6+)':     { icon: SiJavascript,                         color: '#f7df1e' },
  'TypeScript':            { icon: SiTypescript,                         color: '#3178c6' },
  'React.js':              { icon: SiReact,                              color: '#61dafb' },
  'Next.js':               { icon: SiNextdotjs,                          color: '#ffffff' },
  'Tailwind CSS':          { icon: SiTailwindcss,                        color: '#38bdf8' },
  'Redux Toolkit':         { icon: SiRedux,                              color: '#764abc' },
  'Zustand':               { icon: ZustandIcon as unknown as IconType,   color: '#f97316' },
  'TanStack':              { icon: TanstackIcon as unknown as IconType,  color: '#ff4154' },
  'TanStack Query v5':     { icon: TanstackIcon as unknown as IconType,  color: '#ff4154' },
  'TanStack Router':       { icon: TanstackIcon as unknown as IconType,  color: '#ff4154' },
  'TanStack Start':        { icon: TbStack2,                             color: '#ff4154' },
  'REST APIs':             { icon: FaNetworkWired,                       color: '#22d3ee' },
  'Axios':                 { icon: SiAxios,                              color: '#5a29e4' },
  'Fetch API':             { icon: FaServer,                             color: '#60a5fa' },
  'Python':                { icon: SiPython,                             color: '#3776ab' },
  'Git':                   { icon: SiGit,                                color: '#f05032' },
  'GitHub':                { icon: SiGithub,                             color: '#e2e8f0' },
  'Azure DevOps':          { icon: TbBrandAzure,                         color: '#0078d4' },
  'VS Code':               { icon: TbBrandVscode,                        color: '#007acc' },
  'Figma':                 { icon: SiFigma,                              color: '#f24e1e' },
  'Vite':                  { icon: SiVite,                               color: '#646cff' },
  'AG Grid':               { icon: FaDatabase,                           color: '#3ab54a' },
  'TanStack Query':        { icon: TanstackIcon as unknown as IconType,  color: '#ff4154' },
  'Responsive Web Design': { icon: SiCss,                                color: '#1572b6' },
  'UI/UX Principles':      { icon: SiFigma,                              color: '#f24e1e' },
  'TbRoute':               { icon: TbRoute,                              color: '#ff4154' },
};

// ── About skill tags ──────────────────────────────────────────────────────────
const aboutSkills = ['React.js', 'Next.js', 'TanStack', 'Tailwind CSS', 'TypeScript'];

// ── Traits ────────────────────────────────────────────────────────────────────
const traits = [
  { icon: Zap,     label: 'Performance-Focused', desc: 'Building fast, optimized experiences that scale' },
  { icon: Palette, label: 'Design-Minded',        desc: 'Translating pixel-perfect Figma designs to production code' },
  { icon: Users,   label: 'Agile Team Player',    desc: 'Thriving in sprint-based collaborative workflows' },
];

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

// ── Skill Tag with icon ────────────────────────────────────────────────────────
function SkillTag({ tag }: { tag: string }) {
  const entry = ICON_MAP[tag];
  const Icon = entry?.icon;
  const iconColor = entry?.color ?? '#93c5fd';

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
      style={{
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        color: '#93c5fd',
      }}
    >
      {Icon && <Icon size={14} style={{ color: iconColor, flexShrink: 0 }} />}
      {tag}
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { View: LottieView } = useLottie({
    animationData: devAnimation,
    loop: true,
    style: {
      width: '100%',
      height: '100%',
    },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  });

  return (
    <section id="about" className="section-padding" style={{ background: '#0d1428' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#06b6d4' }}>
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Crafting digital experiences<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                with purpose &amp; precision
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="w-full h-full shrink-0">
                <div className="w-full h-full">
                  {LottieView}
                </div>
              </div>
            </motion.div>

            {/* Bio + skill tags */}
            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                I'm a <span className="text-white font-semibold">Junior Frontend Developer</span> based in{' '}
                <span className="font-semibold" style={{ color: '#22d3ee' }}>Chennai, Tamil Nadu</span>, with hands-on experience building
                production-grade web applications using{' '}
                <span className="text-white font-semibold">React.js, Next.js,</span> and the{' '}
                <span className="text-white font-semibold">TanStack ecosystem</span>.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
                I'm passionate about <span className="text-white font-semibold">clean code, intuitive UI,</span> and shipping
                features that make a real difference. I hold an MCA from St. Xavier's College and thrive in
                agile team environments.
              </p>

              {/* Skill tags with icons */}
              <div className="flex flex-wrap gap-3">
                {aboutSkills.map((tag) => (
                  <SkillTag key={tag} tag={tag} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trait cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {traits.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="glass-card-hover p-6 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.15))', border: '1px solid rgba(59, 130, 246, 0.2)' }}
                >
                  <Icon size={22} style={{ color: '#22d3ee' }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{label}</h3>
                <p className="text-sm" style={{ color: '#64748b' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
