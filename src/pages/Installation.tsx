import { motion } from 'motion/react';
import { PenTool, Box, Wrench } from 'lucide-react';

export default function Installation() {
  const steps = [
    {
      icon: PenTool,
      title: "1. Planification & Étude",
      description: "L'étape cruciale pour garantir la conformité et l'efficacité de votre réseau électrique.",
      details: [
        "Analyse des plans architecturaux et définition des cheminements.",
        "Calcul des sections de câbles et détermination des diamètres de conduits nécessaires (règle des 1/3 d'occupation).",
        "Identification des contraintes environnementales (température, risques mécaniques, exposition UV).",
        "Établissement du quantitatif matériel."
      ],
      image: "/image_3.png"
    },
    {
      icon: Box,
      title: "2. Choix du Matériel OMEGAP-DZ",
      description: "Sélectionner le conduit adapté à l'environnement de pose est fondamental pour la pérennité de l'installation.",
      details: [
        "Pose encastrée (murs, dalles) : Privilégier la Gaine ICTA 3422 pour sa résistance à l'écrasement (750N).",
        "Rénovation ou ajout sur faisceau existant : Opter pour le Conduit Fendu pour une intervention rapide.",
        "Sélection des accessoires compatibles (manchons, boîtes de dérivation) pour assurer l'étanchéité du réseau.",
        "Vérification des codes couleurs selon les normes en vigueur."
      ],
      image: "/image_4.png"
    },
    {
      icon: Wrench,
      title: "3. Mise en Œuvre & Installation",
      description: "Les bonnes pratiques de pose pour une installation sécurisée et durable.",
      details: [
        "Respect des rayons de courbure minimum pour éviter l'écrasement du conduit et faciliter le tirage ultérieur.",
        "Fixation adéquate : espacement régulier des colliers selon le diamètre du conduit.",
        "Utilisation du tire-fil intégré pour l'aiguillage des conducteurs (ne jamais utiliser le tire-fil comme conducteur de terre).",
        "Scellement soigné des boîtes d'encastrement et rebouchage des saignées."
      ],
      image: "/image_3.png"
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Guide d'Installation</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Protocoles techniques et bonnes pratiques pour la mise en œuvre de nos conduits électriques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Connecting Line (except for last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 bottom-[-6rem] w-0.5 bg-slate-100"></div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Icon & Title Column */}
                  <div className="lg:col-span-5 flex gap-6">
                    <div className="relative z-10 w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="pt-3">
                      <h2 className="text-2xl font-heading font-bold text-dark mb-3">{step.title}</h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="lg:col-span-7 lg:pt-3">
                    <div className="bg-slate-100 p-2 shadow-premium">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-auto object-cover mix-blend-multiply opacity-90"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Besoin d'assistance technique sur chantier ?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Nos ingénieurs d'application sont disponibles pour vous conseiller sur les méthodes de pose spécifiques à vos projets complexes.
          </p>
          <a 
            href="tel:+21300000000" 
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-slate-50 px-8 py-3 font-bold transition-colors"
          >
            Contacter le support technique
          </a>
        </div>
      </section>
    </div>
  );
}
