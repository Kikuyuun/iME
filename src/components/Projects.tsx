import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

const projects = [
  {
    title: 'DocuFlow',
    subtitle: 'Document Tracking System',
    description: 'A document tracking system for departments with real-time chat capabilities. Enables efficient document flow management across the organization with live status updates and inter-department communication.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Real-time Chat'],
    icon: '📄',
    accent: '#3b82f6',
    tag: 'Web App',
    featured: true,
    highlights: ['Real-time document status tracking', 'Inter-department chat system', 'Role-based access control'],
  },
  {
    title: 'Task Tracking System',
    subtitle: 'Collaborative Platform',
    description: 'A web system for collaborating tasks with workmates featuring real-time chat for streamlined team productivity.',
    tech: ['Laravel', 'HTML', 'CSS', 'Real-time Chat'],
    icon: '✅',
    accent: '#8b5cf6',
    tag: 'Web App',
  },
  {
    title: 'Takipsilim',
    subtitle: 'Third Person Multiplayer Game',
    description: 'A third-person multiplayer game with integrated basic physics and user-friendly interface elements.',
    tech: ['Unity 3D', 'C#', 'Physics', 'Multiplayer'],
    icon: '🎮',
    accent: '#10b981',
    tag: 'Game Dev',
  },
  {
    title: 'Barangay Info System',
    subtitle: 'Government Records System',
    description: 'A complete barangay information management system for digitizing local government records and services.',
    tech: ['C#', 'Visual Studio', 'Database', 'Windows Forms'],
    icon: '🏛️',
    accent: '#f59e0b',
    tag: 'Desktop App',
  },
];

const FeaturedTiltCard = ({ featured }: { featured: typeof projects[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["3deg", "-3deg"]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-3deg", "3deg"]), { damping: 20 });
  const glowX = useSpring(mouseX, { damping: 20 });
  const glowY = useSpring(mouseY, { damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ perspective: 1200 }}
      className="mb-6 w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: 'rgba(15,23,42,0.6)', 
          border: `1px solid ${featured.accent}30`
        }}
        className="rounded-2xl relative overflow-hidden group cursor-default shadow-2xl"
      >
        {/* Dynamic Glare */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 mix-blend-screen"
          style={{
            background: useMotionTemplate`radial-gradient(circle 350px at ${glowX}px ${glowY}px, ${featured.accent}20, transparent)`
          }}
        />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl z-10" style={{ background: `linear-gradient(90deg, ${featured.accent}, #06b6d4)` }} />

        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10 z-10" style={{ background: `radial-gradient(circle at 100% 0%, ${featured.accent}, transparent 70%)` }} />

        <div className="relative p-8 md:p-10 z-20" style={{ transform: "translateZ(30px)" }}>
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left: info */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider" style={{ color: featured.accent, background: `${featured.accent}15`, border: `1px solid ${featured.accent}30` }}>
                  ★ Featured
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-md" style={{ color: '#06b6d4', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  {featured.tag}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4 mt-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${featured.accent}12`, border: `1px solid ${featured.accent}20` }}>
                  {featured.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight">{featured.title}</h3>
                  <p className="text-slate-500 text-sm">{featured.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">{featured.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300" style={{ background: `${featured.accent}10`, border: `1px solid ${featured.accent}25` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: highlights */}
            <div className="md:col-span-2">
              <div className="p-5 rounded-xl shadow-lg" style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(51,65,85,0.3)', transform: "translateZ(10px)" }}>
                <h4 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 rounded-full" style={{ background: featured.accent }} />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {featured.highlights?.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" style={{ background: `${featured.accent}15`, color: featured.accent }}>
                        {i + 1}
                      </span>
                      <span className="text-slate-400 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TiltCard = ({ p, delay }: { p: typeof projects[0]; delay: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]), { damping: 20 });
  const glowX = useSpring(mouseX, { damping: 20 });
  const glowY = useSpring(mouseY, { damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        className="p-6 rounded-xl relative overflow-hidden group cursor-default h-full flex flex-col shadow-xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: 'rgba(15,23,42,0.6)',
          border: `1px solid ${p.accent}25`,
        }}
      >
        {/* Dynamic Glare */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 mix-blend-screen"
          style={{
            background: useMotionTemplate`radial-gradient(circle 250px at ${glowX}px ${glowY}px, ${p.accent}15, transparent)`,
          }}
        />

        {/* Dynamic Border Highlight */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
          style={{
            border: useMotionTemplate`1px solid ${p.accent}60`,
            maskImage: useMotionTemplate`radial-gradient(circle 200px at ${glowX}px ${glowY}px, black, transparent)`,
            WebkitMaskImage: useMotionTemplate`radial-gradient(circle 200px at ${glowX}px ${glowY}px, black, transparent)`
          }}
        />

        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: p.accent, opacity: 0.5 }} />

        <div className="relative z-20 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
          {/* Tag */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: `${p.accent}12` }}>
              {p.icon}
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-md" style={{ color: p.accent, background: `${p.accent}10`, border: `1px solid ${p.accent}25` }}>
              {p.tag}
            </span>
          </div>

          <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
          <p className="text-slate-500 text-xs mb-3">{p.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {p.tech.map((t, ti) => (
              <span key={ti} className="px-2.5 py-1 text-xs font-medium rounded-md text-slate-400" style={{ background: `${p.accent}08`, border: `1px solid ${p.accent}20` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#070f1d' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Featured{' '}
            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Projects
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            A selection of projects I've designed and developed during my studies and OJT.
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedTiltCard featured={featured} />

        {/* Other projects — 3 equal cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((p, i) => (
            <TiltCard key={i} p={p} delay={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          More projects in the works 🚀
        </motion.p>
      </div>
    </section>
  );
};
