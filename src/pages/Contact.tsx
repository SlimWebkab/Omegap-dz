import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact & Devis</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Notre équipe commerciale et technique est à votre disposition pour étudier vos projets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-light relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-dark -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 shadow-premium"
              >
                <h2 className="text-2xl font-heading font-bold text-dark mb-8">Coordonnées</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-dark mb-1">Siège Social & Usine</p>
                      <p className="text-slate-600 text-sm leading-relaxed">Zone Industrielle de Rouiba<br />Voie C, Alger, Algérie</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-dark mb-1">Téléphone</p>
                      <p className="text-slate-600 text-sm">+213 (0) 21 00 00 00</p>
                      <p className="text-slate-600 text-sm">+213 (0) 550 00 00 00 (Commercial)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-dark mb-1">Email</p>
                      <p className="text-slate-600 text-sm">contact@omegap-dz.com</p>
                      <p className="text-slate-600 text-sm">devis@omegap-dz.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-dark mb-1">Heures d'ouverture</p>
                      <p className="text-slate-600 text-sm">Dimanche - Jeudi : 08h00 - 16h30</p>
                      <p className="text-slate-600 text-sm">Vendredi - Samedi : Fermé</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-dark text-white p-8 shadow-premium flex items-center gap-6"
              >
                <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
                <div>
                  <p className="font-heading font-bold text-lg mb-1">Entreprise Certifiée ISO 9001</p>
                  <p className="text-slate-400 text-sm">Garantie de qualité et de traçabilité sur l'ensemble de notre chaîne de production.</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 shadow-premium"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-dark mb-2">Demande de Devis / Information</h2>
                  <p className="text-slate-600 text-sm">Remplissez le formulaire ci-dessous, notre équipe commerciale vous répondra sous 24h ouvrées.</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="font-bold text-lg mb-2">Message envoyé avec succès !</p>
                    <p className="text-sm">Nous avons bien reçu votre demande. Un conseiller vous contactera très prochainement.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-bold text-dark">Société *</label>
                        <input 
                          type="text" 
                          id="company" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-dark">Nom complet *</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Votre nom et prénom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-dark">Email professionnel *</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="email@societe.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-dark">Téléphone *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="+213 ..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-bold text-dark">Sujet de la demande *</label>
                      <select 
                        id="subject" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis (Gaines ICTA / Conduits)</option>
                        <option value="tech">Assistance technique</option>
                        <option value="partenariat">Demande de partenariat / Distribution</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-dark">Détails de votre projet *</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Veuillez préciser les quantités estimées, les diamètres souhaités ou toute autre exigence technique..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Envoyer la demande
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy Check icon since it wasn't imported from lucide-react initially
function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
