import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  UserCheck, 
  Share2, 
  Printer, 
  Copy, 
  Check, 
  ShieldAlert, 
  ShieldCheck, 
  Lightbulb, 
  Info, 
  Download, 
  ChevronRight, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Table as TableIcon,
  HelpCircle,
  Hash
} from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [copiedCCTP, setCopiedCCTP] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  // Scroll to top and update document title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = article.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', article.metaDescription);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-[#0B132B] mb-4">Article non trouvé</h1>
        <p className="text-slate-600 mb-8 max-w-md">L'article technique demandé n'existe pas ou est en cours de révision par notre bureau d'études.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B4] text-white px-6 py-3 font-heading font-bold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au Centre Technique
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyCCTP = () => {
    const cctpText = `Les conduits encastrés sous dallage, chape ou dalles de compression béton armé seront impérativement de type ICTA 3422, non propagateurs de flamme, d'une résistance à l'écrasement certifiée minimale de 750 N à 23°C, munis d'un tire-fil en acier galvanisé intégré en usine, de marque certifiée conforme aux normes applicables (type OMEGAP-DZ ou équivalent homologué).`;
    navigator.clipboard.writeText(cctpText);
    setCopiedCCTP(true);
    setTimeout(() => setCopiedCCTP(false), 2500);
  };

  const otherArticles = BLOG_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);

  // Schema.org TechArticle + BreadcrumbList JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://www.omegap-dz.com/blog/${article.slug}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://www.omegap-dz.com/blog/${article.slug}`
        },
        "headline": article.title,
        "description": article.metaDescription,
        "inLanguage": "fr-DZ",
        "mainEntityOfPage": `https://www.omegap-dz.com/blog/${article.slug}`,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "image": [
          article.featuredImageUrl,
          ...(article.secondaryImageUrl ? [article.secondaryImageUrl] : [])
        ],
        "author": {
          "@type": "Organization",
          "name": article.author.name,
          "url": "https://www.omegap-dz.com/#organization"
        },
        "publisher": {
          "@type": "Manufacturer",
          "name": "OMEGAP-DZ",
          "url": "https://www.omegap-dz.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.omegap-dz.com/logo.png"
          }
        },
        "dependencies": "NF C 15-100, NA 5275, CEI 61386-22",
        "proficiencyLevel": "Expert / Professionnel BTP",
        "about": [
          { "@type": "Thing", "name": "Gaine ICTA 3422" },
          { "@type": "Thing", "name": "Coulage dalle béton" },
          { "@type": "Thing", "name": "Résistance à l'écrasement 750N" },
          { "@type": "Thing", "name": "Norme NF C 15-100" }
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".article-executive-summary", ".article-takeaways"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.omegap-dz.com/blog/${article.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.omegap-dz.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Centre Technique & Blog",
            "item": "https://www.omegap-dz.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://www.omegap-dz.com/blog/${article.slug}`
          }
        ]
      }
    ]
  };

  return (
    <article className="w-full bg-[#F8FAFC] pb-24">
      {/* Dynamic Schema.org injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs font-mono text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#00B4D8] transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/blog" className="hover:text-[#00B4D8] transition-colors">
              Centre Technique
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#0B132B] font-semibold truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Editorial Header */}
      <header className="bg-[#0B132B] text-white pt-14 pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-6">
            <span className="bg-[#00B4D8] text-[#0B132B] font-heading font-extrabold px-3 py-1 uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
              {article.readTime}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-[#00B4D8]" />
              Publié le {article.datePublished} (Mis à jour le {article.dateModified})
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-8">
            {article.excerpt}
          </p>

          {/* Author Card & Editorial Credentials */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#1C2541] border border-[#00B4D8]/50 flex items-center justify-center font-bold text-sm text-[#00B4D8]">
                Ω
              </div>
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  {article.author.name}
                  <UserCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {article.author.role} · {article.author.department}
                </p>
              </div>
            </div>

            {/* Action Bar (Share, Print, Copy) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="bg-[#1C2541] hover:bg-[#253256] text-slate-200 px-3 py-2 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-colors"
                title="Copier le lien"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#00B4D8]" />}
                {copied ? 'Lien copié !' : 'Partager'}
              </button>
              <button
                onClick={() => window.print()}
                className="bg-[#1C2541] hover:bg-[#253256] text-slate-200 px-3 py-2 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-colors"
                title="Imprimer / Exporter PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#00B4D8]" />
                Imprimer
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Featured Image with Figure Caption */}
        <figure className="bg-white border-2 border-slate-200 shadow-xl overflow-hidden mb-12">
          <div className="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              width={1200}
              height={675}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src = article.featuredImageUrl;
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              <strong>Figure 1.1 :</strong> Cheminement et ancrage de gaines annelées ICTA 3422 OMEGAP-DZ sur ferraillage avant coulage de dalle béton.
            </span>
            <span className="text-slate-400">© Service Technique OMEGAP-DZ</span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Article Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* AEO / AI Overview Quick Fact Summary Box (Direct Answer Engine Optimization) */}
            <section 
              className="article-executive-summary bg-white border-2 border-[#00B4D8] p-6 shadow-sm relative overflow-hidden"
              aria-label="Synthèse d'Ingénierie BTP"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B132B] uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                En Bref · Données Factuelles pour Prescripteurs & Contrôle Technique
              </div>

              <p className="text-sm font-medium text-slate-800 leading-relaxed mb-4">
                Pour toute installation encastrée sous dalle de compression béton en Algérie, la norme <strong>NF C 15-100</strong> et la réglementation <strong>NA 5275</strong> imposent impérativement l'usage de conduits certifiés <strong>ICTA 3422</strong>. Une résistance à la compression de <strong>750 Newtons</strong> est obligatoire pour supporter les agressions lors du coulage sans déformation résiduelle.
              </p>

              {/* Fact pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-200 text-xs font-mono">
                <div className="bg-slate-50 p-2 border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Classement</span>
                  <strong className="text-[#0B132B]">ICTA 3422</strong>
                </div>
                <div className="bg-slate-50 p-2 border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Écrasement</span>
                  <strong className="text-[#0B132B]">≥ 750 N</strong>
                </div>
                <div className="bg-slate-50 p-2 border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Remplissage</span>
                  <strong className="text-[#0B132B]">Max 33% (1/3)</strong>
                </div>
                <div className="bg-slate-50 p-2 border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Tire-fil</span>
                  <strong className="text-[#0B132B]">Acier Galva 0.8mm</strong>
                </div>
              </div>
            </section>

            {/* Key Takeaways Box */}
            <div className="article-takeaways bg-slate-100 border-l-4 border-[#0B132B] p-6">
              <h2 className="text-base font-heading font-bold text-[#0B132B] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00B4D8]" />
                Points Clés à Retenir pour le Chantier
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                {article.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00B4D8] font-bold font-mono shrink-0">0{i+1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B132B] tracking-tight border-b border-slate-200 pb-2">
                  {section.title}
                </h2>

                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}

                {/* Callout Box if present */}
                {section.callout && (
                  <div className={`p-5 my-6 border ${
                    section.callout.type === 'warning'
                      ? 'bg-amber-50 border-amber-300 text-amber-900'
                      : section.callout.type === 'tip'
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-sky-50 border-sky-300 text-sky-950'
                  }`}>
                    <div className="flex items-center gap-2 font-heading font-bold text-sm mb-2">
                      {section.callout.type === 'warning' ? (
                        <ShieldAlert className="w-4 h-4 text-amber-600" />
                      ) : section.callout.type === 'tip' ? (
                        <Lightbulb className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Info className="w-4 h-4 text-sky-600" />
                      )}
                      {section.callout.title}
                    </div>
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed font-normal">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {/* Insert Secondary Image after Section 1 for visual pacing */}
                {section.id === 'definition-icta-3422' && article.secondaryImage && (
                  <figure className="my-8 bg-white border border-slate-200 shadow-md overflow-hidden">
                    <div className="aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                      <img
                        src={article.secondaryImage}
                        alt={article.secondaryImageAlt}
                        width={1200}
                        height={675}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (article.secondaryImageUrl) {
                            (e.target as HTMLImageElement).src = article.secondaryImageUrl;
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-mono">
                      <strong>Figure 1.2 :</strong> {article.secondaryImageAlt}
                    </figcaption>
                  </figure>
                )}

                {/* Insert Abacus Table after Section 3 */}
                {section.id === 'regle-du-tiers' && article.technicalAbacus && (
                  <div className="my-8 bg-white border-2 border-slate-300 shadow-sm overflow-hidden">
                    <div className="bg-[#0B132B] text-white p-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] uppercase tracking-wider mb-1">
                        <TableIcon className="w-3.5 h-3.5" />
                        Données Techniques d'Atelier
                      </div>
                      <h3 className="font-heading font-bold text-sm sm:text-base">
                        {article.technicalAbacus.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 font-light">
                        {article.technicalAbacus.description}
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase">
                          <tr>
                            <th className="p-3">Calibre Gaine</th>
                            <th className="p-3">Section Utile</th>
                            <th className="p-3">Fils 1,5 mm²</th>
                            <th className="p-3">Fils 2,5 mm²</th>
                            <th className="p-3">Fils 6 mm²</th>
                            <th className="p-3">Application Type</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-800">
                          {article.technicalAbacus.rows.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                              <td className="p-3 font-bold text-[#0B132B]">{row.conduit}</td>
                              <td className="p-3 text-slate-600">{row.cableType}</td>
                              <td className="p-3 text-emerald-700 font-semibold">{row.maxConductors}</td>
                              <td className="p-3 text-emerald-700 font-semibold">{row.fillingRatio}</td>
                              <td className="p-3 text-slate-700">{row.typicalUsage}</td>
                              <td className="p-3 text-slate-600 text-[11px] font-sans">{row.typicalUsageCol}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                      <strong>Note d'ingénierie :</strong> {article.technicalAbacus.note}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* CCTP Copy Widget for Architects & Engineers */}
            <div className="bg-[#0B132B] text-white p-6 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  Clause Type pour Prescription CCTP / Devis BTP
                </div>
                <button
                  onClick={handleCopyCCTP}
                  className="bg-[#00B4D8] hover:bg-[#0096B4] text-white px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  {copiedCCTP ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCCTP ? 'Texte Copié !' : 'Copier la Clause'}
                </button>
              </div>
              <p className="font-mono text-xs text-slate-300 leading-relaxed bg-[#1C2541] p-3 border border-slate-700">
                « Les conduits encastrés sous dallage, chape ou dalles de compression béton armé seront impérativement de type ICTA 3422, non propagateurs de flamme, d'une résistance à l'écrasement certifiée minimale de 750 N à 23°C, munis d'un tire-fil en acier galvanisé intégré en usine, de marque certifiée conforme aux normes applicables (type OMEGAP-DZ ou équivalent homologué). »
              </p>
            </div>

            {/* Technical FAQ Accordion */}
            {article.faqRelated && article.faqRelated.length > 0 && (
              <section className="bg-white border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  Foire Aux Questions des Installateurs
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0B132B]">
                  Questions Fréquentes sur la Pose sous Béton
                </h3>

                <div className="divide-y divide-slate-200">
                  {article.faqRelated.map((item, fIdx) => (
                    <div key={fIdx} className="py-3">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                        className="w-full text-left flex items-center justify-between text-sm font-heading font-bold text-[#0B132B] hover:text-[#00B4D8] transition-colors"
                      >
                        <span>{item.question}</span>
                        <span className="font-mono text-slate-400 text-lg">
                          {openFaqIndex === fIdx ? '−' : '+'}
                        </span>
                      </button>
                      {openFaqIndex === fIdx && (
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light pl-2 border-l-2 border-[#00B4D8]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Footer Bio */}
            <div className="bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#0B132B] text-[#00B4D8] flex items-center justify-center font-heading font-extrabold text-2xl shrink-0 border-2 border-[#00B4D8]">
                Ω
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-heading font-bold text-[#0B132B] text-base mb-1">
                  {article.author.name}
                </h4>
                <p className="text-xs text-slate-500 font-mono mb-2">
                  {article.author.role} · {article.author.department}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  L'équipe d'ingénieurs et techniciens de laboratoire d'OMEGAP-DZ teste et audite quotidiennement la résistance mécanique (750N), le comportement au feu et la souplesse transversale de chaque lot d'extrusion produit dans l'usine d'Aït Toudert (Tizi-Ouzou).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar with Table of Contents & B2B Conversion */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Sticky Table of Contents */}
            <div className="bg-white border border-slate-200 p-6 sticky top-24 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-[#0B132B] uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                <Hash className="w-3.5 h-3.5 text-[#00B4D8]" />
                Sommaire de l'Article
              </h3>

              <nav aria-label="Sommaire de l'article" className="space-y-2 text-xs font-sans">
                {article.tableOfContents.map((toc) => (
                  <a
                    key={toc.id}
                    href={`#${toc.id}`}
                    className="block py-1 text-slate-600 hover:text-[#00B4D8] hover:translate-x-1 transition-all leading-snug"
                  >
                    {toc.title}
                  </a>
                ))}
              </nav>

              {/* Normative References Badge List */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Cadre Normatif Référentiel
                </h4>
                <div className="space-y-2">
                  {article.normativeReferences.map((norm, nIdx) => (
                    <div key={nIdx} className="bg-slate-50 p-2.5 border border-slate-200 text-xs">
                      <div className="font-mono font-bold text-[#0B132B] text-[11px]">{norm.code}</div>
                      <div className="text-slate-600 text-[10px] leading-tight mt-0.5">{norm.requirement}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* B2B Quote & Direct Spec CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200 bg-gradient-to-br from-[#0B132B] to-[#1C2541] -mx-6 -mb-6 p-6 text-white">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#00B4D8] uppercase tracking-widest mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Tarif Direct Fabricant
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-2 leading-tight">
                  Besoin d'un approvisionnement en gaine ICTA 3422 ?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Devis sous 24h pour grossistes, promoteurs et installateurs avec expédition dans les 58 wilayas d'Algérie.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-[#00B4D8] hover:bg-[#0096B4] text-white py-2.5 px-3 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  Demander un Chiffrage Usine
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/produits"
                  className="w-full mt-2 bg-transparent hover:bg-white/10 text-slate-300 border border-slate-600 py-2 px-3 font-mono text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3 h-3 text-[#00B4D8]" />
                  Fiche Technique PDF
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Footer Section */}
        <section className="mt-20 pt-12 border-t border-slate-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-[#00B4D8] uppercase tracking-wider">Veille BTP</span>
              <h3 className="text-2xl font-heading font-extrabold text-[#0B132B]">
                Autres Guides & Analyses Techniques
              </h3>
            </div>
            <Link
              to="/blog"
              className="text-xs font-heading font-bold text-[#00B4D8] hover:text-[#0096B4] flex items-center gap-1 uppercase tracking-wider"
            >
              Voir tout le blog
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((rel) => (
              <div
                key={rel.id}
                className="bg-white border border-slate-200 p-5 flex flex-col justify-between hover:border-[#00B4D8] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 border border-slate-200 uppercase">
                    {rel.category}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#0B132B] mt-3 mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 font-light">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{rel.readTime}</span>
                  <Link
                    to={rel.status === 'published' ? `/blog/${rel.slug}` : '/blog'}
                    className="text-[#00B4D8] font-bold flex items-center gap-1 hover:underline"
                  >
                    Consulter <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
