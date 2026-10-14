import { motion } from 'motion/react';
import { Home, Factory, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      id: "residentiel",
      icon: Home,
      title: "Habitat & Résidentiel",
      subtitle: "Sécurité et conformité pour les logements",
      image: "/image_3.png",
      description: "Dans le secteur résidentiel, la sécurité des occupants est la priorité absolue. Nos solutions de conduits électriques garantissent une isolation parfaite et une protection mécanique optimale des circuits, qu'ils soient encastrés dans les murs, les dalles béton ou posés en apparent dans les vides sanitaires.",
      points: [
        "Gaines ICTA auto-extinguibles (non-propagateur de flamme).",
        "Résistance à l'écrasement adaptée aux coulages de dalles (750N).",
        "Facilité de tirage des fils grâce au profil annelé interne optimisé.",
        "Conformité totale avec les normes d'installation domestiques."
      ]
    },
    {
      id: "industrie",
      icon: Factory,
      title: "Secteur Industriel",
      subtitle: "Robustesse face aux environnements extrêmes",
      image: "/image_1.png",
      description: "Les environnements industriels soumettent les installations électriques à des contraintes sévères : chocs mécaniques, variations thermiques, exposition aux agents chimiques. OMEGAP-DZ propose des conduits renforcés conçus pour maintenir l'intégrité de vos réseaux de puissance et de commande.",
      points: [
        "Conduits haute résistance aux chocs mécaniques et à l'abrasion.",
        "Excellente tenue aux huiles, solvants et environnements corrosifs.",
        "Solutions de conduits fendus pour la maintenance rapide des machines-outils.",
        "Gamme d'accessoires étanches (IP65+) pour les zones humides ou poussiéreuses."
      ]
    },
    {
      id: "telecom",
      icon: Wifi,
      title: "Infrastructures Télécoms",
      subtitle: "Protection des réseaux de communication",
      image: "/image_4.png",
      description: "Le déploiement des réseaux fibre optique (FTTH) et des infrastructures de télécommunication nécessite des conduits spécifiques, capables de protéger des câbles fragiles sur de longues distances tout en facilitant les opérations de portage ou d'aiguillage.",
      points: [
        "Gaines lisses ou annelées avec faible coefficient de friction interne.",
        "Résistance aux UV pour les installations en extérieur.",
        "Identification par code couleur spécifique aux réseaux de communication.",
        "Solutions adaptées pour le passage en fourreaux souterrains."
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Solutions par Secteur</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Une expertise transversale adaptée aux exigences spécifiques de chaque domaine d'application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Content */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-dark">{solution.title}</h2>
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {solution.description}
                  </p>

                  <div className="bg-white p-8 shadow-premium border-l-4 border-primary">
                    <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-6">Exigences Techniques Répondues</h3>
                    <ul className="space-y-4">
                      {solution.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link 
                      to="/produits" 
                      className="inline-flex items-center text-dark font-bold hover:text-primary transition-colors group"
                    >
                      Voir les produits recommandés
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden shadow-premium">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-full h-full bg-slate-100 top-6 ${index % 2 === 1 ? '-left-6' : '-right-6'}`}></div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
