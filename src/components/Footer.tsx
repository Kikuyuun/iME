import { motion } from 'framer-motion';

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative" style={{ background: '#040912', borderTop: '1px solid rgba(51,65,85,0.3)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(56,189,248,0.3) 50%, transparent 90%)' }} />

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>EJ</div>
              <span className="text-white font-semibold">Eduard James</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">Fresh IT Graduate · Junior Programmer · Full Stack Developer. Based in Valencia City, Bukidnon.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-400 font-semibold text-xs uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((l) => (
                <li key={l}>
                  <motion.button whileHover={{ x: 4 }} onClick={() => scrollTo(l.toLowerCase())}
                    className="text-slate-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-200" />{l}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-400 font-semibold text-xs uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: '📧', text: 'alvarez.eduardjamesofficial@gmail.com', href: 'mailto:alvarez.eduardjamesofficial@gmail.com' },
                { icon: '📞', text: '0926-833-3465', href: 'tel:09268333465' },
                { icon: '📍', text: 'Lumbo, Valencia City, Bukidnon' },
              ].map((c, i) => (
                <a key={i} href={c.href || '#'} className="flex items-start gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                  <span className="shrink-0 mt-0.5">{c.icon}</span>
                  <span className="break-all">{c.text}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {[
                { label: 'LI', href: 'https://www.linkedin.com/in/eduard-james-alvarez-374349402/', title: 'LinkedIn' },
                { label: 'FB', href: 'https://www.facebook.com/badong.alvarez.21', title: 'Facebook' },
              ].map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors"
                  style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(51,65,85,0.4)' }}>{s.label}</motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs">© {year} Eduard James Alvarez. All rights reserved.</p>
          <p className="text-slate-700 text-xs">React · TypeScript · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};
