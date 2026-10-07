import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please write a message.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 w-full"
    >
      <motion.h2
        id="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-16"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        {/* Left Column matching frame 01:08 with uniform aspect ratio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200 mb-6 group">
              <img
                src="./images/contact_photographer_1791230833824.jpg"
                alt="Arthur Jones framing shot at golden hour"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
              Every great collaboration starts with a simple &ldquo;hello.&rdquo; Reach out today, and let&apos;s discuss how we can tell your story together.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Form matching frame 01:08 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 text-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been received.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-center gap-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-800 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Type your name"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-neutral-950 transition-all text-sm sm:text-base"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-800 mb-2">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Type your email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-neutral-950 transition-all text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-800 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-neutral-950 transition-all text-sm sm:text-base resize-y"
              />
            </div>

            {/* Red button: "Let's Talk" with hover/active spring */}
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-lg bg-[#FF4F38] hover:bg-[#E03F29] text-white font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4F38] cursor-pointer shadow-md disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : "Let's Talk"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
