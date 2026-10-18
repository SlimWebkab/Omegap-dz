import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Truck, 
  FileText, 
  Flame, 
  Sparkles,
  HelpCircle,
  Calculator
} from 'lucide-react';

export default function Home() {
  // Simulateur de calcul rapide de métrage pour les pros
  const [selectedDiameter, setSelectedDiameter] = useState('20');
  const [reelCount, setReelCount] = useState(10);
  const [applicationType, setApplicationType] = useState('dalle_beton');

  const diameterData: Record<string, { label: string; use: string; reelLength: number }> = {
    '16': { label: 'Ø 16 mm', use: 'Circuits d’éclairage, navettes, fils 1.5mm²', reelLength: 100 },
    '20': { label: 'Ø 20 mm', use: 'Prises de courant standard, câbles 2.5mm²', reelLength: 100 },
    '25': { label: 'Ø 25 mm', use: 'Circuits spécialisés, plaques cuisson, 4-6mm²', reelLength: 50 },
    '32': { label: 'Ø 32 mm', use: 'Colonnes montantes, alimentations tableaux', reelLength: 50 },
    '40': { label: 'Ø 40 mm', use: 'Liaisons principales compteur et industrie', reelLength: 25 },
  };

  const currentDiameter = diameterData[selectedDiameter];
  const totalMeters = reelCount * currentDiameter.reelLength;

  // Questions fréquentes SEO (People Also Ask Google Algérie)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quel est le prix d'une gaine électrique en Algérie chez OMEGAP-DZ ?",
      a: "En tant que fabricant direct basé à Aït Toudert (Tizi-Ouzou), nos prix sont fixés au tarif usine sans intermédiaire. Le tarif dépend du diamètre (Ø16, Ø20, Ø25, Ø32) et du volume commandé par les grossistes, quincailleries ou entreprises du BTP. Nous transmettons un bordereau de prix détaillé sous 24h par email ou WhatsApp."
    },
    {
      q: "Où se situe l'usine de fabrication OMEGAP-DZ et livrez-vous sur tout le territoire ?",
      a: "Notre unité de production industrielle est implantée à Aït Toudert, Daïra de Ouacif dans la wilaya de Tizi-Ouzou. Grâce à notre réseau logistique intégré, nous assurons des expéditions régulières par camions complets ou groupés vers l'ensemble des 58 wilayas d'Algérie (Alger, Oran, Constantine, Sétif, Béjaïa, etc.)."
    },
    {
      q: "Quelle est la différence entre une gaine ICTA 3422 et une gaine ordinaire ?",
      a: "La norme ICTA 3422 garantit une résistance à l'écrasement de 750 Newtons (indice 3) et une résistance aux chocs de 6 Joules (indice 4). Contrairement aux gaines légères de classe 2222 qui s'écrasent lors du coulage du béton, la gaine OMEGAP-DZ ICTA 3422 conserve son intégrité et son diamètre intérieur, permettant un tirage fluide des câbles sans blocage."
    },
    {
      q: "Vos conduits électriques sont-ils conformes aux normes de sécurité incendie ?",
      a: "Absolument. Nos gaines sont formulées en polypropylène ou PVC de haute qualité, ignifugées et non-propagatrices de flamme. En cas d'arc électrique ou de surchauffe interne, la gaine s'auto-éteint pour éviter la propagation du feu aux cloisons et faux-plafonds."
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. HERO SECTION (Fidèle à la structure demandée avec visuel usine haute définition) */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-20 overflow-hidden bg-blueprint-grid">
        {/* Visuel d'arrière plan industriel avec superposition Blueprint */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_factory_extrusion_1792342170423.jpg" 
            alt="Usine de fabrication de gaines électriques OMEGAP-DZ en Algérie" 
            className="w-full h-full object-cover opacity-25 lg:opacity-35 filter brightness-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F8FAFC]/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Kicker Blueprint */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00B4D8]/10 text-[#0077B6] text-xs font-mono font-bold tracking-wider uppercase mb-6 border-l-2 border-[#00B4D8]">
                <span>Expertise Algérienne · Usine Ouacif, Tizi-Ouzou</span>
              </div>

              {/* Titre H1 imposant (Structure exacte de la capture d'écran) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-heading font-extrabold text-[#0B132B] leading-[1.08] mb-6 tracking-tight">
                OMEGAP-DZ,<br />
                fabricant de gaines<br />
                électriques en<br />
                <span className="text-[#0077B6] underline decoration-[#00B4D8]/40 decoration-wavy">Algérie</span>
              </h1>

              {/* Sous-titre technique */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed">
                Solutions de protection haute performance pour infrastructures électriques. Conduits annelés ICTA 3422, gaines fendues et accessoires certifiés pour chantiers exigeants et distributeurs agréés.
              </p>
              
              {/* 2 CTA Visibles & Contrastés */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-[#0B132B] hover:bg-[#1C2541] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(11,19,43,0.25)] border border-slate-900 group"
                >
                  <span>Demander un devis usine</span>
                  <ArrowRight className="w-4 h-4 text-[#00B4D8] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/produits" 
                  className="bg-white hover:bg-slate-100 text-[#0B132B] px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors flex items-center justify-center border border-slate-300 shadow-sm"
                >
                  Voir notre catalogue
                </Link>
              </div>

              {/* Reassurance Ligne Technique */}
              <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" /> Résistance 750N (Sous béton)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" /> Tire-fil acier galvanisé lubrifié
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" /> Norme NF C 15-100 / IANOR
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS (Section 03 Produits / 100% Qualité / 24h Support) */}
      <section className="relative z-20 -mt-10 mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto bg-white shadow-[0_20px_40px_rgba(15,28,44,0.06)] border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-4 text-[#0077B6]">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-[#0B132B] mb-1 font-mono">03</h3>
              <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Gammes Spécialisées</p>
              <p className="text-xs text-slate-500 mt-1">ICTA 3422, Conduits Fendus, Accessoires</p>
            </div>
            
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-4 text-[#0077B6]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-[#0B132B] mb-1 font-mono">100%</h3>
              <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Qualité Certifiée</p>
              <p className="text-xs text-slate-500 mt-1">Écrasement 750N, ignifugé, zéro plomb</p>
            </div>

            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-4 text-[#0077B6]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-[#0B132B] mb-1 font-mono">24h</h3>
              <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Réponse Devis B2B</p>
              <p className="text-xs text-slate-500 mt-1">Chiffrage immédiat et fiches techniques</p>
            </div>

            <div className="p-8 flex flex-col items-center text-center bg-slate-50/50">
              <div className="w-14 h-14 bg-white flex items-center justify-center mb-4 text-[#0077B6] shadow-sm">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-heading font-extrabold text-[#0B132B] mb-1 font-mono">58</h3>
              <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Wilayas Desservies</p>
              <p className="text-xs text-slate-500 mt-1">Logistique directe depuis l'usine Ouacif</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION PRODUITS (Cards Premium avec specs techniques réelles & photos haute def) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#00B4D8]" />
                <h2 className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest">
                  Catalogue Technique Usine
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B132B]">
                Conduits Électriques Haute Performance
              </h3>
            </div>
            <Link 
              to="/produits" 
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#0077B6] hover:text-[#0B132B] transition-colors gap-1 group"
            >
              <span>Consulter l'ensemble des diamètres</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Gaine ICTA 3422 */}
            <div className="bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] flex flex-col group hover:border-[#00B4D8]/50 transition-all duration-300">
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src="/src/assets/images/product_gaine_icta_1792342170612.jpg" 
                  alt="Gaine ICTA 3422 OMEGAP-DZ fabriquée en Algérie" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0B132B] text-white px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase">
                  Standard ICTA 3422
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-[#0B132B] mb-2">
                    Gaine ICTA 3422 avec Tire-Fil
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Conduit annelé cintrable transversalement élastique à haute résistance mécanique. Conçu pour passage sous dalle béton vibré, chapes liquides, cloisons sèches et vides sanitaires.
                  </p>

                  <div className="bg-slate-50 p-4 border border-slate-100 font-mono text-xs space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Diamètres dispo :</span>
                      <span className="font-bold text-[#0B132B]">Ø16 · 20 · 25 · 32 · 40 mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Résistance écrasement :</span>
                      <span className="font-bold text-emerald-600">750 N (Classe 3)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Résistance aux chocs :</span>
                      <span className="font-bold text-[#0B132B]">6 Joules à -5°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tire-fil intégré :</span>
                      <span className="font-bold text-[#0B132B]">Acier galvanisé 0.8mm</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/produits" 
                  className="w-full text-center bg-[#0B132B] hover:bg-[#0077B6] text-white py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Fiche technique & Cotes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Conduit Fendu */}
            <div className="bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] flex flex-col group hover:border-[#00B4D8]/50 transition-all duration-300">
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src="/src/assets/images/product_conduit_fendu_1792342171033.jpg" 
                  alt="Conduit fendu pour câbles et fibre optique OMEGAP-DZ" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0077B6] text-white px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase">
                  Spécial Réhabilitation
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-[#0B132B] mb-2">
                    Conduit Annelé Fendu
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Gaine technique fendue sur toute la longueur pour la protection rapide de faisceaux de câbles déjà connectés. Idéal pour maintenance industrielle, armoires TGBT et réseaux télécom.
                  </p>

                  <div className="bg-slate-50 p-4 border border-slate-100 font-mono text-xs space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Diamètres dispo :</span>
                      <span className="font-bold text-[#0B132B]">Ø16 à Ø50 mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Matière première :</span>
                      <span className="font-bold text-[#0B132B]">Polypropylène traité UV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Installation :</span>
                      <span className="font-bold text-emerald-600">Sans déconnexion de câble</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tenue thermique :</span>
                      <span className="font-bold text-[#0B132B]">-20°C à +105°C</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/produits" 
                  className="w-full text-center bg-[#0B132B] hover:bg-[#0077B6] text-white py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Fiche technique & Cotes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Boîtes d'Encastrement & Accessoires */}
            <div className="bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] flex flex-col group hover:border-[#00B4D8]/50 transition-all duration-300">
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src="/src/assets/images/product_boites_accessoires_1792342171294.jpg" 
                  alt="Boîtes d'encastrement et raccords électriques OMEGAP-DZ" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-800 text-white px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase">
                  Appareillage BTP
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-[#0B132B] mb-2">
                    Boîtes & Raccords d'Encastrement
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Boîtes de dérivation et boîtiers multipostes d'appareillage. Entrées défonçables pré-calibrées pour gaines Ø16/20/25 mm assurant une étanchéité parfaite à l'air et au mortier.
                  </p>

                  <div className="bg-slate-50 p-4 border border-slate-100 font-mono text-xs space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Formats :</span>
                      <span className="font-bold text-[#0B132B]">1 poste, 2 postes, Dérivation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Fil incandescent :</span>
                      <span className="font-bold text-emerald-600">Tenue 850°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Compatibilité :</span>
                      <span className="font-bold text-[#0B132B]">Brique, Béton, Placo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Fixation :</span>
                      <span className="font-bold text-[#0B132B]">Vis métalliques incluses</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/produits" 
                  className="w-full text-center bg-[#0B132B] hover:bg-[#0077B6] text-white py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Fiche technique & Cotes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION CALCULATEUR DE BESOINS EXPRESS B2B (Avantage différenciateur absolu) */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B132B] text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blueprint-dark opacity-40 pointer-events-none hidden lg:block" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-[#00B4D8] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Calculator className="w-4 h-4" />
                  <span>Configurateur de Commande Usine</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">
                  Estimez vos volumes de gaines ICTA 3422
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Sélectionnez le calibre requis et le nombre de couronnes pour obtenir instantanément votre métrage total et demander une cotation officielle aux tarifs usine OMEGAP-DZ.
                </p>

                {/* Sélecteur de diamètre */}
                <div className="mb-6">
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    1. Diamètre du conduit :
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.keys(diameterData).map((dia) => (
                      <button
                        key={dia}
                        onClick={() => setSelectedDiameter(dia)}
                        className={`py-2.5 px-2 text-center text-xs font-mono font-bold transition-all ${
                          selectedDiameter === dia
                            ? 'bg-[#00B4D8] text-[#0B132B] shadow-md scale-105'
                            : 'bg-[#1C2541] text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        Ø {dia} mm
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#00B4D8] mt-2 font-mono">
                    Usage recommandé : {currentDiameter.use}
                  </p>
                </div>

                {/* Sélecteur de couronnes */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase text-slate-300">
                      2. Nombre de couronnes (rouleaux) :
                    </label>
                    <span className="font-mono text-sm font-bold text-white bg-[#1C2541] px-3 py-1">
                      {reelCount} bobines
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={reelCount}
                    onChange={(e) => setReelCount(parseInt(e.target.value))}
                    className="w-full accent-[#00B4D8] bg-slate-700 h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>1 couronne (Chantier ponctuel)</span>
                    <span>50 couronnes (Palette complète)</span>
                    <span>100+ couronnes (Conteneur / Grossiste)</span>
                  </div>
                </div>
              </div>

              {/* Panneau de résultat */}
              <div className="lg:col-span-5 bg-[#1C2541] p-6 border border-slate-700/80">
                <div className="border-b border-slate-700 pb-4 mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase">Récapitulatif de dimensionnement</span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-3xl font-heading font-extrabold text-white">
                      {totalMeters.toLocaleString()} <span className="text-lg text-[#00B4D8]">Mètres</span>
                    </span>
                    <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-1">
                      Couronnes de {currentDiameter.reelLength}m
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300 mb-6">
                  <div className="flex justify-between">
                    <span>Référence usine :</span>
                    <span className="text-white font-bold">ICTA-3422-D{selectedDiameter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tire-fil :</span>
                    <span className="text-white">Inclus (Acier Galva)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conditionnement :</span>
                    <span className="text-white">Sous film étirable anti-UV</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disponibilité usine :</span>
                    <span className="text-emerald-400">En stock (Aït Toudert)</span>
                  </div>
                </div>

                <Link
                  to={`/contact?dia=${selectedDiameter}&meters=${totalMeters}`}
                  className="w-full bg-[#00B4D8] hover:bg-[#0096B4] text-[#0B132B] font-bold text-xs uppercase tracking-wider py-3.5 text-center block transition-colors shadow-lg"
                >
                  Recevoir la cotation usine pour {totalMeters}m
                </Link>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Tarif dégressif par volume · Livraison sur site 58 wilayas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POURQUOI CHOISIR OMEGAP-DZ (Avec Photo Réelle du Laboratoire de Contrôle Qualité 750N) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#00B4D8]" />
                <h2 className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest">
                  L'Avantage Industriel OMEGAP-DZ
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B132B] mb-6 leading-tight">
                L'ingénierie de précision au service de la sécurité de vos chantiers
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                Dans le bâtiment et les travaux publics en Algérie, une gaine qui s'écrase sous la chape de béton génère des retards considérables et des surcoûts de réfection. OMEGAP-DZ a calibré ses lignes d'extrusion selon les normes internationales pour garantir une résistance sans compromis.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Matière première 100% vierge sélectionnée",
                    desc: "Polymères ignifugés haute densité sans additifs recyclés fragiles."
                  },
                  {
                    title: "Tenue mécanique testée à 750 Newtons",
                    desc: "Coulage sous dalle béton et passage d'engins sans déformation du conduit."
                  },
                  {
                    title: "Système Turbo-Gliss & tire-fil acier lubrifié",
                    desc: "Cannelures intérieures optimisées réduisant les frottements de 50% au tirage."
                  },
                  {
                    title: "Auto-extinguible et non-propagateur de flamme",
                    desc: "Sécurité incendie certifiée conforme aux règles de sécurité des ERP et logements."
                  },
                  {
                    title: "Capacité industrielle continue & stocks régulés",
                    desc: "Capacité d'approvisionner de grands chantiers AADL, LPP, hôpitaux et zones industrielles."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B132B]">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Photo du banc de test de résistance 750N / Labo de contrôle qualité */}
              <div className="relative border-4 border-white shadow-[0_20px_50px_rgba(15,28,44,0.12)] overflow-hidden bg-slate-900">
                <img 
                  src="/src/assets/images/facility_quality_lab_1792342172202.jpg" 
                  alt="Laboratoire de contrôle qualité et test de compression OMEGAP-DZ" 
                  className="w-full h-[480px] object-cover filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white font-mono text-xs">
                  <div className="bg-[#0B132B]/90 backdrop-blur-md p-4 border border-slate-700/80">
                    <p className="text-[#00B4D8] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Contrôle Qualité Échantillonnage Continu
                    </p>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Chaque lot de production fait l'objet d'essais destructifs de traction, choc à -5°C et compression 750N sur banc d'étalonnage informatisé.
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge flottant ISO & Fabrication Nationale */}
              <div className="absolute -top-6 -right-6 bg-[#0077B6] text-white p-6 shadow-xl hidden sm:block border-2 border-white">
                <p className="text-3xl font-heading font-extrabold font-mono">750N</p>
                <p className="text-[11px] font-mono tracking-wider uppercase text-slate-200 mt-1">Écrasement Garanti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SEO TECHNIQUE (Ciblage des People Also Ask pour Google & AI Overview) */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-[#0077B6] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions Fréquemment Posées</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B132B] mb-4">
              Tout savoir sur nos gaines et conditions de commande
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Réponses techniques et logistiques directes pour les professionnels de l'électricité, bureaux d'études et quincailleries en Algérie.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200/80 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 font-heading font-bold text-base md:text-lg text-[#0B132B] flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180 bg-[#00B4D8] text-white border-[#00B4D8]' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 bg-slate-50/50 text-slate-700 text-sm leading-relaxed border-t border-slate-200/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-slate-50 p-6 border border-slate-200">
            <p className="text-sm text-slate-700 mb-4">
              Vous avez un projet spécifique (marché public, cahier des charges particulier ou calibre sur-mesure) ?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0077B6] hover:text-[#0B132B] uppercase tracking-wider font-mono"
            >
              <span>Échanger avec notre ingénieur technico-commercial</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION FINALE (Architectural Blueprint) */}
      <section className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00B4D8] font-bold block mb-3">
            Approvisionnement Direct Fabricant
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
            Sécurisez vos chantiers avec le standard OMEGAP-DZ
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les centaines d'entrepreneurs du BTPH, promoteurs et distributeurs qui font confiance à la régularité et à la robustesse de nos gaines électriques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-[#00B4D8] hover:bg-[#0096B4] text-[#0B132B] px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Demander un devis usine sous 24h</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/produits" 
              className="w-full sm:w-auto bg-[#1C2541] hover:bg-slate-800 text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors border border-slate-700 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#00B4D8]" />
              <span>Télécharger les fiches techniques</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
