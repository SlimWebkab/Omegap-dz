import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, Check, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: "icta-3422",
      name: "Gaine ICTA 3422",
      subtitle: "Isolant Cintrable Transversalement Élastique",
      image: "/image_2.png",
      description: "Conduit annelé de haute qualité conçu pour la protection des conducteurs isolés dans les installations électriques. Idéal pour la pose encastrée dans les murs, planchers et dalles béton.",
      specs: [
        { label: "Matériau", value: "Polyoléfine ignifugée" },
        { label: "Résistance à l'écrasement", value: "750 N (Classe 3)" },
        { label: "Résistance aux chocs", value: "6 Joules (Classe 4)" },
        { label: "Température min.", value: "-5°C (Classe 2)" },
        { label: "Température max.", value: "+90°C (Classe 2)" },
        { label: "Non-propagateur", value: "Oui (Test de la flamme)" },
      ],
      features: [
        "Tire-fil intégré en acier galvanisé",
        "Profil annelé optimisé pour faciliter le tirage",
        "Couleur standard : Gris (autres sur demande)",
        "Conditionnement en couronnes filmées"
      ]
    },
    {
      id: "conduit-fendu",
      name: "Conduit Fendu",
      subtitle: "Protection mécanique pour faisceaux existants",
      image: "/image_1.png",
      description: "Solution idéale pour la protection et le regroupement de câbles déjà installés. Sa fente longitudinale permet une insertion rapide sans déconnexion des équipements.",
      specs: [
        { label: "Matériau", value: "Polypropylène (PP)" },
        { label: "Résistance thermique", value: "-40°C à +130°C" },
        { label: "Flexibilité", value: "Très haute" },
        { label: "Tenue chimique", value: "Excellente (huiles, solvants)" },
        { label: "Protection UV", value: "Traitement spécifique" },
      ],
      features: [
        "Installation ultra-rapide",
        "Fermeture sécurisée après insertion",
        "Idéal pour l'industrie automobile et les machines-outils",
        "Disponible en noir standard"
      ]
    },
    {
      id: "accessoires",
      name: "Accessoires & Raccords",
      subtitle: "Continuité et étanchéité garanties",
      image: "/image_6.png",
      description: "Une gamme complète d'accessoires conçus pour s'intégrer parfaitement avec nos conduits, assurant une installation professionnelle, étanche et durable.",
      specs: [
        { label: "Gamme", value: "Manchons, coudes, tés, clips" },
        { label: "Indice de protection", value: "Jusqu'à IP65 (avec joints)" },
        { label: "Matériau", value: "PVC ou PP selon application" },
        { label: "Compatibilité", value: "Totale avec gamme OMEGAP" },
      ],
      features: [
        "Montage rapide par encliquetage",
        "Tenue mécanique renforcée à l'arrachement",
        "Design compact pour les espaces réduits",
        "Résistance à la corrosion"
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Nos Produits</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Des solutions techniques de haute performance pour la protection de vos installations électriques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white shadow-premium overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={`relative h-64 lg:h-auto bg-slate-100 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-heading font-bold text-2xl">{product.name}</p>
                    <p className="text-sm opacity-90">{product.subtitle}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-2xl font-heading font-bold text-dark mb-4">{product.name}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Spécifications Techniques</h3>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <dt className="text-xs text-slate-500">{spec.label}</dt>
                          <dd className="text-sm font-medium text-dark">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Avantages</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/contact" 
                      className="bg-dark hover:bg-darker text-white px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="border border-slate-200 hover:border-primary hover:text-primary text-dark px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Fiche Technique
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
