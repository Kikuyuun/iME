import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0, backgroundColor: 'rgba(5,11,21,0)', borderBottomColor: 'rgba(51,65,85,0)' }}
      animate={Object.assign(
        {
          y: 0,
          opacity: 1,
          backgroundColor: scrolled ? 'rgba(5,11,21,0.95)' : 'rgba(5,11,21,0)',
          borderBottomColor: scrolled ? 'rgba(51,65,85,0.3)' : 'rgba(51,65,85,0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'blur(0px) saturate(1)',
        },
        { WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'blur(0px) saturate(1)' }
      )}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.button onClick={() => scrollTo('home')} whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
              EJ
            </div>
            <span className="font-semibold text-white hidden sm:block">
              Eduard <span style={{ background: 'linear-gradient(135deg, #38bdf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>James</span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                onClick={() => scrollTo(item.id)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium"
                style={{ color: activeSection === item.id ? '#38bdf8' : '#94a3b8' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
            >
              Hire Me
            </motion.button>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="block h-0.5 bg-slate-400 rounded-full" style={{ width: 20 }}
                animate={{ rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0, y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0, opacity: menuOpen && i === 1 ? 0 : 1 }}
              />
            ))}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden"
        style={{ background: 'rgba(5,11,21,0.98)', borderTop: '1px solid rgba(51,65,85,0.2)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: activeSection === item.id ? '#38bdf8' : '#94a3b8', background: activeSection === item.id ? 'rgba(56,189,248,0.06)' : 'transparent' }}
            >{item.label}</button>
          ))}
          <button onClick={() => scrollTo('contact')} className="mt-2 py-3 rounded-lg text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>Hire Me</button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
