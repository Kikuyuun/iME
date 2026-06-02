import { useEffect, useRef, useState } from 'react';

const icons = [
  // Code
  <path key="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  // Database
  <path key="2" d="M4 8c0 2.21 3.582 4 8 4s8-1.79 8-4M4 8c0-2.21 3.582-4 8-4s8 1.79 8 4m-16 0v8c0 2.21 3.582 4 8 4s8-1.79 8-4V8M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4" stroke="currentColor" strokeWidth="2" fill="none"/>,
  // Terminal
  <path key="3" d="M4 17l6-6-6-6m8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  // Server
  <g key="4" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M6 16h.01" strokeWidth="3" strokeLinecap="round"/><path d="M2 12h20"/></g>,
  // Cloud
  <path key="5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="currentColor" strokeWidth="2" fill="none"/>,
  // Gear
  <g key="6" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></g>,
  // Hash
  <path key="7" d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
  // Curly Braces
  <path key="8" d="M7 4C4 4 4 7 4 7s0 3-3 3c3 0 3 3 3 3s0 3 3 3M17 4c3 0 3 3 3 3s0 3 3 3c-3 0-3 3-3 3s0 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
];

export const MouseIconGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const updateSize = () => {
      const spacing = 55; // Distance between icons
      const cols = Math.ceil(window.innerWidth / spacing);
      const rows = Math.ceil(window.innerHeight / spacing);
      setGridSize({ cols, rows });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        // Fast coordinate calc based on index, avoiding getBoundingClientRect
        const spacing = 55;
        const x = (i % gridSize.cols) * spacing + 25;
        const y = Math.floor(i / gridSize.cols) * spacing + 25;
        
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate angle to point at mouse
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Scale up slightly and become fully opaque when mouse is near
        const scale = distance < 150 ? 1 + (150 - distance) / 300 : 1;
        const opacity = distance < 250 ? Math.max(0.15, 1 - distance / 250) : 0.05;
        
        item.style.transform = `translate3d(0,0,0) rotate(${angle}deg) scale(${scale})`;
        item.style.opacity = opacity.toString();
        
        // Colorful gradient effect based on coordinates (like antigravity landing page)
        if (distance < 250) {
           item.style.color = `hsl(${(x / window.innerWidth) * 360}, 80%, 60%)`;
        } else {
           item.style.color = '#38bdf8'; // Default cyan
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize]);

  const totalIcons = gridSize.cols * gridSize.rows;
  if (totalIcons === 0) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: '#050b15' }}>
      {Array.from({ length: totalIcons }).map((_, i) => {
        const IconPath = icons[i % icons.length];
        return (
          <div
            key={i}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="absolute transition-none opacity-0"
            style={{
              left: `${(i % gridSize.cols) * 55 + 25}px`,
              top: `${Math.floor(i / gridSize.cols) * 55 + 25}px`,
              width: '16px',
              height: '16px',
              marginLeft: '-8px',
              marginTop: '-8px',
              willChange: 'transform, opacity',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg">
              {IconPath}
            </svg>
          </div>
        );
      })}
    </div>
  );
};
