import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLottie } from 'lottie-react';
import mailAnimation from '../assets/contact-mail.json';

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'nirmaljebarajan16@gmail.com', href: 'mailto:nirmaljebarajan16@gmail.com' },
  { icon: Phone, label: 'Phone', value: '9360087146', href: 'tel:9360087146' },
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu', href: null },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Contact() {
  const lottieOptions = {
    animationData: mailAnimation,
    loop: true,
  };
  const { View: LottieView } = useLottie(lottieOptions);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#e2e8f0',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#0a0f1e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#06b6d4' }}>
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Let's Build Something{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Together
              </span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#64748b' }}>
              I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-start mb-8">
                <div className="w-full max-w-[280px] mb-6">
                  <div className="w-full h-auto">
                    {LottieView}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-6">Contact Details</h3>
              </div>
              <div className="space-y-4 mb-8">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}
                    >
                      <Icon size={18} style={{ color: '#60a5fa' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#475569' }}>{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">Find Me Online</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Nirmal172001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nirmal-jabarajan-1155b1271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)' }}
                    >
                      <Send size={24} style={{ color: '#06b6d4' }} />
                    </div>
                    <p className="font-semibold text-white text-lg mb-1">Message Sent!</p>
                    <p className="text-sm" style={{ color: '#64748b' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-shadow duration-200"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.25)' }}
                    >
                      <Send size={17} />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
