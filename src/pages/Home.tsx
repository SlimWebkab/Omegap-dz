import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Clock, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image_8.png" 
            alt="Usine de fabrication" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-[#bdf4ff] text-dark text-xs font-bold tracking-wider uppercase mb-6">
                Expertise Algérienne
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-heading font-extrabold text-[#0f1c2c] leading-[1.1] mb-6">
                OMEGAP-DZ,<br />fabricant de gaines<br />électriques en<br />Algérie
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Solutions de protection haute performance pour infrastructures électriques. Sécurité, durabilité et conformité aux normes internationales les plus strictes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-black hover:bg-gray-900 text-white px-8 py-4 text-sm font-bold tracking-wide uppercase transition-colors flex items-center justify-center"
                >
                  Demander un devis
                </Link>
                <Link 
                  to="/produits" 
                  className="bg-[#e5e7eb] hover:bg-[#d1d5db] text-black px-8 py-4 text-sm font-bold tracking-wide uppercase transition-colors flex items-center justify-center"
                >
                  Voir nos produits
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 bg-white border-b border-slate-100 relative z-20 -mt-10 mx-4 sm:mx-6 lg:mx-8 shadow-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-dark mb-2">03</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Gamme de Produits</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-dark mb-2">100%</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Qualité Certifiée</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-dark mb-2">24h</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Support Technique</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Solutions de Câblage Premium</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-premium group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="h-48 mb-8 relative overflow-hidden bg-slate-50 flex items-center justify-center">
                <img 
                  src="/image_5.png" 
                  alt="Gaine ICTA 3422" 
                  className="object-cover w-full h-full mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-heading font-bold text-dark mb-3">Gaine ICTA 3422</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Conduit isolant cintrable transversalement élastique. Idéal pour les installations encastrées dans les murs, planchers et dalles.
              </p>
              <Link to="/produits" className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-dark">
                Spécifications techniques
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Product Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-premium group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="h-48 mb-8 relative overflow-hidden bg-slate-50 flex items-center justify-center">
                <img 
                  src="/image_1.png" 
                  alt="Conduit Fendu" 
                  className="object-cover w-full h-full mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-heading font-bold text-dark mb-3">Conduit Fendu</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Protection mécanique optimale pour les faisceaux de câbles existants. Installation rapide sans déconnexion préalable.
              </p>
              <Link to="/produits" className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-dark">
                Spécifications techniques
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Product Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-premium group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="h-48 mb-8 relative overflow-hidden bg-slate-50 flex items-center justify-center">
                <img 
                  src="/image_6.png" 
                  alt="Accessoires" 
                  className="object-cover w-full h-full mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-heading font-bold text-dark mb-3">Accessoires & Raccords</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Gamme complète de manchons, raccords et fixations garantissant l'étanchéité et la continuité de vos installations.
              </p>
              <Link to="/produits" className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-dark">
                Spécifications techniques
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">L'Avantage OMEGAP-DZ</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">L'excellence industrielle au service de vos projets</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Notre processus de fabrication s'appuie sur des technologies de pointe et un contrôle qualité rigoureux à chaque étape. Nous garantissons des produits conformes aux normes internationales les plus strictes.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Matières premières de première qualité (PVC, Polypropylène)",
                  "Résistance mécanique et thermique supérieure",
                  "Conformité aux normes de sécurité incendie",
                  "Capacité de production à grande échelle",
                  "Logistique optimisée sur tout le territoire national"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-dark relative overflow-hidden shadow-premium">
                <img 
                  src="/image_8.png" 
                  alt="Processus de fabrication" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-8 border-primary/20 m-4"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 shadow-premium hidden md:block">
                <p className="text-5xl font-heading font-bold mb-1">ISO</p>
                <p className="text-sm font-medium tracking-wider uppercase">Certifié 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwaDIwVjIwaC0yMHptMC0yMHYyMGgyMFYwaC0yMHoiIGZpbGw9IiMwMGI0ZDgiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Prêt à équiper vos installations ?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Contactez notre équipe technique pour une étude personnalisée de vos besoins en conduits électriques.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 font-medium transition-colors text-lg"
          >
            Demander une consultation technique
          </Link>
        </div>
      </section>
    </div>
  );
}
