import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, Check, ArrowRight, ShieldCheck, FileText, CheckCircle2, Factory } from 'lucide-react';

export default function Products() {
  const [downloadModal, setDownloadModal] = useState<string | null>(null);

  const products = [
    {
      id: "icta-3422",
      name: "Gaine ICTA 3422 avec Tire-Fil",
      subtitle: "Isolant Cintrable Transversalement Élastique Annelé",
      image: "/src/assets/images/product_gaine_icta_1792342170612.jpg",
      normBadge: "Norme NF EN 61386-22 / IANOR",
      description: "Le standard de référence en Algérie pour l'incorporation directe sous dalle béton vibré, chapes liquides, cloisons sèches et vides techniques. Dotée de la technologie Turbo-Gliss et d'un tire-fil en acier galvanisé lubrifié pour un aiguillage sans effort.",
      tableData: [
        { calibre: "Ø 16 mm", ref: "ICTA-16-100M", bobine: "100 mètres", palette: "2 800 m", use: "Circuits éclairage, navettes va-et-vient (1.5mm²)" },
        { calibre: "Ø 20 mm", ref: "ICTA-20-100M", bobine: "100 mètres", palette: "2 400 m", use: "Prises de courant standard, électroménager (2.5mm²)" },
        { calibre: "Ø 25 mm", ref: "ICTA-25-50M", bobine: "50 mètres", palette: "1 600 m", use: "Circuits cuisson, climatisation, puissance (4-6mm²)" },
        { calibre: "Ø 32 mm", ref: "ICTA-32-50M", bobine: "50 mètres", palette: "1 000 m", use: "Colonnes d’alimentation, liaisons compteurs" },
        { calibre: "Ø 40 mm", ref: "ICTA-40-25M", bobine: "25 mètres", palette: "600 m", use: "Câbles armés industriels et distribution principale" }
      ],
      specs: [
        { label: "Matière première", value: "Polypropylène ignifugé haute résilience" },
        { label: "Résistance compression", value: "750 Newtons à 23°C (Classe 3)" },
        { label: "Résistance aux chocs", value: "6 Joules à -5°C (Classe 4)" },
        { label: "Plage de température", value: "-5°C à +90°C (Classe 22)" },
        { label: "Comportement au feu", value: "Non propagateur de flamme (Auto-extinguible)" },
        { label: "Rigidité diélectrique", value: "> 2 000 V / 50 Hz pendant 15 min" },
      ],
      features: [
        "Tire-fil intégré en acier galvanisé 0.8mm résistant à la traction (force > 50 daN)",
        "Cannelures intérieures optimisées réduisant de 50% la friction au passage des câbles",
        "Résistance garantie à la pression du béton pompé et à la vibration des aiguilles",
        "Conditionnement en couronnes cerclées sous film étirable haute résistance anti-UV"
      ]
    },
    {
      id: "conduit-fendu",
      name: "Conduit Annelé Fendu Longitudinal",
      subtitle: "Gaine de protection & réhabilitation de faisceaux sans coupure",
      image: "/src/assets/images/product_conduit_fendu_1792342171033.jpg",
      normBadge: "Spécial Télécom, Armoires & Rénovation",
      description: "Conduit souple fendu sur toute sa longueur permettant le gainage et la mise en conformité immédiate de faisceaux électriques et câbles réseau déjà raccordés, sans aucune interruption de service ni démontage.",
      tableData: [
        { calibre: "Ø 16 mm", ref: "CONF-16-100", bobine: "100 mètres", palette: "3 000 m", use: "Faisceaux d’armoires de contrôle et automatisme" },
        { calibre: "Ø 20 mm", ref: "CONF-20-100", bobine: "100 mètres", palette: "2 500 m", use: "Cheminements de câbles data et fibre optique" },
        { calibre: "Ø 25 mm", ref: "CONF-25-50", bobine: "50 mètres", palette: "1 800 m", use: "Machines industrielles et baies de brassage" },
        { calibre: "Ø 32 mm", ref: "CONF-32-50", bobine: "50 mètres", palette: "1 200 m", use: "Groupes électrogènes et protections moteur" },
        { calibre: "Ø 50 mm", ref: "CONF-50-25", bobine: "25 mètres", palette: "500 m", use: "Faisceaux lourds et traversées de cloisons" }
      ],
      specs: [
        { label: "Matière première", value: "Polyamide / Polypropylène modifié" },
        { label: "Tenue thermique continue", value: "-20°C à +105°C" },
        { label: "Propriété mécanique", value: "Recouvrement automatique après insertion" },
        { label: "Résistance chimique", value: "Hydrocarbures, huiles minérales, acides dilués" },
        { label: "Traitement UV", value: "Spécifique pour passages extérieurs et ateliers" },
      ],
      features: [
        "Insertion instantanée des conducteurs sans déconnexion des borniers",
        "Mémoire de forme assurant un maintien serré sans ruban adhésif",
        "Protection abrasive supérieure contre les vibrations mécaniques industrielles",
        "Coloris noir teinté dans la masse résistant à la poussière et aux graisses"
      ]
    },
    {
      id: "accessoires",
      name: "Boîtes d'Encastrement & Accessoires de Dérivation",
      subtitle: "Appareillage pour maçonnerie, béton et cloisons sèches",
      image: "/src/assets/images/product_boites_accessoires_1792342171294.jpg",
      normBadge: "Conformité NFC / Tenue Fil Incandescent 850°C",
      description: "Gamme complète de boîtiers d'encastrement monopostes et multipostes, boîtes de dérivation carrées et rondes avec entrées étanches prédécoupées pour conduits Ø16, Ø20 et Ø25 mm.",
      tableData: [
        { calibre: "Monoposte Ø67mm", ref: "BOIT-67-P40", bobine: "Carton 200 pcs", palette: "4 800 pcs", use: "Interrupteurs et prises de courant simples" },
        { calibre: "Double poste", ref: "BOIT-2P-71", bobine: "Carton 100 pcs", palette: "2 400 pcs", use: "Blocs 2 prises entraxe 71mm normalisé" },
        { calibre: "Triple poste", ref: "BOIT-3P-71", bobine: "Carton 60 pcs", palette: "1 440 pcs", use: "Postes combinés TV / RJ45 / Énergie" },
        { calibre: "Dérivation 100x100", ref: "BOIT-DEV-100", bobine: "Carton 50 pcs", palette: "1 200 pcs", use: "Nœuds de dérivation avec couvercle vissable" },
      ],
      specs: [
        { label: "Matière plastique", value: "Polypropylène antichoc haute température" },
        { label: "Tenue fil incandescent", value: "850°C (Cloisons sèches) / 650°C (Maçonnerie)" },
        { label: "Indice de protection", value: "IP20 à IP40 avec couvercle ajusté" },
        { label: "Système de fixation", value: "Vis métalliques traitées anticorrosion incluses" },
      ],
      features: [
        "Opercules sécables sans outil pour raccordement direct étanche des gaines ICTA",
        "Grand volume utile facilitant l'intégration des micromodules domotiques et wagos",
        "Rigidité périphérique renforcée empêchant toute déformation lors du serrage",
        "Compatible avec toutes les séries d'appareillage standard du marché"
      ]
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
              <Factory className="w-3.5 h-3.5" />
              <span>Production Industrielle Algérienne Certifiée</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              Catalogue Produits & Spécifications Cotes
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Explorez nos gammes complètes de gaines électriques ICTA 3422, conduits fendus et boîtes d'appareillage, calibrées pour les exigences des chantiers algériens.
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {products.map((product, index) => (
            <div 
              key={product.id}
              id={product.id}
              className="bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] overflow-hidden"
            >
              {/* Entête Produit */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200/80">
                <div className="lg:col-span-5 bg-slate-100 relative min-h-[340px]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B132B] text-white px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider">
                    {product.normBadge}
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest block mb-2">
                      Gamme Spécialisée · OMEGAP-DZ
                    </span>
                    <h2 className="text-3xl font-heading font-extrabold text-[#0B132B] mb-2">
                      {product.name}
                    </h2>
                    <p className="text-sm font-mono text-slate-500 mb-4">{product.subtitle}</p>
                    <p className="text-slate-700 text-sm leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Avantages clés */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Rapides */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                    <Link 
                      to={`/contact?produit=${product.id}`}
                      className="bg-[#0B132B] hover:bg-[#1C2541] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <span>Demander un devis usine</span>
                      <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
                    </Link>
                    <button 
                      onClick={() => setDownloadModal(product.name)}
                      className="border border-slate-300 hover:border-[#0077B6] hover:text-[#0077B6] text-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 bg-slate-50"
                    >
                      <Download className="w-4 h-4" />
                      <span>Fiche Technique (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tableau technique Blueprint des Cotes et Conditionnements */}
              <div className="p-8 lg:p-12 bg-slate-50/60 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#0B132B]">
                      Tableau des Références & Conditionnements Grossistes
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Données métriques officielles pour bordereaux de prix et commandes
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-mono bg-[#00B4D8]/10 text-[#0077B6] px-3 py-1 font-bold">
                    Tarif usine dégressif
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse bg-white border border-slate-200">
                    <thead>
                      <tr className="bg-[#0B132B] text-white">
                        <th className="p-3 border-r border-slate-700">Calibre / Format</th>
                        <th className="p-3 border-r border-slate-700">Réf. Usine</th>
                        <th className="p-3 border-r border-slate-700">Couronne / Boîte</th>
                        <th className="p-3 border-r border-slate-700">Colisage Palette</th>
                        <th className="p-3">Application Recommandée</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {product.tableData.map((row, rIndex) => (
                        <tr key={rIndex} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-[#0B132B] border-r border-slate-200">{row.calibre}</td>
                          <td className="p-3 text-[#0077B6] font-semibold border-r border-slate-200">{row.ref}</td>
                          <td className="p-3 border-r border-slate-200">{row.bobine}</td>
                          <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">{row.palette}</td>
                          <td className="p-3 text-slate-600">{row.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Spécifications mécaniques et thermiques détaillées */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">
                    Paramètres de Conformité Normative
                  </h4>
                  <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="bg-white p-3 border border-slate-200">
                        <dt className="text-[11px] font-mono text-slate-500">{spec.label}</dt>
                        <dd className="text-xs font-bold text-[#0B132B] mt-1">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal interactif de téléchargement de Fiche Technique */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl border border-slate-200 relative">
            <button 
              onClick={() => setDownloadModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-mono text-xl"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 text-[#0077B6] mb-2 font-mono text-xs font-bold">
              <FileText className="w-4 h-4" />
              <span>Dossier Technique Homologation</span>
            </div>
            <h3 className="text-xl font-heading font-extrabold text-[#0B132B] mb-2">
              Télécharger la fiche {downloadModal}
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Remplissez vos coordonnées professionnelles pour recevoir le PDF officiel certifié (certificat de conformité IANOR, PV d'essais mécaniques et tableau des cotes).
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Merci ! La fiche technique officielle pour "${downloadModal}" a été envoyée avec succès à votre adresse email.`);
              setDownloadModal(null);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1">Nom ou Entreprise *</label>
                <input required type="text" placeholder="Ex: SARL Électricité Bâtiment" className="w-full text-xs p-3 border border-slate-300 focus:outline-none focus:border-[#00B4D8]" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1">Email Professionnel *</label>
                <input required type="email" placeholder="contact@entreprise.dz" className="w-full text-xs p-3 border border-slate-300 focus:outline-none focus:border-[#00B4D8]" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1">Wilaya *</label>
                <input required type="text" placeholder="Ex: Tizi-Ouzou, Alger, Oran..." className="w-full text-xs p-3 border border-slate-300 focus:outline-none focus:border-[#00B4D8]" />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#0B132B] hover:bg-[#0077B6] text-white py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le PDF Certifié</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
