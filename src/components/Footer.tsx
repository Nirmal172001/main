import {  Mail, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

        <p className="text-sm text-center" style={{ color: '#475569' }}>
          Designed & Built by{' '}
          <span className="font-medium" style={{ color: '#94a3b8' }}>Nirmal Jabarajan A</span>
        </p>

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
