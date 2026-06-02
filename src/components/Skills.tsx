import { motion } from 'framer-motion';
import React from 'react';

// Icons Component Definitions
const Html5Icon = () => (
  <svg className="w-5 h-5 text-[#e34f26]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm17.04 5.59H5.46l.4 4.51h11.84l-.41 4.6L12 16.03l-5.29-1.33-.28-3.15h2.24l.14 1.58 2.93.74 2.94-.75.31-3.48H8.08l-.2-2.25h10.88l-.22 2.53z" />
  </svg>
);

const Css3Icon = () => (
  <svg className="w-5 h-5 text-[#1572b6]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm17.3 5.59H5.53l.36 4.09h11.96l-.42 4.7L12 15.93l-5.43-1.55-.36-4.09h2.24l.18 2.05 3.37.96 3.37-.96.37-4.18H8.21l-.2-2.25h10.88z" />
  </svg>
);

const JavaScriptIcon = () => (
  <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] rounded bg-[#f7df1e] text-black select-none shrink-0">JS</span>
);

const TypeScriptIcon = () => (
  <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] rounded bg-[#3178c6] text-white select-none shrink-0">TS</span>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 text-[#61dafb] animate-[spin_12s_linear_infinite]" viewBox="-11.5 -10.2 23 20.4">
    <circle cx="0" cy="0" r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const ResponsiveIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CSharpIcon = () => (
  <span className="w-5 h-5 flex items-center justify-center font-bold text-[9px] rounded bg-[#239120] text-white select-none shrink-0">C#</span>
);

const JavaIcon = () => (
  <svg className="w-5 h-5 text-[#e76f00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const LaravelIcon = () => (
  <svg className="w-5 h-5 text-[#ff2d20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const PostgreSqlIcon = () => (
  <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const MySqlIcon = () => (
  <svg className="w-5 h-5 text-[#00758f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v8c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 14c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

const XamppIcon = () => (
  <svg className="w-5 h-5 text-[#fb3e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
  </svg>
);

const VsCodeIcon = () => (
  <svg className="w-5 h-5 text-[#007acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const VisualStudioIcon = () => (
  <svg className="w-5 h-5 text-[#5c2d91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 17L15 7" />
    <path d="M8 7H6v10h2" />
    <path d="M16 7h2v10h-2" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-5 h-5 text-[#f05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="6" y1="9" x2="6" y2="15" />
    <path d="M9 6h4a4 4 0 0 1 4 4v5" />
  </svg>
);

const UnityIcon = () => (
  <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5" />
    <line x1="12" y1="22" x2="12" y2="12" />
    <line x1="2" y1="7.5" x2="12" y2="12" />
    <line x1="22" y1="7.5" x2="12" y2="12" />
  </svg>
);

const TroubleshootIcon = () => (
  <svg className="w-5 h-5 text-[#f43f5e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const CollaborationIcon = () => (
  <svg className="w-5 h-5 text-[#ec4899]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ProblemSolvingIcon = () => (
  <svg className="w-5 h-5 text-[#eab308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
);

interface Skill {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  color: string;
  icon: React.ReactNode;
}

interface Category {
  title: string;
  icon: string;
  accent: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: 'Web Development',
    icon: '🌐',
    accent: '#3b82f6',
    skills: [
      { name: 'HTML5', level: 'Advanced', color: '#e34f26', icon: <Html5Icon /> },
      { name: 'CSS3', level: 'Advanced', color: '#1572b6', icon: <Css3Icon /> },
      { name: 'JavaScript', level: 'Advanced', color: '#f7df1e', icon: <JavaScriptIcon /> },
      { name: 'React', level: 'Proficient', color: '#61dafb', icon: <ReactIcon /> },
      { name: 'TypeScript', level: 'Familiar', color: '#3178c6', icon: <TypeScriptIcon /> },
      { name: 'Responsive Design', level: 'Advanced', color: '#06b6d4', icon: <ResponsiveIcon /> },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    accent: '#8b5cf6',
    skills: [
      { name: 'C#', level: 'Proficient', color: '#239120', icon: <CSharpIcon /> },
      { name: 'Java', level: 'Familiar', color: '#e76f00', icon: <JavaIcon /> },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    accent: '#10b981',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', color: '#336791', icon: <PostgreSqlIcon /> },
      { name: 'MySQL', level: 'Proficient', color: '#00758f', icon: <MySqlIcon /> },
      { name: 'XAMPP', level: 'Proficient', color: '#fb3e44', icon: <XamppIcon /> },
    ],
  },
  {
    title: 'Tools & Frameworks',
    icon: '🛠️',
    accent: '#f59e0b',
    skills: [
      { name: 'VS Code', level: 'Advanced', color: '#007acc', icon: <VsCodeIcon /> },
      { name: 'Visual Studio', level: 'Proficient', color: '#5c2d91', icon: <VisualStudioIcon /> },
      { name: 'Git & GitHub', level: 'Proficient', color: '#f05032', icon: <GitIcon /> },
      { name: 'Unity 3D', level: 'Familiar', color: '#ffffff', icon: <UnityIcon /> },
      { name: 'Laravel', level: 'Familiar', color: '#ff2d20', icon: <LaravelIcon /> },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '⭐',
    accent: '#ec4899',
    skills: [
      { name: 'Troubleshooting', level: 'Advanced', color: '#f43f5e', icon: <TroubleshootIcon /> },
      { name: 'Collaboration', level: 'Advanced', color: '#ec4899', icon: <CollaborationIcon /> },
      { name: 'Problem Solving', level: 'Advanced', color: '#eab308', icon: <ProblemSolvingIcon /> },
    ],
  },
];

export const Skills = () => {
  const [activeCat, setActiveCat] = React.useState(0);
  const category = categories[activeCat];

  return (
    <section id="skills" className="pt-24 pb-4 relative overflow-hidden" style={{ background: '#050b15' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
            What I Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My{' '}
            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Skills
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            A dynamic overview of my technical stack and core competencies.
          </p>
        </motion.div>

        {/* Category Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-20">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md flex items-center gap-2 ${activeCat === i
                ? 'bg-slate-800/80 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-slate-900/40 border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Orbit Area */}
        <motion.div
          key={activeCat}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          className="relative w-full max-w-[320px] h-[320px] md:max-w-[460px] md:h-[460px] mx-auto mt-24 md:mt-32 mb-8 md:mb-12"
        >
          {/* Aesthetic Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-slate-700/30 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-8 md:inset-10 rounded-full border border-slate-800/50"
          />

          {/* Main Orbiting Container */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            {category.skills.map((skill, i) => {
              const angle = (i / category.skills.length) * 360;
              // Calculate x, y positions as percentages (radius is 50% of container)
              // We subtract 90 degrees (PI/2) so the first item starts at the top
              const angleRad = (angle * Math.PI) / 180 - Math.PI / 2;
              const x = Math.cos(angleRad) * 50;
              const y = Math.sin(angleRad) * 50;

              return (
                <div
                  key={skill.name}
                  className="absolute pointer-events-none"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="pointer-events-auto">
                    {/* Counter-rotating badge container */}
                    <motion.div
                      className="group cursor-default"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="flex items-center gap-2.5 md:gap-3 bg-slate-900/90 border border-slate-700 px-3 md:px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md whitespace-nowrap transition-all duration-300"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = skill.color + '60';
                          e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 1)'; // border-slate-700
                          e.currentTarget.style.boxShadow = '0 0 20px rgba(0,0,0,0.4)';
                        }}
                      >
                        {/* Icon */}
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-slate-800 shrink-0 border border-slate-700/50 group-hover:border-transparent transition-colors">
                          {skill.icon}
                        </div>
                        {/* Text */}
                        <div className="flex flex-col pr-1 md:pr-2">
                          <span className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-0.5"
                            style={{
                              color: skill.level === 'Advanced' ? '#38bdf8' :
                                skill.level === 'Proficient' ? '#34d399' : '#94a3b8'
                            }}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Center Category Info */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-slate-900/80 border border-slate-700 w-20 h-20 md:w-28 md:h-28 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.15)] z-10 backdrop-blur-md transition-all duration-500"
            style={{ border: `1px solid ${category.accent}40`, boxShadow: `0 0 40px ${category.accent}20` }}>
            <div className="text-2xl md:text-3xl mb-0.5">{category.icon}</div>
            <span className="text-[9px] md:text-[10px] font-bold text-center text-slate-200 px-2 leading-tight">{category.title}</span>
          </div>
        </motion.div>
      </div>

      {/* Background aesthetic effects for the orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700"
        style={{ background: `radial-gradient(circle, ${category.accent}15 0%, transparent 70%)` }} />
    </section>
  );
};
