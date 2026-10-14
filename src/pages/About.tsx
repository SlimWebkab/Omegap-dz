import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwaDIwVjIwaC0yMHptMC0yMHYyMGgyMFYwaC0yMHoiIGZpbGw9IiMwMGI0ZDgiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Présentation</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              OMEGAP-DZ : L'excellence algérienne dans la fabrication de conduits électriques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Positioning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Histoire</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">Une vision industrielle ambitieuse</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Fondée avec la volonté de doter l'Algérie d'une industrie de pointe dans le secteur du matériel électrique, OMEGAP-DZ s'est rapidement imposée comme un acteur incontournable dans la fabrication de gaines ICTA et de conduits fendus.
                </p>
                <p>
                  Notre outil de production, situé au cœur du tissu industriel algérien, intègre les dernières avancées technologiques en matière d'extrusion plastique. Cela nous permet de garantir une qualité constante et une capacité de réponse optimale aux exigences des grands projets d'infrastructure.
                </p>
                <p>
                  Nous ne sommes pas de simples fournisseurs ; nous sommes des partenaires techniques engagés dans la réussite de vos installations électriques, résidentielles comme industrielles.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] bg-slate-100 shadow-premium"
            >
              <img 
                src="/image_8.png" 
                alt="Ligne de production OMEGAP-DZ" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 bg-dark text-white p-6 max-w-xs">
                <p className="font-heading font-bold text-xl mb-1">Production Locale</p>
                <p className="text-sm text-slate-300">100% fabriqué en Algérie selon les standards internationaux.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nos Fondations</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Les 4 piliers de notre excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Qualité Intransigeante", desc: "Contrôles stricts à chaque étape de la production pour garantir sécurité et durabilité." },
              { icon: Zap, title: "Innovation Continue", desc: "Veille technologique et amélioration constante de nos formulations plastiques." },
              { icon: Target, title: "Précision Technique", desc: "Respect rigoureux des tolérances dimensionnelles pour une installation sans faille." },
              { icon: Globe, title: "Responsabilité", desc: "Processus de fabrication optimisés pour réduire notre empreinte environnementale." }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-premium border-t-4 border-transparent hover:border-primary transition-colors"
              >
                <pillar.icon className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-xl font-heading font-bold text-dark mb-3">{pillar.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Future */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Vision</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Bâtir l'infrastructure de demain</h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              L'électrification croissante et la modernisation des infrastructures exigent des solutions de câblage toujours plus performantes. OMEGAP-DZ se positionne comme le moteur de cette transformation en Algérie.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Notre ambition est d'étendre continuellement notre gamme pour couvrir l'ensemble des besoins spécifiques de l'industrie, du bâtiment intelligent et des télécommunications, tout en maintenant notre engagement indéfectible envers la qualité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
