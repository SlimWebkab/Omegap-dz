import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Prix & Commandes Usine",
      question: "Quel est le prix d'une gaine électrique en Algérie chez OMEGAP-DZ ?",
      answer: "En tant que fabricant direct basé à Aït Toudert (Tizi-Ouzou), OMEGAP-DZ pratique des tarifs d'usine dégressifs selon les volumes de couronnes commandées (par palette ou camion complet). Le coût au mètre varie selon le diamètre (Ø16, Ø20, Ø25, Ø32, Ø40mm) et la présence du tire-fil en acier galvanisé. Nous établissons un bordereau de prix officiel sous 24h avec conditions de paiement adaptées aux entreprises du BTP et grossistes en matériel électrique."
    },
    {
      category: "Localisation & Logistique",
      question: "Où se situe l'usine de fabrication OMEGAP-DZ et couvrez-vous toutes les wilayas ?",
      answer: "Notre unité de production industrielle est située dans la commune d'Aït Toudert, Daïra de Ouacif, Wilaya de Tizi-Ouzou. Nous disposons d'une flotte de transport et de partenaires logistiques réguliers assurant la livraison sur chantier et en dépôts dans les 58 wilayas d'Algérie (Alger, Blida, Oran, Sétif, Constantine, Béjaïa, Biskra, etc.) sous 24 à 48 heures."
    },
    {
      category: "Normes & Résistance Mécanique",
      question: "Quelle est la différence entre une gaine ICTA 3422 et une gaine 2222 ordinaire ?",
      answer: "Le code à 4 chiffres résume la résistance mécanique et thermique selon la norme NF EN 61386-22 / IANOR. Le 1er chiffre '3' correspond à une résistance à l'écrasement de 750 Newtons (contre seulement 320 Newtons pour une gaine 2222). Le 2nd chiffre '4' atteste d'une résistance aux chocs de 6 Joules à -5°C. La gaine 3422 est la seule habilitée à être noyée directement dans les dalles en béton vibré sans risquer d'être pincée ou écrasée."
    },
    {
      category: "Sécurité Incendie & Matériaux",
      question: "Vos gaines électriques sont-elles ignifugées et conformes à la sécurité incendie ?",
      answer: "Oui. Nos conduits sont extrudés à partir de polypropylène ignifugé classé non-propagateur de flamme. En cas de court-circuit interne ou de départ de feu, la matière s'auto-éteint dès que la source d'ignition disparaît, évitant la propagation du feu aux faux-plafonds et aux cloisons alvéolaires."
    },
    {
      category: "Installation & Câblage",
      question: "Comment choisir le bon diamètre de gaine pour mon installation électrique ?",
      answer: "La règle normative du tiers (1/3) stipule que la surface totale occupée par les conducteurs ne doit pas dépasser 33% de la section intérieure de la gaine. En règle générale : Ø16mm pour les circuits d'éclairage (jusqu'à 3 fils 1.5mm²), Ø20mm pour les prises de courant classiques (jusqu'à 4 fils 2.5mm²), Ø25mm pour les circuits spécialisés (plaques de cuisson 6mm², climatiseurs), et Ø32mm pour les liaisons principales entre compteur et tableau de répartition."
    },
    {
      category: "Gamme Technique Spéciale",
      question: "Dans quel cas utiliser le conduit fendu plutôt qu'une gaine classique ?",
      answer: "Le conduit annelé fendu possède une ouverture longitudinale continue à mémoire de forme. Il est spécialement conçu pour protéger des faisceaux de câbles déjà en place sans devoir couper le courant ni déconnecter les fiches (ex: réhabilitation d'armoires électriques industrielles, passages de câbles informatiques et télécoms, faisceaux automobiles et machines-outils)."
    },
    {
      category: "Distribution & Partenariats",
      question: "Comment devenir distributeur ou point de vente agréé OMEGAP-DZ ?",
      answer: "Nous accueillons les quincailleries professionnelles, grossistes en appareillage électrique et coopératives d'artisans. Nous fournissons des présentoirs de couronnes, des échantillons techniques pour vos clients, et des conditions tarifaires préférentielles avec exclusivité de zone possible. Contactez notre direction commerciale via le formulaire ou par téléphone."
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
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Base de Connaissances Technique & Normative</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              Foire Aux Questions Électriques
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Toutes les réponses aux questions des installateurs, distributeurs et maîtres d'ouvrage sur nos gaines ICTA 3422 et conditions d'approvisionnement en Algérie.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-[0_20px_40px_rgba(15,28,44,0.06)] border border-slate-200/80 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-200">
              <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center font-mono font-bold">
                Ω
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-[#0B132B]">
                  Foire Aux Questions Industrielles
                </h2>
                <p className="text-xs font-mono text-slate-500">
                  Documentation officielle OMEGAP-DZ · Norme NF C 15-100 & IANOR
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border transition-all duration-200 ${
                    openIndex === index 
                      ? 'border-[#00B4D8] bg-slate-50/70 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0077B6] block mb-1">
                        {faq.category}
                      </span>
                      <span className="font-heading font-bold text-base md:text-lg text-[#0B132B]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#0077B6] shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#00B4D8]' : ''}`} 
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-200/60 font-sans">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white border border-slate-200/80 p-8 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-[#0B132B] mb-2">
              Vous avez un appel d'offres ou une demande spécifique ?
            </h3>
            <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">
              Notre équipe d'ingénieurs d'application étudie vos cahiers des charges et prépare les attestations de conformité nécessaires sous 24h.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#0B132B] hover:bg-[#1C2541] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Échanger avec notre bureau d'études
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
