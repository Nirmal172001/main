import { Mail, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiFramer,
  SiLottiefiles,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const packages = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Vite', icon: SiVite, color: '#A855F7' },
  { name: 'React Hook Form', icon: SiReacthookform, color: '#EC4899' },
  { name: 'Framer Motion', icon: SiFramer, color: '#FFFFFF' },
  { name: 'shadcn/ui', icon: SiShadcnui, color: '#F8FAFC' },
  { name: 'Lottie', icon: SiLottiefiles, color: '#00DDB3' },
];

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 md:px-8"
      style={{
        background: '#0d1428',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-bold text-white">NJ<span style={{ color: '#06b6d4' }}>.</span></span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-center" style={{ color: '#475569' }}>
            Designed & Built by{' '}
            <span className="font-medium" style={{ color: '#94a3b8' }}>Nirmal Jabarajan A</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {packages.map(({ name, icon: Icon, color }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 10px 30px rgba(8, 15, 30, 0.18)',
                    }}
                    aria-label={name}
                  >
                    <Icon
                      size={20}
                      style={{ color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(8,47,73,0.92))] text-slate-50"
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Nirmal172001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#64748b' }}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nirmal-jabarajan-1155b1271"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#64748b' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:nirmaljebarajan16@gmail.com"
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#64748b' }}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
