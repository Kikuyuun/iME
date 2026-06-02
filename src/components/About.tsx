import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import resumePDF from '../assets/Resume ATS Alvarez .pdf';

const education = [
  { level: 'College', school: 'IBA College of Mindanao Inc.', years: '2022 – 2026', degree: 'BS Information Technology', icon: '🎓' },
  { level: 'High School', school: 'Infant Jesus School of Bukidnon', years: '2011 – 2015', degree: 'Senior High School', icon: '🏫' },
];

const stats = [
  { value: '486+', label: 'OJT Hours', desc: 'City Gov. of Valencia' },
  { value: 'Jr. Dev', label: 'OJT Role', desc: 'ITSD Division' },
  { value: '2026', label: 'Graduated', desc: 'BSIT Degree' },
];

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const cardHover = {
    y: -5,
    scale: 1.01,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden bg-[#050b15]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Who I Am
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
            </h2>
            <motion.a
              href={resumePDF}
              download="Eduard_James_Alvarez_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-blue-500/20 cursor-pointer select-none"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={cardHover}
                className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-slate-700/50 to-slate-800/20 overflow-hidden cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full py-8 px-6 rounded-2xl bg-[#0a1122]/90 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300">
                    {s.value}
                  </div>
                  <div className="text-white text-sm font-semibold tracking-wide uppercase mb-1">{s.label}</div>
                  <div className="text-slate-400 text-xs">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid — 2 columns: left (merged card + education), right (experience full height) */}
          <div className="grid lg:grid-cols-2 gap-6 w-full">

            {/* Left Column */}
            <div className="flex flex-col gap-6">

              {/* Merged Summary & Career Goals Card */}
              <motion.div variants={itemVariants} whileHover={cardHover} className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-slate-700/30 to-cyan-500/20 shadow-lg cursor-default">
                <div className="h-full p-8 rounded-2xl bg-[#0a1122]/90 backdrop-blur-sm border border-white/5">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">About &amp; Goals</h3>
                  </div>

                  {/* Summary Block */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Summary</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[15px]">
                      Motivated and detail-oriented Information Technology student seeking an opportunity
                      to apply technical knowledge and gain hands-on experience in the IT industry. Eager
                      to contribute to innovative projects, collaborate with teams, and continuously
                      develop professional and technical skills in a dynamic work environment.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent my-6" />

                  {/* Career Goals Block */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-blue-400" />
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Career Goals</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[15px]">
                      To enhance my skills in the IT field through real-world experience, continuous
                      learning, and collaboration, with the goal of becoming a competent and versatile IT
                      professional capable of solving complex problems and delivering efficient solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div variants={itemVariants} whileHover={cardHover} className="p-[1px] rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/20 shadow-lg flex-grow cursor-default">
                <div className="h-full p-8 rounded-2xl bg-[#0a1122]/90 backdrop-blur-sm border border-white/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Education</h3>
                  </div>
                  <div className="relative border-l-2 border-slate-700/50 ml-4 space-y-8 pb-2">
                    {education.map((edu, i) => (
                      <div key={i} className="relative pl-8">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a1122] border-2 border-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.4)]" />
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{edu.level}</span>
                          <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-semibold shadow-sm">{edu.years}</span>
                        </div>
                        <div className="text-white text-lg font-semibold mb-1">{edu.school}</div>
                        <div className="text-slate-400 text-[15px]">{edu.degree}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column — Experience spans full height */}
            <div className="flex flex-col">
              <motion.div variants={itemVariants} whileHover={cardHover} className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden cursor-default flex-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="h-full p-8 rounded-2xl bg-[#0a1122]/90 backdrop-blur-sm border border-white/5 relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Experience</h3>
                  </div>

                  {/* Experience Timeline */}
                  <div className="relative border-l-2 border-slate-700/50 ml-3 space-y-10">
                    {/* OJT Entry */}
                    <div className="relative pl-7">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a1122] border-2 border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-base font-bold text-white">Junior Programmer (OJT)</h4>
                        <span className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider self-start shrink-0">486 Hours</span>
                      </div>
                      <div className="text-blue-400 text-sm font-medium mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        City Government of Valencia – ITSD
                      </div>
                      <p className="text-slate-400 text-[14px] leading-relaxed">
                        Gained practical experience in software development, system maintenance,
                        coding, debugging, and testing within a professional government environment.
                      </p>
                    </div>

                    {/* CSS NC2 Co-Trainer Entry */}
                    <div className="relative pl-7">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a1122] border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-base font-bold text-white">CSS NC2 Co-Trainer</h4>
                        <span className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider self-start shrink-0">Jan – Feb 2026</span>
                      </div>
                      <div className="text-cyan-400 text-sm font-medium mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Senior High School Training Program
                      </div>
                      <p className="text-slate-400 text-[14px] leading-relaxed">
                        Trained senior high school students in preparation for the Computer System
                        Servicing (CSS) NC2 examination, covering hardware servicing, network setup,
                        and system configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
