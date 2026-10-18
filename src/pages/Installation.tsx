import { motion } from 'motion/react';
import { PenTool, Box, Wrench, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Installation() {
  const steps = [
    {
      stepNum: "01",
      icon: PenTool,
      title: "1. Planification & Règle des Tiers (NF C 15-100)",
      description: "Le dimensionnement correct des conduits évite la surchauffe des conducteurs et garantit un tirage ultérieur sans blocage.",
      details: [
        "Application stricte de la règle du tiers d'occupation : la somme des sections totales des conducteurs (isolant compris) ne doit pas excéder 1/3 de la section intérieure du conduit.",
        "Repérage des cheminements en évitant les coudes à angle droit successifs (maximum 3 coudes à 90° entre deux points de tirage).",
        "Calcul des longueurs de couronnes pour minimiser les chutes et les manchonnages intermédiaires sous dalle.",
        "Séparation des courants forts (230V/400V) et courants faibles (RJ45, interphonie, alarme) dans des conduits distincts distants d'au moins 20cm."
      ],
      blueprintTip: "Pour 3 conducteurs H07V-U 2.5mm² (Phase + Neutre + Terre), le diamètre minimal normalisé est le Ø 20 mm."
    },
    {
      stepNum: "02",
      icon: Box,
      title: "2. Sélection du Matériel & Vérification de Résistance",
      description: "La typologie du support impose un niveau de résistance mécanique défini par le code ICTA.",
      details: [
        "Coulage sous dalle béton armé vibré : Utilisation impérative de la gaine ICTA 3422 (écrasement 750N). Les gaines économiques 2222 s'aplatissent sous le poids du béton frais.",
        "Cloisons sèches en plaques de plâtre : Gaine ICTA 3422 fixée par colliers ou attaches rapides sur montants métalliques.",
        "Réhabilitation ou rajout de circuits dans armoires existantes : Utilisation du conduit annelé fendu OMEGAP-DZ pour un emballage direct sans déconnexion.",
        "Boîtes d'encastrement : Sélection de boîtiers avec tenue au fil incandescent 850°C pour cloisons creuses."
      ],
      blueprintTip: "Vérifier le marquage usine continu gravé sur la gaine : OMEGAP-DZ ICTA 3422 750N CE."
    },
    {
      stepNum: "03",
      icon: Wrench,
      title: "3. Pose, Fixation & Aiguillage des Conducteurs",
      description: "Méthodologie de fixation et règles d'or pour préserver l'intégrité du tire-fil en acier.",
      details: [
        "Rayon de courbure minimal : Maintenir un rayon au moins égal à 6 fois le diamètre extérieur du conduit (ex: rayon min 12cm pour du Ø20mm).",
        "Arrimage sur ferraillage : Ligaturer la gaine sous le treillis soudé pour éviter qu'elle ne remonte lors de la coulée de béton.",
        "Aiguillage des fils : Utiliser le tire-fil acier galvanisé fourni avec un lubrifiant de tirage adapté. Ne jamais forcer par à-coups violents.",
        "Bouchonnage provisoire : Poser des embouts de protection étanches sur les extrémités des gaines en attente pour empêcher l'infiltration de laitance de ciment."
      ],
      blueprintTip: "Important : Le tire-fil en acier galvanisé sert exclusivement à l'aiguillage et ne doit en aucun cas servir de conducteur de terre !"
    }
  ];

  // Matrice de capacité des conduits selon la norme
  const fillingRules = [
    { conduit: "Ø 16 mm (Int. 10.7mm)", fil15: "3 fils", fil25: "Non recommandé", cables: "Éclairage va-et-vient, spots, navettes" },
    { conduit: "Ø 20 mm (Int. 14.1mm)", fil15: "6 fils", fil25: "4 fils", cables: "Prises de courant 16A, volets roulants" },
    { conduit: "Ø 25 mm (Int. 18.2mm)", fil15: "10 fils", fil25: "6 fils", cables: "Plaques 32A, chauffe-eau, climatiseur" },
    { conduit: "Ø 32 mm (Int. 24.3mm)", fil15: "16 fils", fil25: "10 fils", cables: "Alimentation tableau divisionnaire, 10-16mm²" },
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
              <span>Guide Technique de Pose · Ingénierie Chantier</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              Protocoles d'Installation & Normes de Pose
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Consignes d'ingénierie et recommandations pour garantir la longévité de vos canalisations électriques sous dalle béton, cloisons sèches et faux-plafonds.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-[#F8FAFC] border border-slate-200/80 p-8 lg:p-12 shadow-[0_20px_40px_rgba(15,28,44,0.04)] relative"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center font-mono font-extrabold text-xl shrink-0">
                      {step.stepNum}
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-extrabold text-[#0B132B] mb-2">
                        {step.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Boîte Conseil d'Ingénieur Blueprint */}
                      <div className="bg-white p-4 border-l-4 border-[#00B4D8] font-mono text-xs text-slate-700 shadow-sm">
                        <span className="text-[#0077B6] font-bold block mb-1">Règle de l'Art :</span>
                        {step.blueprintTip}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matrice Normative du Taux de Remplissage */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest block mb-2">
              Abaque de Dimensionnement Rapide
            </span>
            <h3 className="text-3xl font-heading font-extrabold text-[#0B132B]">
              Capacité Maximale des Conduits OMEGAP-DZ
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Nombre maximal de conducteurs admissibles selon la règle des tiers pour garantir un tirage facile et éviter l'échauffement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-[#0B132B] text-white">
                  <th className="p-4 border-r border-slate-700">Calibre Conduit</th>
                  <th className="p-4 border-r border-slate-700">Fils 1.5 mm² max</th>
                  <th className="p-4 border-r border-slate-700">Fils 2.5 mm² max</th>
                  <th className="p-4">Circuits Types</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {fillingRules.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-[#0B132B] border-r border-slate-200">{row.conduit}</td>
                    <td className="p-4 font-semibold text-[#0077B6] border-r border-slate-200">{row.fil15}</td>
                    <td className="p-4 font-semibold text-[#0077B6] border-r border-slate-200">{row.fil25}</td>
                    <td className="p-4 text-slate-600">{row.cables}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-4xl mx-auto flex items-center gap-3 bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Note de sécurité :</strong> Pour les alimentations de forte puissance (sections supérieures à 6 mm²), prévoir un conduit dédié par circuit afin de prévenir tout couplage thermique.
            </span>
          </div>
        </div>
      </section>

      {/* Support Technique Direct */}
      <section className="py-20 bg-[#0B132B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-heading font-extrabold mb-4">
            Une question technique sur un cahier des charges BTPH ?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Notre bureau d'études analyse vos bordereaux quantitatifs et vous préconise les sections optimales sous 24 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#00B4D8] hover:bg-[#0096B4] text-[#0B132B] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              Consulter nos ingénieurs
            </Link>
            <a 
              href="tel:+213550820000" 
              className="bg-[#1C2541] hover:bg-slate-800 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Assistance Téléphonique : +213 550 82 00 00</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
