import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Frontend Developer',
    type: 'Full-Time',
    company: 'Populus Empowerment Network',
    duration: 'Jul 2025 – Apr 2026',
    current: true,
    points: [
      'Promoted to full-time role, taking increased ownership of feature development across production applications.',
      'Led frontend implementation of new UI modules in React.js and Next.js, collaborating with product and design teams.',
      'Adopted TanStack Query (v5) for server-state management, replacing manual fetch logic and reducing boilerplate.',
      'Implemented type-safe client-side routing using TanStack Router across multi-page application flows.',
      'Managed complex application state using Redux Toolkit and Zustand, improving maintainability and performance.',
      'Conducted code reviews for interns and contributed to internal documentation to streamline team onboarding.',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    type: 'Internship',
    company: 'Populus Empowerment Network',
    duration: 'Jan 2025 – Jun 2025',
    current: false,
    points: [
      'Built and maintained web application features using React.js and Next.js, contributing to production code reviewed by senior engineers.',
      'Developed reusable, responsive UI components with Tailwind CSS, reducing styling inconsistencies across the codebase.',
      'Integrated REST APIs using Axios and Fetch API to connect frontend views with backend services.',
      'Collaborated with the design team on UI/UX improvements, translating Figma mockups into pixel-perfect components.',
      'Used Git and Azure DevOps for version control, code reviews, and sprint tracking in an agile workflow.',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const} },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding" style={{ background: '#0d1428' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#06b6d4' }}>
              Work History
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Professional{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Experience
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, #3b82f6, #06b6d4, transparent)' }}
            />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pl-16">
                  <div
                    className="absolute left-3.5 top-5 w-5 h-5 rounded-full flex items-center justify-center -translate-x-1/2"
                    style={{
                      background: exp.current ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : '#1e293b',
                      border: `2px solid ${exp.current ? '#06b6d4' : '#334155'}`,
                      boxShadow: exp.current ? '0 0 16px rgba(6, 182, 212, 0.4)' : 'none',
                    }}
                  >
                    {exp.current && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#fff' }}
                      />
                    )}
                  </div>

                  <div className="glass-card-hover p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: exp.current ? 'rgba(6, 182, 212, 0.15)' : 'rgba(100, 116, 139, 0.15)',
                              color: exp.current ? '#22d3ee' : '#94a3b8',
                              border: `1px solid ${exp.current ? 'rgba(6, 182, 212, 0.3)' : 'rgba(100, 116, 139, 0.2)'}`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#60a5fa' }}>
                          <Briefcase size={14} />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span
                        className="text-sm font-medium px-3 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
                          <span className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
