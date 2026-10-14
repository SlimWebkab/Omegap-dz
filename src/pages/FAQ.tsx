import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quelle est la différence entre une gaine ICTA et un conduit fendu ?",
      answer: "La gaine ICTA (Isolant Cintrable Transversalement Élastique) est un conduit fermé, annelé, principalement utilisé pour les installations neuves ou encastrées (murs, dalles). Le conduit fendu, quant à lui, possède une ouverture longitudinale permettant d'insérer des câbles déjà connectés, ce qui le rend idéal pour la rénovation, la maintenance industrielle ou la protection de faisceaux existants."
    },
    {
      question: "Vos conduits électriques sont-ils conformes aux normes de sécurité incendie ?",
      answer: "Absolument. Nos gaines ICTA 3422 sont fabriquées à partir de polymères ignifugés. Elles sont classées 'non-propagateur de la flamme' selon les normes internationales en vigueur. En cas d'incendie, elles s'auto-éteignent dès le retrait de la source de chaleur, limitant ainsi la propagation du feu dans les cloisons."
    },
    {
      question: "Comment choisir le bon diamètre de gaine pour mon installation ?",
      answer: "Le choix du diamètre dépend de la section et du nombre de conducteurs à passer. La règle normative impose que les conducteurs ne doivent pas occuper plus du tiers (1/3) de la section intérieure du conduit. Cela facilite le tirage initial et permet d'éventuels rajouts futurs sans risque d'échauffement."
    },
    {
      question: "Peut-on couler vos gaines directement dans le béton ?",
      answer: "Oui, notre gamme ICTA 3422 possède une résistance à l'écrasement de 750 Newtons, ce qui la rend parfaitement adaptée à la pose en dalle pleine ou en chape. Sa structure annelée lui confère une excellente tenue mécanique face à la pression du béton lors du coulage."
    },
    {
      question: "Où sont fabriqués les produits OMEGAP-DZ ?",
      answer: "L'intégralité de notre production est réalisée en Algérie, dans notre usine moderne située dans la zone industrielle de Rouiba. Cette production locale nous permet d'assurer un contrôle qualité rigoureux, une disponibilité constante des stocks et une réactivité optimale pour nos clients nationaux."
    },
    {
      question: "Proposez-vous des conduits résistants aux UV pour une pose en extérieur ?",
      answer: "Oui, nous proposons des gammes spécifiques traitées anti-UV pour les installations apparentes en extérieur (façades, toitures, installations solaires). Veuillez préciser cette contrainte lors de votre demande de devis afin que nous vous orientions vers la référence adéquate."
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Foire Aux Questions</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Retrouvez les réponses aux questions techniques les plus fréquentes concernant nos conduits électriques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-premium p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-dark">Base de connaissances technique</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-200 transition-colors ${openIndex === index ? 'border-primary/30 bg-primary/5' : 'hover:border-slate-300'}`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-heading font-bold text-dark pr-8">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">Vous ne trouvez pas la réponse à votre question technique ?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-dark hover:bg-darker text-white px-8 py-3 font-medium transition-colors"
            >
              Contacter notre bureau d'études
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
