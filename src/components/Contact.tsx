import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLottie } from 'lottie-react';
import mailAnimation from '../assets/contact-mail.json';
import { useForm } from 'react-hook-form';

// ─── Types ────────────────────────────────────────────────────────────────────
type FormData = {
  name: string;
  email: string;
  message: string;
};

// ─── Static data (untouched) ──────────────────────────────────────────────────
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

// ─── Validation rules ─────────────────────────────────────────────────────────
const VALIDATION = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
    maxLength: { value: 60, message: 'Name must be under 60 characters' },
    pattern: { value: /^[a-zA-Z\s'-]+$/, message: 'Name can only contain letters, spaces, hyphens or apostrophes' },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
      message: 'Please enter a valid email address',
    },
  },
  message: {
    required: 'Message is required',
    minLength: { value: 20, message: 'Message must be at least 20 characters' },
    maxLength: { value: 1000, message: 'Message must be under 1000 characters' },
  },
};

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function FieldStatus({ error, isValid, value }: { error?: string; isValid: boolean; value: string }) {
  if (!value) return null;
  if (error) {
    return (
      <motion.p
        key="error"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5 mt-1.5 text-xs font-medium"
        style={{ color: '#f87171' }}
      >
        <AlertCircle size={12} />
        {error}
      </motion.p>
    );
  }
  if (isValid) {
    return (
      <motion.p
        key="ok"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5 mt-1.5 text-xs font-medium"
        style={{ color: '#34d399' }}
      >
        <CheckCircle2 size={12} />
        Looks good!
      </motion.p>
    );
  }
  return null;
}

// ─── Shared input style builder ───────────────────────────────────────────────
function getInputStyle(hasError: boolean, isValid: boolean): React.CSSProperties {
  const borderColor = hasError
    ? 'rgba(248, 113, 113, 0.6)'
    : isValid
    ? 'rgba(52, 211, 153, 0.5)'
    : 'rgba(255, 255, 255, 0.1)';

  const boxShadow = hasError
    ? '0 0 0 3px rgba(248, 113, 113, 0.08)'
    : isValid
    ? '0 0 0 3px rgba(52, 211, 153, 0.08)'
    : 'none';

  return {
    background: 'rgba(255, 255, 255, 0.04)',
    border: `1px solid ${borderColor}`,
    color: '#e2e8f0',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
    fontFamily: 'inherit',
    boxShadow,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const lottieOptions = { animationData: mailAnimation, loop: true };
  const { View: LottieView } = useLottie(lottieOptions);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful, isSubmitting, dirtyFields, touchedFields },
  } = useForm<FormData>({ mode: 'onChange' });

  const watchedMessage = watch('message', '');
  const watchedName    = watch('name', '');
  const watchedEmail   = watch('email', '');

  const onSubmit = async (_data: FormData) => {
    // Replace with your real submission logic (e.g. EmailJS, Formspree, API call)
    await new Promise((r) => setTimeout(r, 800)); // simulated async delay
    setTimeout(() => reset(), 4000);
  };

  const fieldIsValid = (field: keyof FormData, value: string): boolean =>
    !!(value && !errors[field] && (dirtyFields[field] || touchedFields[field]));

  const focusStyles = `.rhf-input:focus { border-color: rgba(59,130,246,0.5) !important; box-shadow: 0 0 0 3px rgba(59,130,246,0.1) !important; }`;

  return (
    <section id="contact" className="section-padding" style={{ background: '#0a0f1e' }}>
      <style>{focusStyles}</style>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* ── Header (untouched) ── */}
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
            {/* ── Left column (untouched) ── */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-start mb-8">
                <div className="w-full max-w-[280px] mb-6">
                  <div className="w-full h-auto">{LottieView}</div>
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
                        <a href={href} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200">{value}</a>
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
                  <FaGithub size={20} />GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nirmal-jabarajan-1155b1271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}
                >
                  <FaLinkedin size={20} />LinkedIn
                </a>
              </div>
            </motion.div>

            {/* ── Right column — enhanced form ── */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

                {isSubmitSuccessful ? (
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
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

                    {/* ── Name ── */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium" style={{ color: '#94a3b8' }}>Name</label>
                        {watchedName.length > 0 && (
                          <span className="text-xs" style={{ color: '#475569' }}>
                            {watchedName.length}/60
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        className="rhf-input" style={getInputStyle(!!errors.name, fieldIsValid('name', watchedName))}
                        {...register('name', VALIDATION.name)}
                      />
                      <FieldStatus
                        error={errors.name?.message}
                        isValid={fieldIsValid('name', watchedName)}
                        value={watchedName}
                      />
                    </div>

                    {/* ── Email ── */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        className="rhf-input" style={getInputStyle(!!errors.email, fieldIsValid('email', watchedEmail))}
                        {...register('email', VALIDATION.email)}
                      />
                      <FieldStatus
                        error={errors.email?.message}
                        isValid={fieldIsValid('email', watchedEmail)}
                        value={watchedEmail}
                      />
                    </div>

                    {/* ── Message ── */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium" style={{ color: '#94a3b8' }}>Message</label>
                        <span
                          className="text-xs tabular-nums"
                          style={{ color: watchedMessage.length > 950 ? '#f87171' : '#475569' }}
                        >
                          {watchedMessage.length}/1000
                        </span>
                      </div>
                      <textarea
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className="rhf-input" style={{ ...getInputStyle(!!errors.message, fieldIsValid('message', watchedMessage)), resize: 'none' }}
                        {...register('message', VALIDATION.message)}
                      />
                      {/* Progress bar for message length */}
                      <div className="mt-1.5 h-0.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          animate={{
                            width: `${Math.min((watchedMessage.length / 1000) * 100, 100)}%`,
                            background: watchedMessage.length > 950
                              ? '#f87171'
                              : watchedMessage.length >= 20
                              ? '#34d399'
                              : '#3b82f6',
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <FieldStatus
                        error={errors.message?.message}
                        isValid={fieldIsValid('message', watchedMessage)}
                        value={watchedMessage}
                      />
                    </div>

                    {/* ── Submit ── */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? {} : { scale: 1.02 }}
                      whileTap={isSubmitting ? {} : { scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
                      style={{
                        background: isSubmitting
                          ? 'rgba(59,130,246,0.4)'
                          : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(59, 130, 246, 0.25)',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Send Message
                        </>
                      )}
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