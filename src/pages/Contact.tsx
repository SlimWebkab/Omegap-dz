import { useState, FormEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, Factory, Truck } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Pre-fill state if arriving from the calculator
  const initialDia = searchParams.get('dia');
  const initialMeters = searchParams.get('meters');

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    wilaya: '15 - Tizi Ouzou',
    subject: initialMeters ? 'devis' : 'devis',
    diameter: initialDia || '20',
    message: initialMeters 
      ? `Bonjour, je souhaite recevoir une cotation usine pour ${initialMeters} mètres de gaine ICTA 3422 calibre Ø${initialDia}mm livrée dans ma wilaya.` 
      : ''
  });

  const algerianWilayas = [
    "01 - Adrar", "02 - Chlef", "03 - Laghouat", "04 - Oum El Bouaghi", "05 - Batna", 
    "06 - Béjaïa", "07 - Biskra", "08 - Béchar", "09 - Blida", "10 - Bouira", 
    "11 - Tamanrasset", "12 - Tébessa", "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou", 
    "16 - Alger", "17 - Djelfa", "18 - Jijel", "19 - Sétif", "20 - Saïda", 
    "21 - Skikda", "22 - Sidi Bel Abbès", "23 - Annaba", "24 - Guelma", "25 - Constantine", 
    "26 - Médéa", "27 - Mostaganem", "28 - M'Sila", "29 - Mascara", "30 - Ouargla", 
    "31 - Oran", "32 - El Bayadh", "33 - Illizi", "34 - Bordj Bou Arreridj", "35 - Boumerdès", 
    "36 - El Tarf", "37 - Tindouf", "38 - Tissemsilt", "39 - El Oued", "40 - Khenchela", 
    "41 - Souk Ahras", "42 - Tipaza", "43 - Mila", "44 - Aïn Defla", "45 - Naâma", 
    "46 - Aïn Témouchent", "47 - Ghardaïa", "48 - Relizane", "49 - Timimoun", "50 - Bordj Badji Mokhtar", 
    "51 - Ouled Djellal", "52 - Béni Abbès", "53 - In Salah", "54 - In Guezzam", "55 - Touggourt", 
    "56 - Djanet", "57 - El M'Ghair", "58 - El Meniaa"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Page Header Blueprint */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00B4D8]/20 text-[#00B4D8] text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-[#00B4D8]/30">
              <Factory className="w-3.5 h-3.5" />
              <span>Direction Commerciale & Chiffrage Express B2B</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
              Demande de Devis & Contact Usine
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Consultez nos tarifs d'usine directs, demandez des échantillons de gaines ou étudiez un approvisionnement pour vos chantiers sur les 58 wilayas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact Info Usine */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)]">
                <span className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest block mb-2">
                  Siège & Unité Industrielle
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-[#0B132B] mb-8">
                  Coordonnées OMEGAP-DZ
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B132B] text-sm mb-1">Usine de Production</p>
                      <p className="text-slate-600 text-xs leading-relaxed font-mono">
                        Aït Toudert, Daïra de Ouacif<br />
                        Wilaya de Tizi-Ouzou, 15000, Algérie
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B132B] text-sm mb-1">Direction Commerciale</p>
                      <p className="text-slate-700 text-xs font-mono font-bold">+213 (0) 550 82 00 00</p>
                      <p className="text-slate-500 text-xs font-mono">+213 (0) 550 82 00 01 (WhatsApp Pro)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B132B] text-sm mb-1">Courriels Professionnels</p>
                      <p className="text-slate-700 text-xs font-mono">contact@omegap-dz.com</p>
                      <p className="text-slate-700 text-xs font-mono">commercial@omegap-dz.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0B132B] text-[#00B4D8] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B132B] text-sm mb-1">Horaires Réception & Expéditions</p>
                      <p className="text-slate-600 text-xs font-mono">Dimanche au Jeudi : 08h00 - 17h00</p>
                      <p className="text-slate-500 text-xs font-mono">Permanence samedi pour réceptions camions</p>
                    </div>
                  </li>
                </ul>

                {/* Bloc Logistique 58 Wilayas */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0077B6] font-bold mb-2">
                    <Truck className="w-4 h-4" />
                    <span>Livraison Nationale BTPH</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Départs quotidiens de camions complets ou palettes groupées vers l'ensemble du territoire algérien.
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-[#0B132B] text-white p-8 border border-slate-800 shadow-[0_20px_40px_rgba(15,28,44,0.06)] flex items-start gap-5">
                <ShieldCheck className="w-10 h-10 text-[#00B4D8] shrink-0" />
                <div>
                  <p className="font-heading font-bold text-base mb-1">Conformité Normative Garantie</p>
                  <p className="text-slate-300 text-xs leading-relaxed font-mono">
                    Chaque expédition est accompagnée de notre certificat de conformité usine (essai compression 750N, tenue choc 6 Joules, test au feu).
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de Cotation Usine */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 border border-slate-200/80 shadow-[0_20px_40px_rgba(15,28,44,0.06)]">
                <div className="mb-8">
                  <span className="text-xs font-mono font-bold text-[#0077B6] uppercase tracking-widest block mb-1">
                    Réponse Rapide sous 24h
                  </span>
                  <h2 className="text-2xl font-heading font-extrabold text-[#0B132B] mb-2">
                    Demander une cotation personnalisée
                  </h2>
                  <p className="text-slate-600 text-xs md:text-sm">
                    Précisez les diamètres de conduits souhaités ou le volume de couronnes pour recevoir une offre tarifaire ferme.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-emerald-950">Demande de devis enregistrée !</h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Merci pour votre intérêt envers les produits <strong>OMEGAP-DZ</strong>. Notre service commercial examine votre dossier et vous fera parvenir une offre chiffrée accompagnée des fiches techniques sous 24 heures.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 bg-[#0B132B] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Entreprise / Raison Sociale *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                          placeholder="Ex: SARL BTPH Algérie / Établissement ..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Nom & Prénom de l'Interlocuteur *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                          placeholder="M. / Mme ..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Email Professionnel *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                          placeholder="contact@votre-entreprise.dz"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Numéro de Téléphone *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                          placeholder="0550... / 0661..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Wilaya de Livraison *</label>
                        <select 
                          value={formData.wilaya}
                          onChange={(e) => setFormData({...formData, wilaya: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                        >
                          {algerianWilayas.map((w) => (
                            <option key={w} value={w}>{w}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-bold text-slate-800">Type de besoin *</label>
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors"
                        >
                          <option value="devis">Demande de cotation / Devis bordereau</option>
                          <option value="grossiste">Distribution / Quincaillerie / Revendeur</option>
                          <option value="echantillons">Demande d'échantillons pour bureau de contrôle</option>
                          <option value="tech">Support technique et conformité IANOR</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold text-slate-800">Détails de la commande ou de l'installation *</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#00B4D8] focus:bg-white transition-colors resize-none"
                        placeholder="Indiquez les calibres (Ø16, Ø20, Ø25, Ø32mm), les quantités estimées en couronnes ou mètres, et les délais souhaités..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-[#0B132B] hover:bg-[#1C2541] text-white py-4 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Envoyer la demande de devis usine</span>
                          <Send className="w-4 h-4 text-[#00B4D8]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center font-mono">
                      Vos données techniques restent strictement confidentielles · Réponse garantie sous 24h
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
