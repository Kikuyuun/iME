import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useEffect, useState } from 'react';
import EduardMain from '../assets/EduardMain.jpg';

const roles = [
  'Information Technology Graduate',
  'Full Stack Developer',
  'Junior Programmer',
  'Problem Solver',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll Parallax Hooks
  const { scrollY } = useScroll();
  const yGrid = useTransform(scrollY, [0, 1000], [0, 250]);
  const yOrb1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const yOrb2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const yImage = useTransform(scrollY, [0, 1000], [0, 150]);
  const yText = useTransform(scrollY, [0, 1000], [0, 50]);

  // Tilt Effect Hooks for Portrait Image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]), { damping: 20 });
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

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Grid with Parallax */}
      <motion.div 
        className="absolute inset-0 origin-top" 
        style={{ 
          y: yGrid,
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }} 
      />

      {/* Orbs with Parallax */}
      <motion.div style={{ y: yOrb1 }} className="absolute top-20 left-1/4 w-96 h-96 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full" 
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} 
        />
      </motion.div>
      
      <motion.div style={{ y: yOrb2 }} className="absolute bottom-32 right-1/4 w-96 h-96 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -40, 0], x: [0, -25, 0] }} 
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="w-full h-full rounded-full" 
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} 
        />
      </motion.div>

      <div className="max-w-5xl w-full mx-auto px-6 z-10">
        <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-12 gap-10 items-center justify-items-center text-center">
          {/* Left: Background-removed Portrait Image */}
          <motion.div 
            variants={item} 
            className="md:col-span-5 flex justify-center w-full max-w-[320px] md:max-w-none"
            style={{ perspective: 1200 }}
          >
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full rounded-3xl overflow-hidden flex items-end justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10 backdrop-blur-md cursor-pointer group"
              style={{
                y: yImage,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(255, 255, 255, 0.03) 100%)',
              }}
            >
              {/* Dynamic Glare Overlay */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50 mix-blend-overlay"
                style={{
                  background: useMotionTemplate`radial-gradient(circle 250px at ${glowX}px ${glowY}px, rgba(255,255,255,0.2), transparent)`
                }}
              />
              
              {/* Backlight orb */}
              <div className="absolute top-1/4 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl animate-pulse z-0" />
              <div className="absolute bottom-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl animate-pulse z-0" />
              <img 
                src={EduardMain} 
                alt="Eduard James Alvarez" 
                className="relative z-10 w-full h-auto block origin-bottom hover:scale-[1.05] transition-transform duration-500 ease-out" 
                style={{ transform: "translateZ(30px)" }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Info Content */}
          <motion.div style={{ y: yText }} className="md:col-span-7 flex flex-col items-center text-center w-full">
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-cyan-300" style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)' }}>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
              <span className="text-white">Eduard James</span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #38bdf8, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Alvarez
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="flex items-center gap-1 mb-5 h-8">
              <span className="text-lg md:text-xl text-slate-400 font-medium">{displayed}</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }} className="w-0.5 h-6 bg-cyan-400 rounded-full" />
            </motion.div>

            {/* Summary */}
            <motion.p variants={item} className="text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              Motivated and detail-oriented IT student eager to apply technical knowledge,
              contribute to innovative projects, and continuously grow in a dynamic work environment.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-blue-500/20 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
                View My Work
              </motion.button>
              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-xl text-sm font-semibold text-cyan-300 cursor-pointer"
                style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.3)' }}>
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-center mt-12 md:mt-6">
          <p className="text-slate-600 text-xs tracking-widest uppercase mb-2">Scroll</p>
          <svg className="w-4 h-4 mx-auto text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
