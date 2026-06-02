import { motion } from 'framer-motion';
import { useState } from 'react';

const methods = [
  { icon: '📧', title: 'Email', value: 'alvarez.eduardjamesofficial@gmail.com', link: 'mailto:alvarez.eduardjamesofficial@gmail.com', accent: '#3b82f6' },
  { icon: '📞', title: 'Phone', value: '0926-833-3465', link: 'tel:09268333465', accent: '#10b981' },
  { icon: '📍', title: 'Location', value: 'Lumbo, Valencia City, Bukidnon', link: '#', accent: '#8b5cf6' },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a4931b12-bc5f-4949-96ab-840f43c4dcfc",
          subject: "New Contact Message from Portfolio",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 3000);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    background: focused === name ? 'rgba(59,130,246,0.06)' : 'rgba(15,23,42,0.8)',
    border: `1px solid ${focused === name ? 'rgba(6,182,212,0.5)' : 'rgba(51,65,85,0.5)'}`,
    transition: 'all 0.2s',
  });

  return (
    <section id="contact" className="pt-12 pb-24 relative overflow-hidden" style={{ background: '#050b15' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3 block">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span style={{ background: 'linear-gradient(135deg, #38bdf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">Open to opportunities, collaborations, and new projects.</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          {methods.map((m, i) => (
            <motion.a key={i} href={m.link}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl text-center relative overflow-hidden"
              style={{ background: 'rgba(15,23,42,0.6)', border: `1px solid ${m.accent}30` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: m.accent, opacity: 0.6 }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: `${m.accent}15` }}>{m.icon}</div>
              <div>
                <div className="text-white text-sm font-semibold">{m.title}</div>
                <div className="text-xs mt-1 break-all" style={{ color: m.accent }}>{m.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}
          className="max-w-xl mx-auto rounded-xl overflow-hidden"
          style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(51,65,85,0.5)' }}
        >
          {/* Terminal bar */}
          <div className="px-6 pt-5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-slate-600 text-xs">message.tsx</span>
            </div>
            <div className="h-px bg-slate-700/40 mt-4" />
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-500 mb-1.5">Name</label>
                <input type="text" id="contact-name" name="name" value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  required className="w-full px-4 py-3 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none"
                  style={inputStyle('name')} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                <input type="email" id="contact-email" name="email" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  required className="w-full px-4 py-3 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none"
                  style={inputStyle('email')} placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-500 mb-1.5">Message</label>
              <textarea id="contact-message" name="message" value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                required rows={4} className="w-full px-4 py-3 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none resize-none"
                style={inputStyle('message')} placeholder="Tell me about your project..." />
            </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', opacity: isSubmitting ? 0.7 : 1 }}>
              {sent ? '✓ Sent!' : isSubmitting ? 'Sending...' : 'Send Message →'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
