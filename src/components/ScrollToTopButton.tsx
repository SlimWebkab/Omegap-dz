import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show button after 320px scroll
      setIsVisible(scrollTop > 320);

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 print:hidden"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Retourner en haut de la page"
            title="Haut de page"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B132B]/95 text-white backdrop-blur-md border border-[#00B4D8]/40 shadow-[0_10px_25px_rgba(11,19,43,0.35)] hover:border-[#00B4D8] hover:bg-[#1C2541] hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:ring-offset-2 active:scale-95"
          >
            {/* SVG Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-slate-700/40"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-[#00B4D8] transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Arrow Icon with subtle hover elevation */}
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4D8] group-hover:text-white group-hover:-translate-y-1 transition-transform duration-200 relative z-10" />

            {/* Industrial Tooltip (Visible on hover on desktop) */}
            <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide text-white bg-[#0B132B] border border-slate-700 rounded shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
              Haut de page ({Math.round(scrollProgress)}%)
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
