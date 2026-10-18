import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Download, ShieldCheck, Factory } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
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
    { name: 'Blog Technique', path: '/blog' },
    { name: 'FAQ Technique', path: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#00B4D8] selection:text-white">
      {/* Scroll Progress Bar (Effet Conduit Électrique Annelé) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#00B4D8] origin-left z-50 shadow-[0_0_10px_rgba(0,180,216,0.6)]"
        style={{ scaleX }}
      />

      {/* Top Banner B2B de réassurance normative */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <Factory className="w-3.5 h-3.5 text-[#00B4D8]" />
              Usine de fabrication : Aït Toudert, Ouacif, W. Tizi-Ouzou
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
              Conformité ICTA 3422 · Écrasement 750N · IANOR
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-medium">Expédition 58 Wilayas sous 24/48h</span>
            <a href="tel:+213550820000" className="text-[#00B4D8] hover:underline flex items-center gap-1">
              <Phone className="w-3 h-3" /> Direction commerciale : +213 (0) 550 82 00 00
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Principale (Top Bar Contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(15,28,44,0.06)] py-3 border-b border-slate-200/80'
            : 'bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 bg-[#0B132B] flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 border border-[#00B4D8]/40 transform rotate-45"></div>
                <span className="text-[#00B4D8] font-heading font-extrabold text-2xl relative z-10">Ω</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#0F172A] leading-none">
                  OMEGAP<span className="text-[#00B4D8]">-DZ</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-0.5">
                  Conduits & Gaines Électriques
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-tight transition-colors hover:text-[#00B4D8] whitespace-nowrap shrink-0 relative py-1 ${
                    location.pathname === link.path
                      ? 'text-[#00B4D8]'
                      : 'text-slate-700'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B4D8]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Zone 3: Single Primary Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="bg-[#0B132B] hover:bg-[#1C2541] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm border border-slate-800 whitespace-nowrap shrink-0 group"
              >
                <span>Devis Usine Rapide</span>
                <ChevronRight className="w-4 h-4 text-[#00B4D8] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center text-slate-900 hover:text-[#00B4D8] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2.5 text-base font-semibold rounded ${
                    location.pathname === link.path
                      ? 'text-[#00B4D8] bg-slate-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-[#0B132B] text-white py-3 font-bold text-sm tracking-wide uppercase"
                >
                  Demander un Devis Usine
                </Link>
                <a
                  href="tel:+213550820000"
                  className="block w-full text-center bg-slate-100 text-slate-800 py-3 font-semibold text-sm"
                >
                  Appeler le Support Commercial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Industriel Blueprint */}
      <footer className="bg-[#0B132B] text-slate-400 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
        {/* Grille Blueprint subtile en fond */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Colonne 1: Société */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1C2541] border border-[#00B4D8]/40 flex items-center justify-center">
                  <span className="text-[#00B4D8] font-heading font-extrabold text-xl">Ω</span>
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  OMEGAP<span className="text-[#00B4D8]">-DZ</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-300 mb-6">
                Fabricant algérien de référence dans l’extrusion de conduits et gaines électriques annelées ICTA 3422, gaines fendues et boîtiers d’appareillage pour le BTPH et l’industrie.
              </p>
              <div className="font-mono text-xs text-slate-400 space-y-1 border-l-2 border-[#00B4D8] pl-3 py-1">
                <p>NIF : 002115000000000</p>
                <p>RC : Tizi-Ouzou · Algérie</p>
                <p>Qualité : Écrasement 750N (ICTA 3422)</p>
              </div>
            </div>
            
            {/* Colonne 2: Navigation */}
            <div>
              <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider text-slate-200">
                Navigation B2B
              </h3>
              <ul className="space-y-3 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Demande de Devis Grossiste
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3: Gamme Produits */}
            <div>
              <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider text-slate-200">
                Conduits Électriques
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/produits" className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Gaines ICTA 3422 avec Tire-Fil (Ø16 à 50mm)
                  </Link>
                </li>
                <li>
                  <Link to="/produits" className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Conduits Fendus Réhabilitation & Télécom
                  </Link>
                </li>
                <li>
                  <Link to="/produits" className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Boîtes d'Encastrement & Dérivation
                  </Link>
                </li>
                <li>
                  <Link to="/produits" className="hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00B4D8]" />
                    Seaux Plastiques Industriels
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 4: Coordonnées Usine */}
            <div>
              <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider text-slate-200">
                Usine & Expéditions
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Aït Toudert, Daïra de Ouacif<br />
                    Wilaya de Tizi-Ouzou, 15000, Algérie
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="font-mono text-slate-200">+213 (0) 550 82 00 00 / 01</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00B4D8] shrink-0" />
                  <span className="text-slate-200">contact@omegap-dz.com</span>
                </li>
                <li className="pt-2">
                  <div className="bg-[#1C2541] p-3 text-xs text-slate-300 border border-slate-700">
                    <span className="text-[#00B4D8] font-bold block mb-1">Livraison 58 Wilayas :</span>
                    Service logistique intégré pour chantiers BTPH et distributeurs agréés.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} OMEGAP-DZ. Fabricant de gaines et conduits électriques en Algérie. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-mono">
              <span className="text-slate-400">Norme ICTA 3422</span>
              <span>·</span>
              <span className="text-slate-400">Écrasement 750N</span>
              <span>·</span>
              <span className="text-slate-400">Origine Algérie (Made in DZ)</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton Retour en Haut avec animation et indicateur de progression */}
      <ScrollToTopButton />
    </div>
  );
}
