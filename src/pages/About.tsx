import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe, Award, Factory, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/images';

export default function About() {
  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Page Header Blueprint */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00B4D8]/20 text-[#00B4D8] text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-[#00B4D8]/30">
              <Factory className="w-3.5 h-3.5" />
              <span>Fabricant Industriel National · Ouacif, W. Tizi-Ouzou</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              L'excellence industrielle au cœur de la Kabylie
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
              OMEGAP-DZ conjugue savoir-faire technologique de pointe, rigueur d'ingénierie et production locale pour sécuriser les réseaux électriques à travers toute l'Algérie.
            </p>
          </div>
        </div>
      </section>

      {/* History & Positioning */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#00B4D8]" />
                <h2 className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest">
                  Notre Histoire & Ancrage
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B132B] mb-6">
                Une infrastructure de production moderne pour bâtir l'Algérie
              </h3>
              
              <div className="space-y-5 text-slate-700 text-sm md:text-base leading-relaxed">
                <p>
                  Implantée à <strong>Aït Toudert, Daïra de Ouacif dans la wilaya de Tizi-Ouzou</strong>, l'entreprise <strong>OMEGAP-DZ</strong> est née d'une ambition claire : substituer les importations de gaines plastiques par des conduits électriques fabriqués localement avec les standards de qualité les plus exigeants au monde.
                </p>
                <p>
                  Nos lignes d'extrusion automatisées transforment des polymères techniques (polypropylène et PVC haute densité) en gaines annelées ICTA 3422 garantissant une résistance à l'écrasement de 750 Newtons. Cette performance assure aux ingénieurs et chefs de chantiers un coulage sous dalle béton sans déformation et un tirage des câbles d'une fluidité parfaite.
                </p>
                <p>
                  Aujourd'hui, OMEGAP-DZ alimente les chantiers majeurs du BTPH (programmes de logements AADL, LPP, hôpitaux, usines, résidences privées) ainsi que le réseau des grossistes et quincailleries des 58 wilayas.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 font-mono text-xs">
                <div className="bg-slate-50 p-4 border border-slate-200/60">
                  <span className="text-[#0077B6] font-bold block text-sm">Norme ICTA 3422</span>
                  <span className="text-slate-500">Conformité NF C 15-100 & IANOR</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200/60">
                  <span className="text-[#0077B6] font-bold block text-sm">58 Wilayas</span>
                  <span className="text-slate-500">Service logistique direct usine</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative border-4 border-white shadow-[0_20px_40px_rgba(15,28,44,0.08)] overflow-hidden bg-slate-900">
                <img 
                  src={IMAGES.hero} 
                  onError={(e) => { e.currentTarget.src = IMAGES.publicUrls.hero; }}
                  alt="Usine d'extrusion de gaines électriques OMEGAP-DZ à Aït Toudert" 
                  width={800}
                  height={520}
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#00B4D8] text-[#0B132B] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider inline-block mb-2">
                    Production Nationale
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Lignes d'extrusion grande vitesse à Ouacif
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-mono">
                    Capacité de production continue · Contrôle dimensionnel laser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#00B4D8]" />
              <h2 className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest">
                Nos Fondations Industrielles
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B132B]">
              Les 4 piliers de l'engagement OMEGAP-DZ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Qualité Certifiée 750N", 
                desc: "Résistance mécanique éprouvée en laboratoire pour résister au tassement du béton vibré et au passage d'engins de chantier." 
              },
              { 
                icon: Zap, 
                title: "Tire-fil & Glisse Turbo", 
                desc: "Intégration d'un fil d'acier galvanisé haute résistance et géométrie interne réduisant l'effort d'aiguillage des électriciens." 
              },
              { 
                icon: Target, 
                title: "Régularité Dimensionnelle", 
                desc: "Tolérances strictes sur les diamètres intérieurs et extérieurs pour assurer un raccordement sans jeu avec toutes les boîtes." 
              },
              { 
                icon: Truck, 
                title: "Disponibilité & Logistique", 
                desc: "Stocks massifs de couronnes Ø16 à Ø40mm prêts à l'enlèvement ou expédiés en flux tendu vers vos dépôts régionaux." 
              }
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)] flex flex-col justify-between hover:border-[#00B4D8] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#0077B6] mb-6">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-[#0B132B] mb-3">{pillar.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[11px] text-[#00B4D8] font-bold">
                  STANDARD 0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Future */}
      <section className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00B4D8] font-bold block mb-3">
                Vision & Perspectives
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 leading-tight">
                Moderniser durablement les réseaux électriques algériens
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base">
                À mesure que l'Algérie accélère ses chantiers d'urbanisation, de raccordement industriel et de déploiement de la fibre optique (FTTH), le besoin de conduits fiables devient un enjeu national de sécurité publique.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
                OMEGAP-DZ investit en permanence dans l'optimisation de ses mélanges polymères, la réduction de son empreinte énergétique et l'extension de son catalogue vers les gaines préfilées et les conduits de très gros calibres.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B4] text-[#0B132B] font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Visiter l'usine ou demander un partenariat</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-[#1C2541] p-8 border border-slate-700/80">
              <h4 className="text-lg font-heading font-bold text-white mb-6 border-b border-slate-700 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00B4D8]" /> Engagements Qualité Certifiés
              </h4>
              <ul className="space-y-4 text-xs font-mono text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Résistance à la compression 750 N (Norme NF EN 61386-22)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Résistance à l'impact 6 Joules à température de -5°C</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Isolation électrique &gt; 100 MΩ sous 500V continu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Non-propagation de la flamme (Essai au brûleur 1kW)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
