import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Présentation', path: '/presentation' },
    { name: 'Produits', path: '/produits' },
    { name: 'Installation', path: '/installation' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light">
      {/* Scroll Progress Bar (Conduit Effect) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50"
        style={{ scaleX }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50"></div>
      </motion.div>

      {/* Navbar */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-premium py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <span className="text-white font-heading font-bold text-xl relative z-10">Ω</span>
              </div>
              <span className={cn(
                "font-heading font-bold text-2xl tracking-tight text-dark"
              )}>
                OMEGAP<span className="text-primary">-DZ</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary relative py-2',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-slate-600'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-none font-medium transition-colors flex items-center gap-2"
              >
                Contact
                <ChevronRight className="w-4 h-4" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu className="text-dark" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'block px-3 py-3 text-base font-medium rounded-md',
                    location.pathname === link.path
                      ? 'text-primary bg-slate-50'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-3 text-base font-medium text-primary hover:bg-slate-50 rounded-md"
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-darker text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-heading font-bold">Ω</span>
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  OMEGAP<span className="text-primary">-DZ</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Leader algérien dans la fabrication de conduits électriques et solutions de câblage industriel premium. L'ingénierie de précision au service de vos installations.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-heading font-bold mb-6">Navigation</h3>
              <ul className="space-y-3 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-bold mb-6">Produits</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/produits" className="hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" />
                    Gaine ICTA 3422
                  </Link>
                </li>
                <li>
                  <Link to="/produits" className="hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" />
                    Conduit Fendu
                  </Link>
                </li>
                <li>
                  <Link to="/produits" className="hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" />
                    Accessoires & Raccords
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-heading font-bold mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Zone Industrielle, Rouiba<br />Alger, Algérie</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+213 (0) 21 00 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>contact@omegap-dz.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p>© {new Date().getFullYear()} OMEGAP-DZ. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
