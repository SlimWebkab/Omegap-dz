import { motion } from 'motion/react';
import { Home, Factory, Wifi, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/images';

export default function Solutions() {
  const solutions = [
    {
      id: "residentiel",
      icon: Home,
      title: "Bâtiment & Résidentiel (AADL, LPP, Promotion Immobilière)",
      subtitle: "Coulage sous dalle béton, chapes liquides & cloisons creuses",
      image: IMAGES.gaineIcta,
      fallbackImage: IMAGES.publicUrls.gaineIcta,
      description: "Pour les programmes de logements collectifs et individuels en Algérie, la gaine OMEGAP-DZ ICTA 3422 garantit une résistance de 750N indispensable pour résister au poids du béton frais et aux vibrations des aiguilles. Finies les gaines écrasées qui imposent de casser la chape !",
      points: [
        "Résistance à l'écrasement 750N (Classe 3) certifiée en laboratoire.",
        "Comportement auto-extinguible en cas d'arc électrique dans les cloisons.",
        "Tire-fil acier galvanisé intégré facilitant l'aiguillage à grande cadence.",
        "Compatibilité parfaite avec les boîtes d'appareillage monopostes et multipostes."
      ],
      recommendedProduct: "Gaine ICTA 3422 Ø16, Ø20 et Ø25 mm avec tire-fil"
    },
    {
      id: "industrie",
      icon: Factory,
      title: "Secteur Industriel, Usines & Agroalimentaire",
      subtitle: "Résistance aux huiles, vibrations mécaniques & contraintes sévères",
      image: IMAGES.hero,
      fallbackImage: IMAGES.publicUrls.hero,
      description: "Les usines, ateliers et unités de transformation requièrent des conduits résistant aux chocs d'engins, aux projections d'hydrocarbures et aux ambiances poussiéreuses ou humides. OMEGAP-DZ fournit des canalisations renforcées pour armoires TGBT et machines-outils.",
      points: [
        "Tenue thermique étendue de -20°C à +105°C sans perte d'élasticité.",
        "Protection mécanique anti-abrasion sur faisceaux vibrants.",
        "Conduits fendus démontables pour la maintenance préventive des lignes.",
        "Conditionnement en couronnes professionnelles étiquetées par lot."
      ],
      recommendedProduct: "Conduit Annelé Fendu Ø20 à Ø50 mm & Gaines ICTA fortes sections"
    },
    {
      id: "telecom",
      icon: Wifi,
      title: "Infrastructures Télécoms & Réseaux FTTH",
      subtitle: "Passage sous fourreaux, tirage de fibre optique & data centers",
      image: IMAGES.conduitFendu,
      fallbackImage: IMAGES.publicUrls.conduitFendu,
      description: "L'accélération du déploiement de la fibre optique par Algérie Télécom et les opérateurs réseau exige des conduits à très faible coefficient de frottement interne pour acheminer les câbles optiques fragiles sans risque de rupture.",
      points: [
        "Paroi intérieure optimisée pour soufflage ou aiguillage fluide de jarretières fibre.",
        "Protection efficace contre les rongeurs et les agressions mécaniques souterraines.",
        "Possibilité de calibres spécifiques pour gaines techniques d'immeubles.",
        "Identification claire des réseaux courants faibles."
      ],
      recommendedProduct: "Conduits de protection télécom & gaines annelées dédiées"
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Page Header Blueprint */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00B4D8]/20 text-[#00B4D8] text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-[#00B4D8]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Applications Métiers & Marchés BTPH</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              Solutions Sectorielles Dédiées
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              De l'habitat résidentiel aux sites industriels les plus exigeants, OMEGAP-DZ dimensionne ses conduits selon les contraintes réelles du terrain algérien.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Content */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className="bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className={`lg:col-span-5 bg-slate-900 relative min-h-[360px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={solution.image} 
                    onError={(e) => { e.currentTarget.src = solution.fallbackImage; }}
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00B4D8] font-bold block mb-1">
                      Recommandation Usine
                    </span>
                    <p className="font-mono text-xs text-slate-200 bg-[#0B132B]/80 p-2.5 border border-slate-700">
                      {solution.recommendedProduct}
                    </p>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center shrink-0">
                        <solution.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-wider block">
                          Secteur d'activité
                        </span>
                        <h2 className="text-2xl font-heading font-extrabold text-[#0B132B]">
                          {solution.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                      {solution.description}
                    </p>

                    <div className="bg-slate-50 p-6 border border-slate-200/80 mb-6">
                      <h3 className="text-xs font-mono font-bold text-[#0B132B] uppercase tracking-wider mb-4">
                        Exigences Normatives Couvertes
                      </h3>
                      <ul className="space-y-3">
                        {solution.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      to="/produits" 
                      className="inline-flex items-center text-xs font-bold font-mono text-[#0077B6] hover:text-[#0B132B] uppercase tracking-wider gap-2 group"
                    >
                      <span>Consulter les fiches produits adaptées</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/contact"
                      className="bg-[#0B132B] hover:bg-[#1C2541] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Demande d'échantillons
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
